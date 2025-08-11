"use client";

import Script from 'next/script';
import { useEffect } from 'react';
import FadeInSection from '@/components/FadeInSection';

// TypeScript-Definitionen für jQuery und Quicksearch
interface Manufacturer {
  name: string;
}

interface Model {
  name: string;
}

interface MapItem {
  value: string;
  text: string;
}

interface MarketplaceConfig {
  url: string;
  renameManufacturers: boolean;
  culture: string;
  hideOtherManufactueres: boolean;
  modelsWithoutFinds: string;
  modelsWithCounter: boolean;
  sortManAlphabetic: boolean;
  target: string;
  hash: string;
  api: {
    url: string;
    key: string;
  };
}

declare global {
  interface Window {
    jQuery: JQueryStatic;
    $: JQueryStatic;
    quicksearch: {
      init: (config: MarketplaceConfig) => void;
    };
    marketplace: MarketplaceConfig;
  }
}

const repairFilters = async (apiKey: string) => {
  const $ = window.jQuery;

  // Hilfsfunktion zum Befüllen der Select-Felder
  const populateSelect = (selector: string, data: MapItem[], defaultOption: string) => {
    const select = $(selector);
    if (select.length === 0) return;
    
    // Bestehende Optionen (außer dem Standard) entfernen
    select.find('option:not([value=""])').remove();
    
    data.forEach(item => {
      select.append($('<option>', { value: item.value, text: item.text }));
    });
  };

  // Wrapper für fetch, um Fehlerbehandlung zu zentralisieren
  const fetchData = async (url: string) => {
    const response = await fetch(url, { mode: 'cors' }); // CORS-Anfrage
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
  };

  try {
    // 1. Statische Filter (Preis, etc.) sofort befüllen
    const priceSteps = [5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 75000, 100000];
    $('#preismax').empty().append('<option value="">Max. Preis</option>').append(priceSteps.map(p => `<option value="${p}">bis ${p.toLocaleString('de-DE')} €</option>`).join(''));
    const kmSteps = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 125000, 150000];
    $('#kilometerbis').empty().append('<option value="">Max. Kilometer</option>').append(kmSteps.map(km => `<option value="${km}">bis ${km.toLocaleString('de-DE')} km</option>`).join(''));
    const yearSteps = Array.from({length: 10}, (_, i) => new Date().getFullYear() - i);
    $('#zulassungvon').empty().append('<option value="">Min. Zulassung</option>').append(yearSteps.map(y => `<option value="${y}">ab ${y}</option>`).join(''));

    // 2. Hersteller laden (asynchron)
    const manufacturers = await fetchData(`https://api.pixel-base.de/marketplace/v3-11365/manufacturers?key=${apiKey}`);
    if (manufacturers && manufacturers.length > 0) {
      const herstellerData = manufacturers.map((m: Manufacturer): MapItem => ({ value: m.name, text: m.name })).sort((a: MapItem, b: MapItem) => a.text.localeCompare(b.text));
      populateSelect('#hersteller', herstellerData, 'Alle Hersteller');
    }

    // 3. Event-Handler für Modell-Abhängigkeit (einmalig binden)
    $('#hersteller').off('change').on('change', async (event) => {
      const selectedMake = (event.currentTarget as HTMLSelectElement).value;
      const modellSelect = $('#modell');
      modellSelect.find('option:not([value=""])').remove(); // Alte Modelle entfernen

      if (selectedMake) {
        try {
          modellSelect.prop('disabled', true); // Deaktivieren während des Ladens
          const models = await fetchData(`https://api.pixel-base.de/marketplace/v3-11365/models?key=${apiKey}&make=${selectedMake}`);
          if (models && models.length > 0) {
            const modelData = models.map((m: Model): MapItem => ({ value: m.name, text: m.name })).sort((a: MapItem, b: MapItem) => a.text.localeCompare(b.text));
            populateSelect('#modell', modelData, 'Alle Modelle');
          }
        } catch (error) {
            console.error(`Fehler beim Laden der Modelle für ${selectedMake}:`, error);
        } finally {
            modellSelect.prop('disabled', false); // Wieder aktivieren
        }
      }
    });

  } catch (error) {
    console.error('Fehler im manuellen Filter-Fallback:', error);
    // Hier könnte man eine Fehlermeldung für den User anzeigen
  }
};

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Das Konfigurationsobjekt wird an das window-Objekt gehängt, um es global verfügbar zu machen,
      // da externe Skripte es oft im globalen Scope erwarten.
      window.marketplace = {
        url: '/fahrzeugangebote', // Relative URL für Domain-Unabhängigkeit
        renameManufacturers: true,
        culture: 'de-DE',
        hideOtherManufactueres: false,
        modelsWithoutFinds: 'show', // Zeige alle Modelle, auch wenn keine Fahrzeuge gefunden werden
        modelsWithCounter: false,
        sortManAlphabetic: true,
        target: '/fahrzeugangebote',
        hash: '#!',
        api: {
          url: 'https://api.pixel-base.de/marketplace/v3-11365/',
          key: '0536fa11-99df-43f8-bf26-42af233f5478'
        }
      };

      const initQuicksearch = () => {
        const $ = window.jQuery;
        if ($ && typeof window.quicksearch !== 'undefined') {
          console.log("jQuery and quicksearch are ready. Initializing...");

          // Initialize the original quicksearch logic for dynamic dropdowns and counts
          if (window.marketplace) {
            window.quicksearch.init(window.marketplace);
          } else {
            console.error("Marketplace configuration is not available.");
            return; // Stop if config is missing
          }

          // Überlasse dem originalen quicksearch die Link-Generierung (Hash-Routing `#!`)
          const targetUrl = window.marketplace?.url || '/fahrzeugangebote';
          $('#carsearchlink').attr('href', targetUrl);
          // WICHTIG: kein preventDefault/kein onClick – quicksearch ergänzt selbst den Hash mit den aktiven Filtern

        } else {
          // Retry if scripts are not loaded yet
          setTimeout(initQuicksearch, 100);
        }
      };

      initQuicksearch();
    }
  }, []);

  return (
    <>
      {/* Hero Section - Exact copy from original */}
      <section className="hero-bg relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative w-full">
          <div className="w-full px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Exklusive<br />
                  <span className="text-primary">Premiumfahrzeuge</span><br />
                  <span className="text-2xl lg:text-3xl font-medium opacity-90">BMW • Mercedes • Audi</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light mb-8 opacity-90">
                  Autogalerie Nord
                </p>
                <a href="/fahrzeugangebote" className="inline-block">
                  <button className="bg-primary text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Jetzt entdecken
                  </button>
                </a>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Exact copy from original */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Über <span className="text-primary">70</span> sofort verfügbare Fahrzeuge
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Finden Sie Ihren Traumwagen in wenigen Klicks aus einer großen Auswahl hochwertiger Fahrzeuge.
              </p>
              
              {/* Financing CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl shadow-lg mt-12 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-black mb-2">Flexible Finanzierung & Leasing</h3>
                    <p className="text-gray-700">Maßgeschneiderte Lösungen für Ihr Traumauto mit günstigen Konditionen und schneller Abwicklung.</p>
                  </div>
                  <a href="https://www.leasingmaschine.de/index.php?id=haendler&tx_kreamobile_vehicles%5BsellersDealers%5D=113&cHash=831b8f3316cd900f0e2bdd7819f00104" target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <button className="bg-primary text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg whitespace-nowrap flex items-center gap-2">
                      <i className="ri-bank-card-line"></i>
                      Jetzt finanzieren
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      
      {/* Quicksearch-Bereich */}
      <FadeInSection>
        <section className="quicksearch bg-gray-100 py-12" id="fahrzeuge">
          <div id="am-marketplace-nav" className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-secondary mb-8">Fahrzeugsuche</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-end">
                <div>
                  <label htmlFor="fahrzeugart" className="block text-sm font-medium text-gray-700">Fahrzeugart</label>
                  <select id="fahrzeugart" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>

                <div>
                  <label htmlFor="hersteller" className="block text-sm font-medium text-gray-700">Hersteller</label>
                  <select id="hersteller" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>

                <div>
                  <label htmlFor="modell" className="block text-sm font-medium text-gray-700">Modell</label>
                  <select id="modell" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>

                <div>
                  <label htmlFor="preismax" className="block text-sm font-medium text-gray-700">Preis bis</label>
                  <select id="preismax" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>
              </div>
              
              {/* Erweiterte Suchfelder (anfangs ausgeblendet) */}
              <div id="advanced-search" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-end mt-4" style={{display: 'none'}}>
                <div>
                  <label htmlFor="kilometerbis" className="block text-sm font-medium text-gray-700">Kilometer bis</label>
                  <select id="kilometerbis" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>
                
                <div>
                  <label htmlFor="zulassungvon" className="block text-sm font-medium text-gray-700">Erstzulassung ab</label>
                  <select id="zulassungvon" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>
                
                <div>
                  <label htmlFor="kraftstoff" className="block text-sm font-medium text-gray-700">Kraftstoff</label>
                  <select id="kraftstoff" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"></select>
                </div>
              </div>
              
              <div className="flex justify-center mt-6 gap-4">
                <a id="carsearchlink" className="bg-primary text-white text-center px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-block min-w-[180px]">
                  <span className="quicksearch-count">0</span> Fahrzeuge anzeigen
                </a>
                <a id="car-search-reset" className="bg-gray-500 text-white text-center px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 inline-block">
                  Zurücksetzen
                </a>
              </div>
              
              <div className="text-center mt-4">
                <a href="#!" id="car-search-detail" className="text-primary hover:underline cursor-pointer">
                  Detailsuche
                </a>
              </div>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* About / Vehicles Section */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-4">Autogalerie Nord - Ihr Spezialist in Sachen Jahreswagen oder Gebrauchtwagen in Stelle bei Hamburg</h2>
              <p className="text-gray-600 mb-12 max-w-4xl mx-auto">Qualitäts-Fahrzeuge aller Marken vor Ort und auf Wunsch bestellt und individualisiert. Mercedes-Benz, Porsche, Jaguar, Range Rover, Audi, Skoda, Volkswagen, Seat und viele mehr. Finden Sie hier Ihren neuen Gebrauchten.</p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Über uns</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">Wir sind ein Auto begeistertes, kreatives Team von gelernten Automobilkaufleuten, die sich darauf spezialisiert haben, Sie als Kunden umfassend in allen Fragen ums Thema Auto zu beraten.</p>
                  <a href="/ueber-uns" className="mt-6 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-center">ÜBER UNS</a>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Unsere Fahrzeuge</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">Wir haben ständig ein umfangreiches und Fahrzeugangebot aller Marken für Sie vor Ort. Sollte Ihr Wunschfahrzeug nicht dabei sein, sprechen Sie uns gern an, da wir ebenfalls individuelle Fahrzeugneubestellungen anbieten.</p>
                  <a href="/fahrzeugangebote" className="mt-6 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-center">UNSER FAHRZEUGANGEBOT</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Customer Reviews Section - Exact copy from original */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-12 text-center">Kundenbewertungen</h3>
              <div id="wid_1753133805649"></div>
              <Script id="customer-reviews-script">
                {`
                  var sc = document.createElement("script");
                  sc.setAttribute("defer",true);
                  sc.setAttribute("src","https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1752568527651");
                  sc.setAttribute("theme","light");
                  sc.setAttribute("footer", "true");
                  sc.setAttribute("widget-type","carousel");
                  sc.setAttribute("token","687612777903b4d856fd14f6");
                  sc.setAttribute('apiurl', "https://server.onlinereviews.tech/api/v0.0.9");
                  sc.setAttribute('stats',"true");
                  sc.setAttribute('addReview',"true");
                  sc.setAttribute('profile-pic',"true");
                  sc.setAttribute('review-name',"true");
                  sc.setAttribute('positive-stars',"true");
                  sc.setAttribute('wl', "true");
                  sc.setAttribute('wlndig', "https://go.bewertungsexperte.de/autogalerie-nord-gmbh");
                  sc.setAttribute('lang', "de");
                  sc.setAttribute('brandStyle', "%7B%22sidebar_background%22%3A%22%23343434%22%2C%22sidebar_text%22%3A%22white%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%2325D366%22%2C%22brand_button_border_radius%22%3A%2220px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%23ffffff1a%22%2C%22brand_button_hover%22%3A%22rgb(64%2C%20221%2C%20123)%22%2C%22brand_button_active%22%3A%22rgb(31%2C%20179%2C%2087)%22%2C%22brand_main_color_opacity%22%3A%22%2325D3661a%22%2C%22brand_font%22%3A%22Inter%22%2C%22star_color%22%3A%22%23ffe300%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fbewertungsexperte.de%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.bewertungsexperte.de%2Ftopbar.png%22%7D");
                  document.getElementById("wid_1753133805649").appendChild(sc);
                `}
              </Script>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Services Section - Exact copy from original */}
      <FadeInSection>
        <section id="leistungen" className="py-20 bg-gray-50">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-12 text-center">Unsere Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-car-line text-primary text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-4">Fahrzeugankauf</h4>
                  <p className="text-gray-600">Faire Preise und schnelle Abwicklung beim Ankauf Ihres Gebrauchtwagens.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-tools-line text-primary text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-4">Werkstattservice</h4>
                  <p className="text-gray-600">Professionelle Wartung und Reparatur für alle Marken.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-shield-check-line text-primary text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-4">Garantie</h4>
                  <p className="text-gray-600">Sorgenfrei fahren mit unseren umfassenden Garantiepaketen.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-hand-coin-line text-primary text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-4">Finanzierung</h4>
                  <p className="text-gray-600">Flexible und individuelle Finanzierungslösungen für Ihr Traumauto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Benefits Section - Exact copy from original */}
      <FadeInSection>
        <section className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url('/Bilder/Autogalerie Nord- Fahrzeuge im Hof.jpeg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="text-2xl font-semibold mb-2">Besuchen Sie uns</p>
                      <p className="text-lg opacity-90">Erleben Sie Premium-Service vor Ort</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-8">Warum Autogalerie Nord?</h3>
                  <div className="space-y-8">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-6 shadow-lg">
                          <i className="ri-time-line text-white text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-secondary mb-3">Schnelle Verfügbarkeit</h4>
                          <p className="text-gray-600 leading-relaxed">Über 70 sofort verfügbare Fahrzeuge verschiedener Premiummarken in unserem Bestand.</p>
                        </div>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-6 shadow-lg">
                          <i className="ri-shield-check-line text-white text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-secondary mb-3">Qualitätsgarantie</h4>
                          <p className="text-gray-600 leading-relaxed">Alle Fahrzeuge durchlaufen eine gründliche technische Prüfung durch unsere zertifizierten Experten.</p>
                        </div>
                      </div>
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-6 shadow-lg">
                          <i className="ri-user-heart-line text-white text-2xl"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-secondary mb-3">Persönliche Beratung</h4>
                          <p className="text-gray-600 leading-relaxed">Unser erfahrenes Team berät Sie individuell und findet das perfekte Fahrzeug für Ihre Bedürfnisse.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      {/* jQuery und Quicksearch Skripte */}
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log('jQuery loaded')}
      />
      <Script
        src="/js/quicksearch-norequire_1.4.2.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Quicksearch loaded')}
      />
    </>
  );
}
