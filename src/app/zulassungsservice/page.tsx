'use client';

import React from 'react';
import AnimatedHero from '@/components/AnimatedHero';

export default function Zulassungsservice() {
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

      <main>
        {/* Hero Section */}
        <AnimatedHero 
          title="Zulassungsservice"
          subtitle="Wir kümmern uns gerne um die Zulassung Ihres Autos"
          theme="sales"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4941745969700"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="ri-phone-line mr-2"></i>
              Jetzt anrufen
            </a>
            <a 
              href="#service-details"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Mehr erfahren
            </a>
          </div>
        </AnimatedHero>

        {/* Service Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kein Papierkram, keine Warteschlangen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sie haben keine Lust auf Warteschlangen und darauf, sich mit Papierkram zu befassen? 
                Sie wollen Ihr bei Autogalerie Nord GmbH gekauftes Fahrzeug einfach nur abholen und losfahren?
              </p>
              <div className="mt-8">
                <span className="text-3xl font-bold text-primary">KEIN PROBLEM!</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-file-text-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vollservice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Autogalerie Nord GmbH übernimmt alle Formalitäten für Sie. Sie stellen uns die notwendigen 
                  Unterlagen zur Verfügung - wir erledigen den Rest.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-exchange-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ab- & Anmeldung</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir melden ggf. Ihr von uns in Zahlung genommenes Fahrzeug ab und melden Ihr bei uns 
                  gekauftes Fahrzeug natürlich auch gerne an.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-car-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sonderkennzeichen</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sie benötigen ein Kurzzeit- oder Ausfuhrkennzeichen? Auch das ist kein Problem. 
                  Wir kümmern uns um alles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Information */}
        <section id="service-details" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Zügig mit Ihrem neuen Gebrauchten starten
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Komplette Abwicklung</h3>
                      <p className="text-gray-600">
                        Autogalerie Nord GmbH kümmert sich für Sie um alles, damit Sie zügig mit Ihrem 
                        neuen gebrauchten Fahrzeug starten können.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimaler Aufwand</h3>
                      <p className="text-gray-600">
                        Sie stellen uns nur die notwendigen Unterlagen zur Verfügung - den gesamten 
                        Papierkram übernehmen wir für Sie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Alle Kennzeichen-Arten</h3>
                      <p className="text-gray-600">
                        Ob normale Zulassung, Kurzzeit- oder Ausfuhrkennzeichen - wir haben die 
                        passende Lösung für Ihre Bedürfnisse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-6">
                      <i className="ri-shield-check-line text-6xl text-primary mb-4"></i>
                      <h3 className="text-2xl font-bold text-gray-900">Professioneller Service</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <i className="ri-check-double-line text-primary mr-3"></i>
                        <span className="text-gray-700">Erfahrene Abwicklung</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-check-double-line text-primary mr-3"></i>
                        <span className="text-gray-700">Schnelle Bearbeitung</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-check-double-line text-primary mr-3"></i>
                        <span className="text-gray-700">Zuverlässige Durchführung</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-check-double-line text-primary mr-3"></i>
                        <span className="text-gray-700">Persönliche Betreuung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-red-600">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für Ihren stressfreien Autokauf?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kontaktieren Sie uns und lassen Sie uns den Papierkram übernehmen!
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
      </main>
    </>
  );
}
