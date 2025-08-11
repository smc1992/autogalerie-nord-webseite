import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnalyticsConsent from '@/components/AnalyticsConsent';
import { ConsentProvider } from '@/lib/consent';

export const metadata: Metadata = {
  title: 'Autogalerie Nord - Faszination Mobilität',
  description: 'Ihr Partner für Gebrauchtwagen in Norddeutschland',
};

const customStyles = `
  body {
    font-family: 'Montserrat', sans-serif;
  }
  .group:hover .group-hover\:block {
    display: block;
  }
  .hero-bg {
    background-image: url('/Bilder/Hintergrundbild Hero.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .sticky-header {
    transition: all 0.3s ease;
  }
  .sticky-header.scrolled {
    box-shadow: 0 2px 20px rgba(229, 35, 24, 0.2);
  }
`;

const tailwindConfig = `
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#E52318',
        secondary: '#1f2937'
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px'
      }
    }
  }
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* CSS-Dateien exakt wie in index.html geladen */}
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/icons/remixicon.min.css" />

        {/* Benutzerdefinierte Stile aus index.html injiziert */}
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      </head>
      <body className="bg-white">
        <ConsentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <AnalyticsConsent />
        </ConsentProvider>

        {/* Skripte exakt wie in index.html geladen (ohne das fälschlicherweise angenommene jQuery) */}
        <Script src="/js/tailwind.js" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      </body>
    </html>
  );
}