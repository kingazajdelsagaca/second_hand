"use server";

import nodemailer from "nodemailer";

type ContactFunctionResponse = {
  status: "fail" | "success";
};

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT) || 587,
  secure: process.env.NODEMAILER_PORT === "465" || false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
});

export async function ContactFunction(
  _state: any,
  data: FormData
): Promise<ContactFunctionResponse> {
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.NODEMAILER_DESTINATION_EMAIL,
      subject: "arnia.pl - Formularz kontaktowy",
      text: message,
      html: `
        Imię i nazwisko: <strong>${name}</strong> <br/>
        Adres Email: <strong>${email}</strong> <br/> <br/>
        <p>${message}</p>
      `,
    });

    return {
      status: "success",
    };
  } catch (err) {
    console.error("Failed to send email:", err);
  }

  return {
    status: "fail",
  };
}
