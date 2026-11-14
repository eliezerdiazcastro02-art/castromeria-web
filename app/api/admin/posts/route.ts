import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const customPostsPath = path.join(process.cwd(), "data", "customPosts.json");

function getCustomPosts() {
  try {
    if (!fs.existsSync(customPostsPath)) {
      fs.writeFileSync(customPostsPath, JSON.stringify([], null, 2));
      return [];
    }
    const data = fs.readFileSync(customPostsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading customPosts.json:", err);
    return [];
  }
}

export async function GET() {
  const posts = getCustomPosts();
  return NextResponse.json({ success: true, posts });
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Falta el ID del post" }, { status: 400 });
    }

    const posts = getCustomPosts();
    const postToDelete = posts.find((p: any) => p.id === id);
    const updatedPosts = posts.filter((p: any) => p.id !== id);

    fs.writeFileSync(customPostsPath, JSON.stringify(updatedPosts, null, 2));

    // Delete image file from disk if in gallery_uploads
    if (postToDelete && postToDelete.image && postToDelete.image.startsWith("/gallery_uploads/")) {
      const filename = postToDelete.image.replace("/gallery_uploads/", "");
      const filePath = path.join(process.cwd(), "public", "gallery_uploads", filename);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (unlinkErr) {
          console.warn("Could not delete file:", filePath, unlinkErr);
        }
      }
    }

    return NextResponse.json({ success: true, remaining: updatedPosts.length });
  } catch (error: any) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: error.message || "Error al eliminar" }, { status: 500 });
  }
}
