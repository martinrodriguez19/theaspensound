// app/contacto/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  repertoire: string;
}) {
  const { name, email, phone, message, date, repertoire } = data;

  await resend.emails.send({
    from: "Contacto The Aspen Sound <onboarding@resend.dev>", // Cambia esto por tu dominio verificado en Resend
    to: ["tuemail@ejemplo.com"], // Reemplaza con tu email personal
    subject: "Nueva consulta de contratación",
    html: `
      <h2>Nueva consulta recibida</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Fecha de contratación:</strong> ${date}</p>
      <p><strong>Repertorio:</strong> ${repertoire}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
  });
}