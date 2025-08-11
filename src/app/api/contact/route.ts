import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Bitte füllen Sie alle Pflichtfelder aus.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #E52318; text-align: center;">Neue Kontaktanfrage</h2>
          <p>Sie haben eine neue Anfrage über das Kontaktformular der Autogalerie Nord erhalten:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${firstName} ${lastName}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; font-weight: bold;">E-Mail:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; font-weight: bold;">Telefon:</td><td style="padding: 8px;">${phone || 'Nicht angegeben'}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px; font-weight: bold;">Betreff:</td><td style="padding: 8px;">${subject}</td></tr>
          </table>
          <h3 style="color: #333;">Nachricht:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
            <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 0.8em; color: #777; text-align: center;">Diese E-Mail wurde automatisch von der Website der Autogalerie Nord versendet.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Autogalerie Nord Website" <${process.env.EMAIL_USER}>`,
      to: 'info@autogalerie-nord.de',
      subject: `Neue Anfrage: ${subject}`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.' });

  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json({ success: false, message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' }, { status: 500 });
  }
}
