import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailHtml, EmailField } from '@/lib/email-template';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, ...formData } = body;

    // Basic validation
    if (!subject || (!formData.name && !formData.companyName && !formData.firstName) || !formData.email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const fields: EmailField[] = [];
    const fieldLabels: { [key: string]: string } = {
        name: 'Ansprechpartner',
        firstName: 'Vorname',
        lastName: 'Nachname',
        companyName: 'Firma',
        email: 'E-Mail',
        phone: 'Telefon',
        service: 'Gewünschter Service',
        income: 'Nettoeinkommen',
        vehiclePrice: 'Fahrzeugpreis',
        downPayment: 'Anzahlung',
        message: 'Nachricht',
        privacy: 'Datenschutz akzeptiert'
    };

    const fieldOrder = ['name', 'firstName', 'lastName', 'companyName', 'email', 'phone', 'service', 'income', 'vehiclePrice', 'downPayment', 'message', 'privacy'];

    fieldOrder.forEach(key => {
        const value = formData[key];
        if (Object.prototype.hasOwnProperty.call(formData, key) && value !== undefined && value !== null && value !== '') {
            const label = fieldLabels[key] || key;
            let formattedValue = value;

            if (key === 'privacy') {
              formattedValue = value ? 'Ja' : 'Nein';
            }

            if (['income', 'vehiclePrice', 'downPayment'].includes(key)) {
                formattedValue = `${value} €`;
            }
            
            fields.push({ label, value: String(formattedValue) });
        }
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlBody = generateEmailHtml(subject, fields);

    const mailOptions = {
      from: `"Webseite Autogalerie Nord" <${process.env.SMTP_SENDER || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: formData.email,
      subject: subject,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}

