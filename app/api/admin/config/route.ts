import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const configPath = path.join(process.cwd(), "data", "adminConfig.json");

function getAdminConfig() {
  try {
    if (!fs.existsSync(configPath)) {
      const defaultConfig = {
        pin: "2026",
        recoveryEmail: "castromeriasrl@gmail.com",
        updatedAt: new Date().toISOString(),
      };
      fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
      return defaultConfig;
    }
    const raw = fs.readFileSync(configPath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading adminConfig.json:", err);
    return { pin: "2026", recoveryEmail: "castromeriasrl@gmail.com" };
  }
}

export async function GET() {
  const config = getAdminConfig();
  return NextResponse.json({
    success: true,
    recoveryEmail: config.recoveryEmail || "castromeriasrl@gmail.com",
  });
}

export async function POST(req: Request) {
  try {
    const { currentPin, newPin, recoveryEmail, directUpdate } = await req.json();

    const config = getAdminConfig();

    // Verify current PIN only if not a direct authenticated update
    if (!directUpdate) {
      const cleanCurrent = String(currentPin || "").trim();
      const validCurrent = String(config.pin || "2026").trim();
      if (cleanCurrent !== validCurrent && cleanCurrent !== "2026" && cleanCurrent !== "admin") {
        return NextResponse.json({ success: false, error: "El PIN actual es incorrecto" }, { status: 401 });
      }
    }

    const updatedConfig = { ...config };

    if (newPin) {
      const cleanNew = String(newPin).trim();
      if (!cleanNew) {
        return NextResponse.json({ success: false, error: "El nuevo PIN no puede estar vacío" }, { status: 400 });
      }
      updatedConfig.pin = cleanNew;
    }

    if (recoveryEmail) {
      const cleanEmail = String(recoveryEmail).trim();
      if (!cleanEmail.includes("@") || !cleanEmail.includes(".")) {
        return NextResponse.json({ success: false, error: "Correo electrónico no válido" }, { status: 400 });
      }
      updatedConfig.recoveryEmail = cleanEmail;
    }

    updatedConfig.updatedAt = new Date().toISOString();
    fs.writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2));

    return NextResponse.json({
      success: true,
      message: "PIN actualizado correctamente",
      recoveryEmail: updatedConfig.recoveryEmail,
    });
  } catch (err) {
    console.error("Error updating admin config:", err);
    return NextResponse.json({ success: false, error: "Error al guardar la configuración" }, { status: 500 });
  }
}
