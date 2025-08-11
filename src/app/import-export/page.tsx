'use client';

import React from 'react';
import AnimatedHero from '@/components/AnimatedHero';

export default function ImportExport() {
  return (
    <>
      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <a 
          href="tel:+4941745969700"
          className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <i className="ri-phone-line text-xl"></i>
        </a>
      </div>


        {/* Hero Section */}
        <AnimatedHero 
          title="Import & Export"
          subtitle="Komplette Abwicklung aller Behördengänge sowie Erstellung der Zollpapiere"
          theme="sales"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4941745969700"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="ri-phone-line mr-2"></i>
              Jetzt beraten lassen
            </a>
            <a 
              href="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-file-text-line mr-2"></i>
              Services ansehen
            </a>
          </div>
        </AnimatedHero>

        {/* Tax Free Cars Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tax Free Cars
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Wir verfügen über langjährige Erfahrung im Export-Geschäft weltweit. Der Verkauf von 
                Fahrzeugen an Privat- oder Firmen-Kunden innerhalb oder außerhalb der EU gehört zu 
                unserem Geschäft. Wir sprechen fließend Englisch und beraten unsere ausländischen 
                Kunden täglich.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Weltweite Export-Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Netto Export Verkäufe</h4>
                      <p className="text-gray-600">
                        Netto Export Verkäufe sind bei uns möglich - profitieren Sie von unserer 
                        Expertise im internationalen Fahrzeughandel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Mehrsprachige Beratung</h4>
                      <p className="text-gray-600">
                        Wir sprechen fließend Englisch und beraten unsere ausländischen Kunden 
                        täglich mit professioneller Kompetenz.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">EU & Weltweit</h4>
                      <p className="text-gray-600">
                        Verkauf an Privat- und Firmenkunden innerhalb und außerhalb der EU - 
                        wir kennen alle Bestimmungen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <i className="ri-global-line text-6xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-900">Internationale Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-primary mr-3"></i>
                    <span className="text-gray-700">Langjährige Export-Erfahrung</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-primary mr-3"></i>
                    <span className="text-gray-700">Weltweite Abwicklung</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-primary mr-3"></i>
                    <span className="text-gray-700">Englischsprachige Beratung</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-double-line text-primary mr-3"></i>
                    <span className="text-gray-700">Tax Free Verkäufe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unsere Services
              </h2>
              <p className="text-xl text-gray-600">
                Wir helfen Ihnen bei allen Aspekten des Import- und Export-Geschäfts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-time-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kurzzeitkennzeichen</h3>
                <p className="text-gray-600 mb-4">
                  5 Tages Überführungskennzeichen mit oder ohne Grüne Karte für sichere Überführung.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• 5 Tage gültig</li>
                  <li>• Mit/ohne Grüne Karte</li>
                  <li>• Sofortige Ausstellung</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-car-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ausfuhrkennzeichen</h3>
                <p className="text-gray-600 mb-4">
                  Bis zu 3 Monate inkl. Versicherung und Steuern für den Export Ihres Fahrzeugs.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• Bis zu 3 Monate</li>
                  <li>• Versicherung inklusive</li>
                  <li>• Steuern inklusive</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-building-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EU-Netto Export</h3>
                <p className="text-gray-600 mb-4">
                  Für Firmen innerhalb der EU - Tax Free Verkäufe mit allen Vorteilen.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• Für EU-Firmen</li>
                  <li>• Tax Free</li>
                  <li>• Netto-Preise</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-file-text-line text-3xl text-yellow-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zolldokumente</h3>
                <p className="text-gray-600 mb-4">
                  Wir erstellen für Sie alle Exportformalitäten und Zolldokumente professionell.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• Alle Formalitäten</li>
                  <li>• Professionelle Erstellung</li>
                  <li>• Vollständige Abwicklung</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-hotel-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unterkunft</h3>
                <p className="text-gray-600 mb-4">
                  Wir organisieren Ihr Hotel in unserer Nähe für einen komfortablen Aufenthalt.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• Hotel-Organisation</li>
                  <li>• In unserer Nähe</li>
                  <li>• Komfortable Unterbringung</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-plane-line text-3xl text-indigo-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pick Up Service</h3>
                <p className="text-gray-600 mb-4">
                  Wir holen Sie ab vom Airport Düsseldorf oder vom Hauptbahnhof Mülheim sowie Hamburg.
                </p>
                <ul className="text-sm text-gray-500">
                  <li>• Airport Düsseldorf</li>
                  <li>• Hauptbahnhof Mülheim</li>
                  <li>• Hamburg Abholung</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-red-600">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für Ihren Export?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns für eine professionelle Beratung zu Import & Export!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4941745969700"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="ri-phone-line mr-2"></i>
                04174 596 97 00
              </a>
              <a 
                href="/kontakt"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <i className="ri-mail-line mr-2"></i>
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

    </>
  );
}
