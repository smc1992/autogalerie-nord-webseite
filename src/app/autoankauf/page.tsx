import React from 'react';



export default function Autoankauf() {
  return (
    <>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Autoankauf</h1>
              <p className="text-gray-600 mt-2">Wir kümmern uns um die gesamte Abwicklung - von der Abmeldung Ihres alten Fahrzeugs bis zur Auszahlung. Alles aus einer Hand, schnell und unkompliziert.</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Ihr Auto in besten Händen</h2>
                  <p className="text-gray-600">Egal ob Barzahlung, Überweisung oder Verrechnung mit einem neuen Fahrzeug – wir finden die passende Lösung für Sie. Die Auszahlung erfolgt sofort nach Vertragsabschluss.</p>
                  <p className="text-gray-600">Sie möchten Ihr Fahrzeug verkaufen? Bei der Autogalerie Nord erhalten Sie eine faire und transparente Bewertung Ihres Fahrzeugs. Unser erfahrenes Team prüft Ihr Auto gründlich und macht Ihnen ein attraktives Angebot.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary mr-3"></i>
                      <span>Kostenlose Fahrzeugbewertung</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary mr-3"></i>
                      <span>Faire Preise</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary mr-3"></i>
                      <span>Schnelle Abwicklung</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary mr-3"></i>
                      <span>Sofortige Barauszahlung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="ri-phone-line text-primary mr-3"></i>
                      <a href="tel://+494174596970" className="hover:text-primary">041 745 969 70</a>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-mail-line text-primary mr-3"></i>
                      <a href="mailto:info@autogalerie-nord.de" className="hover:text-primary">info@autogalerie-nord.de</a>
                    </div>
                    <div className="flex items-start">
                      <i className="ri-map-pin-line text-primary mr-3 mt-1"></i>
                      <span>Lüneburger Str. 30, 21435 Stelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">So einfach geht&apos;s</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Kontakt aufnehmen</h3>
                  <p className="text-gray-600">Rufen Sie uns an oder schreiben Sie uns eine E-Mail</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fahrzeug bewerten</h3>
                  <p className="text-gray-600">Unser Experte prüft Ihr Fahrzeug vor Ort</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sofort Geld erhalten</h3>
                  <p className="text-gray-600">Bei Einigung erhalten Sie sofort Ihr Geld</p>
                </div>
              </div>
            </div>
          </div>
        </section>


    </>
  );
}
