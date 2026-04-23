import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  organization?: string;
  service: string;
  email: string;
  phone: string;
  message: string;
  agreeTerms?: boolean;
  agreePrivacy?: boolean;
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;

function validatePayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const payload = data as Record<string, unknown>;

  const requiredFields = ["name", "service", "email", "phone", "message"] as const;
  return requiredFields.every(
    (field) => typeof payload[field] === "string" && payload[field].trim().length > 0,
  );
}

export async function POST(request: Request) {
  try {
    const data: unknown = await request.json();

    if (!validatePayload(data)) {
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 },
      );
    }

    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
    if (missingEnvVars.length > 0) {
      console.error("Missing contact mail env vars:", missingEnvVars);
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `New Contact Form Submission - ${data.service}`,
      text: [
        "New inquiry from skyensolutions.com",
        "",
        `Name: ${data.name}`,
        `Organization: ${data.organization?.trim() || "N/A"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Service: ${data.service}`,
        `Agreed Terms: ${data.agreeTerms ? "Yes" : "No"}`,
        `Agreed Privacy: ${data.agreePrivacy ? "Yes" : "No"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Contact form email send failed:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
