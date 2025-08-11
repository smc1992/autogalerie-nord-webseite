// src/app/fahrzeugangebote/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';



// Diese Komponente enthält die gesamte Logik für den Marktplatz
// Diese Komponente enthält die gesamte Logik für den Marktplatz
function MarketplaceWidget() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const host = document.createElement('div');
    host.id = 'am-marketplace';
    host.setAttribute('api-key', '0536fa11-99df-43f8-bf26-42af233f5478');
    host.setAttribute('urls-imprint', 'https://autogalerie-nord.de/impressum');
    host.setAttribute('urls-privacy', 'https://autogalerie-nord.de/datenschutz');
    host.setAttribute('urls-terms', JSON.stringify({ de: '', en: '', fr: '', es: '' }));

    wrap.innerHTML = '';
    wrap.appendChild(host);
    hostRef.current = host;

    const script = document.createElement('script');
    script.id = 'pxc-amm-loader-manual';
    script.src = 'https://cdn.dein.auto/pxc-amm/loader.nocache';
    script.setAttribute('api-key', '0536fa11-99df-43f8-bf26-42af233f5478');
    script.setAttribute('urls-terms', '{"de":"","en":"","fr":"","es":""}');
    script.setAttribute('urls-privacy', '{"de":"https://autogalerie-nord.de/datenschutz","en":"","fr":"","es":""}');
    script.setAttribute('urls-imprint', '{"de":"https://autogalerie-nord.de/impressum","en":"","fr":"","es":""}');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      try { if (host.parentElement) host.parentElement.removeChild(host); } catch {}
      try { document.body.removeChild(script); } catch {}
      hostRef.current = null;
    };
  }, []);

  return (
    <>
      <div id="am-marketplace-nav" style={{ position: 'relative', display: 'block', height: 1, minHeight: 1 }} />
      <div ref={wrapperRef} />
    </>
  );
}

// Die Hauptseiten-Komponente
export default function FahrzeugangebotePage() {
  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => document.body.classList.remove('bg-gray-100');
  }, []);

  return (
    <>
        <section className="pt-32 pb-16 bg-gray-50">
          <div className="max-w-7xl mx-auto p-4 lg:p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Fahrzeug finden</h2>
            <MarketplaceWidget />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4">Geprüfte Gebrauchtwagen</h3>
                <p>Jedes Fahrzeug in unserem Angebot durchläuft einen strengen Qualitätscheck. Kaufen Sie mit Vertrauen und Sicherheit – Ihr Traumauto wartet auf Sie.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4">Flexible Finanzierung</h3>
                <p>Wir bieten maßgeschneiderte Finanzierungslösungen, die zu Ihrem Budget passen. Sprechen Sie uns an und lassen Sie sich unverbindlich beraten.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4">Große Markenvielfalt</h3>
                <p>Von sportlichen Kleinwagen bis zu geräumigen SUVs – bei uns finden Sie eine breite Auswahl an Fahrzeugen führender Hersteller.</p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
