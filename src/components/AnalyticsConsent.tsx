"use client";

"use client";

import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';
import { useConsent } from '@/lib/consent'; // Importiert den Consent-Hook

export default function AnalyticsConsent() {
  const { consent } = useConsent(); // Ruft den aktuellen Consent-Status ab
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const fbId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <>
      {/* Google tag (gtag.js) – lädt, aber Consent default = denied */}
      {gaId && (
        <>
          <Script 
            id="gtag-base" 
            strategy="afterInteractive" 
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} 
          />
          <Script id="gtag-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              // Consent Mode: Defaults zunächst "denied"
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied'
              });
              // Das 'config' wird vom CookieBanner nach Einwilligung übernommen.
            `}
          </Script>
        </>
      )}
      {/* Meta Pixel – wird nur geladen und ausgeführt, wenn Marketing-Zustimmung vorliegt */}
      {fbId && consent.marketing && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      <CookieBanner />
    </>
  );
}
