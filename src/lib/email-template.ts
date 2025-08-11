export interface EmailField {
  label: string;
  value: string | number;
}

export const generateEmailHtml = (subject: string, fields: EmailField[]): string => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const logoUrl = `${siteUrl}/logo.png`;

  const fieldsHtml = fields
    .map(
      (field) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #555555; width: 30%;"><strong>${field.label}</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-size: 14px; color: #333333;">${field.value}</td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        body {
          font-family: 'Montserrat', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body style="font-family: 'Montserrat', sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center">
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
              <!-- Header -->
              <tr>
                <td align="center" style="background-color: #111827; padding: 20px;">
                  <img src="${logoUrl}" alt="Autogalerie Nord Logo" width="200" style="display: block;">
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding: 30px 40px;">
                  <h1 style="font-size: 24px; color: #111827; margin-bottom: 20px;">${subject}</h1>
                  <p style="font-size: 16px; color: #555555; line-height: 1.6;">Sie haben eine neue Anfrage über Ihre Webseite erhalten. Nachfolgend die Details:</p>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px; border: 1px solid #eeeeee; border-radius: 4px;">
                    ${fieldsHtml}
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td align="center" style="background-color: #f8f8f8; padding: 20px; border-top: 1px solid #eeeeee;">
                  <p style="font-size: 12px; color: #888888; margin: 0;">Autogalerie Nord | Lüneburger Str. 30, 21435 Stelle</p>
                  <p style="font-size: 12px; color: #888888; margin: 0;">Diese E-Mail wurde automatisch generiert.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
