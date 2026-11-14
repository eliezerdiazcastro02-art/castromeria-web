import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const customPostsPath = path.join(process.cwd(), "data", "customPosts.json");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = ((formData.get("title") as string) || "Pieza Fabricada").trim();
    const category = ((formData.get("category") as string) || "").trim();
    const categoryLabel = ((formData.get("categoryLabel") as string) || "").trim();
    const material = ((formData.get("material") as string) || "").trim();
    const tolerancia = ((formData.get("tolerancia") as string) || "").trim();
    const rawDesc = ((formData.get("description") as string) || "").trim();
    const description = rawDesc || "Fabricación a medida realizada en taller Castromeria.";

    if (!file) {
      return NextResponse.json({ error: "No se seleccionó ningún archivo de imagen" }, { status: 400 });
    }

    if (!category || category === "all" || category === "general") {
      return NextResponse.json({ error: "La categoría es obligatoria para publicar la foto." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "gallery_uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Safe sanitized unique filename
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}-${safeName}`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);

    const newPost = {
      id: `custom-${Date.now()}`,
      title,
      category,
      categoryLabel,
      image: `/gallery_uploads/${filename}`,
      material,
      tolerancia,
      description,
      likes: 1,
      featured: true,
      createdAt: new Date().toISOString(),
    };

    // Save to customPosts.json
    let existingPosts: any[] = [];
    if (fs.existsSync(customPostsPath)) {
      try {
        const raw = fs.readFileSync(customPostsPath, "utf-8");
        existingPosts = JSON.parse(raw);
      } catch (e) {
        existingPosts = [];
      }
    }

    // Prepend new post
    const updated = [newPost, ...existingPosts];
    fs.writeFileSync(customPostsPath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message || "Error al subir la imagen" }, { status: 500 });
  }
}
