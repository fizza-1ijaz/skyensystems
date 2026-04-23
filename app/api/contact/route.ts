import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In a real production environment, you would use a service like Resend, Nodemailer, or SendGrid here.
    // Example:
    // await resend.emails.send({
    //   from: 'contact@skyensolutions.com',
    //   to: 'info@skyensolutions.com',
    //   subject: `New Contact Form Submission: ${data.service}`,
    //   text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    // });

    console.log("Contact Form Submission received:", data);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
