import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      guest_name,
      guest_family,
      guest_email,
      guest_phone,
      hotel,
      food_restriction,
      welcome_dinner,
      agriturism,
      wedding,
      dinner_wedding,
      dinner_agriturism_wedding,
      cant_come,
    } = await req.json();

    console.log(
      guest_name,
      guest_family,
      guest_email,
      guest_phone,
      hotel,
      food_restriction,
      welcome_dinner,
      agriturism,
      wedding,
      dinner_wedding,
      dinner_agriturism_wedding,
      cant_come
    );

    // Transporter using Gmail (you can also use SMTP provider or Resend)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // Email options
    await transporter.sendMail({
      from: `${process.env.EMAIL_USER}`,
      to: "amanklug@gmail.com", // where the message goes
      subject: `CASAMENTO: Nova Confirmação de ${guest_name}`,
      html: `<p><b>Nome do Convidado:</b> ${guest_name}</p>
             <p><b>Familiares:</b> ${guest_family ? guest_family : "N/A"}</p>
             <p><b>Email:</b> ${guest_email}</p>
             <p><b>Telefone:</b> ${guest_phone}</p>
             <p><b>Local de hospedagem:</b> ${hotel ? hotel : "N/A"}</p>
             <p><b>Restrições Alimentares:</b> ${
               food_restriction ? food_restriction : "N/A"
             }</p>
             ${
               welcome_dinner
                 ? "<p><b>Vai soemnte para Welcome Dinner</b></p>"
                 : ""
             }
             ${agriturism ? "<p><b>Vai somente para Agriturismo</b></p>" : ""}
             ${wedding ? "<p><b>Vai somente para o Casamento</b></p>" : ""}
             ${
               dinner_wedding
                 ? "<p><b>Vai para Welcome Dinner e Casamento</b></p>"
                 : ""
             }
             ${
               dinner_agriturism_wedding
                 ? "<p><b>Vai para Welcome Dinner, Agriturismo e Casamento</b></p>"
                 : ""
             }
             ${cant_come ? "<p><b>Não vai poder comparecer</b></p>" : ""}
             `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
