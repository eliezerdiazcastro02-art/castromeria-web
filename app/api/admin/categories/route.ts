import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const categoriesPath = path.join(process.cwd(), "data", "categories.json");

function getCategories(): { id: string; name: string }[] {
  try {
    if (!fs.existsSync(categoriesPath)) {
      const defaultCats = [
        { id: "cnc", name: "Mecanizado CNC" },
        { id: "laser", name: "Corte Láser" },
        { id: "inox", name: "Mobiliario Inox" },
        { id: "soldadura", name: "Soldadura" },
        { id: "taller", name: "Taller & Planta" },
      ];
      fs.writeFileSync(categoriesPath, JSON.stringify(defaultCats, null, 2));
      return defaultCats;
    }
    const data = fs.readFileSync(categoriesPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading categories.json:", err);
    return [];
  }
}

export async function GET() {
  const categories = getCategories();
  return NextResponse.json({ success: true, categories });
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Nombre de categoría inválido" }, { status: 400 });
    }

    const trimmed = name.trim();
    const categories = getCategories();

    // Check if category already exists (case-insensitive)
    const existing = categories.find((c) => c.name.toLowerCase() === trimmed.toLowerCase());
    if (existing) {
      return NextResponse.json({ success: true, category: existing, categories });
    }

    // Slugify id
    const id = trimmed
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `cat-${Date.now()}`;

    const newCat = { id, name: trimmed };
    const updated = [...categories, newCat];
    fs.writeFileSync(categoriesPath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true, category: newCat, categories: updated });
  } catch (error: any) {
    console.error("Error adding category:", error);
    return NextResponse.json({ error: error.message || "Error al crear categoría" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Falta el ID de la categoría" }, { status: 400 });
    }

    const categories = getCategories();
    const updated = categories.filter((c) => c.id !== id);
    fs.writeFileSync(categoriesPath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true, categories: updated });
  } catch (error: any) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: error.message || "Error al eliminar categoría" }, { status: 500 });
  }
}
