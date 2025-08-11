import React from 'react';


export default function UeberUns() {
  return (
    <>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Über Uns</h1>
              <p className="text-xl text-gray-300 mb-8">
                Lernen Sie die Autogalerie Nord kennen - Ihr Partner für Mobilität
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Willkommen bei der Autogalerie Nord</h2>
                  <p className="text-gray-600 mb-6">
                    Seit unserer Gründung sind wir Ihr vertrauensvoller Partner für hochwertige Gebrauchtwagen in Norddeutschland. 
                    Mit Leidenschaft und Expertise helfen wir Ihnen dabei, das perfekte Fahrzeug für Ihre Bedürfnisse zu finden.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Unser erfahrenes Team steht Ihnen mit kompetenter Beratung zur Seite und sorgt dafür, dass Sie sich 
                    beim Autokauf rundum wohlfühlen. Transparenz, Fairness und Qualität sind die Grundpfeiler unseres Handelns.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <i className="ri-check-line text-primary mr-3 text-xl"></i>
                      <span>Über 10 Jahre Erfahrung</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-primary mr-3 text-xl"></i>
                      <span>Geprüfte Fahrzeuge</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-primary mr-3 text-xl"></i>
                      <span>Faire Preise</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-check-line text-primary mr-3 text-xl"></i>
                      <span>Persönliche Beratung</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/Bilder/Autogalerie Nord- Fahrzeuge im Hof.jpeg" 
                    alt="Autogalerie Nord Fahrzeuge" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vertrauen</h3>
                  <p className="text-gray-600">
                    Transparenz und Ehrlichkeit in allen Geschäften sind für uns selbstverständlich
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-star-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Qualität</h3>
                  <p className="text-gray-600">
                    Nur sorgfältig ausgewählte und geprüfte Fahrzeuge finden den Weg in unser Sortiment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Service</h3>
                  <p className="text-gray-600">
                    Persönliche Beratung und umfassender Service stehen bei uns im Mittelpunkt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg mb-8">
                  Unser erfahrenes Team aus Fahrzeugexperten und Beratern steht Ihnen mit Kompetenz und 
                  Leidenschaft zur Seite. Wir nehmen uns die Zeit, Ihre Wünsche zu verstehen und das 
                  perfekte Fahrzeug für Sie zu finden.
                </p>
                <div className="bg-primary text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h3>
                  <p className="mb-6">
                    Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
                    Wir freuen uns auf Ihren Besuch!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel://+494174596970" 
                      className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <i className="ri-phone-line mr-2"></i>
                      041 745 969 70
                    </a>
                    <a 
                      href="mailto:info@autogalerie-nord.de" 
                      className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <i className="ri-mail-line mr-2"></i>
                      E-Mail senden
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
