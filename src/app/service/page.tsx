import React from 'react';

export default function Service() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" style={{
        backgroundImage: 'url("https://readdy.ai/api/search-image?query=professional%20automotive%20workshop%20garage%20interior%20with%20modern%20equipment%20tools%20and%20cars%20being%20serviced%2C%20clean%20organized%20workspace%2C%20bright%20lighting%2C%20automotive%20service%20center%2C%20professional%20mechanics%20working%2C%20high%20quality%20industrial%20photography&width=1920&height=1080&seq=service-hero-1&orientation=landscape")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative w-full">
          <div className="w-full px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Service &<br />
                  <span className="text-primary">Werkstatt</span>
                </h1>
                <p className="text-xl lg:text-2xl font-light mb-8 opacity-90">
                  Professionelle Wartung und Reparatur für Ihr Fahrzeug. Vertrauen Sie auf unsere Expertise und modernste Ausrüstung.
                </p>
                <a href="/kontakt" className="inline-block">
                  <button className="bg-primary text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-red-700 transition-colors whitespace-nowrap">
                    Termin vereinbaren
                  </button>
                </a>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">Unsere Service-Kategorien</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-settings-3-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Wartung & Inspektion</h3>
                <p className="text-gray-600 mb-6">Regelmäßige Wartung und TÜV-Vorbereitung für maximale Fahrsicherheit und Werterhalt.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Hauptuntersuchung</li>
                  <li>• Abgasuntersuchung</li>
                  <li>• Ölwechsel</li>
                  <li>• Filterwechsel</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-tools-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Reparaturen</h3>
                <p className="text-gray-600 mb-6">Fachgerechte Reparaturen aller Fahrzeugkomponenten durch erfahrene Mechaniker.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Motorinstandsetzung</li>
                  <li>• Getriebe Service</li>
                  <li>• Elektronik Diagnose</li>
                  <li>• Karosserie Arbeiten</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-wheel-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Reifenservice</h3>
                <p className="text-gray-600 mb-6">Kompletter Reifenservice vom Wechsel bis zur Einlagerung Ihrer Reifen.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Reifenwechsel</li>
                  <li>• Reifeneinlagerung</li>
                  <li>• Auswuchtung</li>
                  <li>• Reifenverkauf</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-car-washing-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Fahrzeugpflege</h3>
                <p className="text-gray-600 mb-6">Professionelle Innen- und Außenreinigung für den perfekten Auftritt Ihres Fahrzeugs.</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Außenwäsche</li>
                  <li>• Innenreinigung</li>
                  <li>• Lackversiegelung</li>
                  <li>• Polsterreinigung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-12 text-center">Warum unsere Werkstatt?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Erfahrene Mechaniker</h3>
                <p className="text-gray-600">Unser Team besteht aus qualifizierten Kfz-Meistern mit über 20 Jahren Berufserfahrung.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-tools-fill text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Modernste Ausrüstung</h3>
                <p className="text-gray-600">Wir arbeiten mit neuester Diagnosetechnik und professionellen Werkzeugen aller Marken.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-fill text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Schnelle Termine</h3>
                <p className="text-gray-600">Flexible Terminvergabe und Express-Service für dringende Reparaturen verfügbar.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-price-tag-3-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Faire Preise</h3>
                <p className="text-gray-600">Transparente Kostenvoranschläge und faire Preise ohne versteckte Zusatzkosten.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-fill text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Garantie</h3>
                <p className="text-gray-600">24 Monate Garantie auf alle Reparaturen und verwendeten Originalteile.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-2-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Persönlicher Service</h3>
                <p className="text-gray-600">Individuelle Beratung und persönliche Betreuung von der Annahme bis zur Abholung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
