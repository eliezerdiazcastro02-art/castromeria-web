import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string) || "Proyecto Industrial";
    const category = (formData.get("category") as string) || "cnc";
    const categoryLabel = (formData.get("categoryLabel") as string) || "Mecanizado CNC";
    const material = (formData.get("material") as string) || "Acero / Metal";
    const tolerancia = (formData.get("tolerancia") as string) || "±0.01 mm";
    const description = (formData.get("description") as string) || "Pieza fabricada en taller con maquinaria de precisión.";

    if (!file) {
      return NextResponse.json({ error: "No se seleccionó ningún archivo" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}-${safeName}`;
    const uploadDir = path.join(process.cwd(), "public", "gallery_uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, buffer);

    const newPost = {
      id: `post-${Date.now()}`,
      title,
      category,
      categoryLabel,
      image: `/gallery_uploads/${filename}`,
      material,
      tolerancia,
      description,
      likes: 1,
      featured: true,
    };

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    console.error("Error al subir imagen:", error);
    return NextResponse.json({ error: error.message || "Error al procesar subida" }, { status: 500 });
  }
}
