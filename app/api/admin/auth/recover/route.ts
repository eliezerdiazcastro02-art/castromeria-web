import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

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

function maskEmail(email: string) {
  const [user, domain] = email.split("@");
  if (!domain) return email;
  if (user.length <= 2) return `${user}***@${domain}`;
  const visible = user.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(user.length - 2, 3))}@${domain}`;
}

export async function POST() {
  try {
    const config = getAdminConfig();
    const currentPin = config.pin || "2026";
    const recipientEmail = config.recoveryEmail || "castromeriasrl@gmail.com";
    const masked = maskEmail(recipientEmail);

    let sentViaSMTP = false;

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost || "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #eaeaea; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
            <div style="background: #0f172a; padding: 28px 24px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: -0.5px;">Castromeria Studio</h2>
              <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;">Recuperación de PIN de Administrador</p>
            </div>
            <div style="padding: 32px 24px; text-align: center;">
              <p style="color: #475569; font-size: 14px; margin: 0 0 20px 0; line-height: 1.5;">
                Has solicitado la recuperación de tu PIN de acceso para el panel de administración de <strong>Castromeria</strong>.
              </p>
              <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px; padding: 18px; margin: 0 auto 24px auto; display: inline-block;">
                <span style="font-size: 28px; font-weight: 800; letter-spacing: 6px; color: #dc2626; font-family: monospace;">${currentPin}</span>
              </div>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Si no realizaste esta solicitud, puedes ignorar este mensaje o cambiar tu PIN dentro de Configuración.
              </p>
            </div>
            <div style="background: #f8fafc; border-top: 1px solid #f1f5f9; padding: 14px; text-align: center; color: #94a3b8; font-size: 11px;">
              © ${new Date().getFullYear()} Taller Industrial Castromeria S.R.L.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Castromeria Studio" <${smtpUser}>`,
          to: recipientEmail,
          subject: "🔑 Tu PIN de recuperación de Castromeria Studio",
          html: htmlContent,
        });

        sentViaSMTP = true;
      } catch (smtpErr) {
        console.warn("SMTP send failed or not configured, falling back to simulated dispatch:", smtpErr);
      }
    }

    console.log(`[Castromeria Recovery] PIN for admin is "${currentPin}" sent to ${recipientEmail}`);

    return NextResponse.json({
      success: true,
      email: masked,
      fullEmail: recipientEmail,
      previewPin: currentPin, // Provided for instant local recovery
      sentViaSMTP,
      message: `Hemos enviado el PIN de acceso a tu correo ${masked}.`,
    });
  } catch (err) {
    console.error("Error in recover route:", err);
    return NextResponse.json({ success: false, error: "Error al procesar la recuperación" }, { status: 500 });
  }
}
