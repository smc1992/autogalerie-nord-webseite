'use client';

import React from 'react';
import AnimatedHero from '@/components/AnimatedHero';

export default function Marken() {
  return (
    <>
      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <a 
          href="tel:+4941745969700"
          className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse flex items-center justify-center"
        >
          <i className="ri-phone-line text-xl"></i>
        </a>
      </div>

      <main className="pt-32">
        {/* Hero Section */}
        <AnimatedHero 
          title="Premium Marken & Sportwagen"
          subtitle="Deutsche Ingenieurskunst und internationale Sportwagenlegenden"
          theme="sales"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/fahrzeugangebote"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="ri-car-line mr-2"></i>
              Fahrzeuge ansehen
            </a>
            <a 
              href="#premium-brands"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-star-line mr-2"></i>
              Premium Marken
            </a>
          </div>
        </AnimatedHero>

        {/* Premium German Brands Section */}
        <section id="premium-brands" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Premium Marken Deutscher Hersteller
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Wir verkaufen Premium-Marken deutscher Hersteller und Sportwagenhersteller. 
                Deutsche Ingenieurskunst steht für Qualität, Innovation und Fahrspaß auf höchstem Niveau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* BMW */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-car-line text-3xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">BMW</h3>
                  <p className="text-primary font-semibold mb-4">&quot;Freude am Fahren&quot;</p>
                  <p className="text-gray-600">
                    Bayerische Motoren Werke - Sportlichkeit und Luxus in perfekter Harmonie
                  </p>
                </div>
              </div>

              {/* Mercedes-Benz */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-star-line text-3xl text-gray-700"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mercedes-Benz</h3>
                  <p className="text-primary font-semibold mb-4">&quot;Das Beste oder nichts&quot;</p>
                  <p className="text-gray-600">
                    Luxus und Innovation seit 1886 - der Erfinder des Automobils
                  </p>
                </div>
              </div>

              {/* Audi */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-settings-3-line text-3xl text-red-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Audi</h3>
                  <p className="text-primary font-semibold mb-4">&quot;Vorsprung durch Technik&quot;</p>
                  <p className="text-gray-600">
                    Quattro-Allradantrieb und progressive Technologie aus Ingolstadt
                  </p>
                </div>
              </div>

              {/* Porsche */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-flashlight-line text-3xl text-yellow-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Porsche</h3>
                  <p className="text-primary font-semibold mb-4">&quot;Es gibt kein Substitut&quot;</p>
                  <p className="text-gray-600">
                    Sportwagen-Ikone aus Stuttgart - Rennstrecken-DNA für die Straße
                  </p>
                </div>
              </div>
            </div>

            {/* German Engineering Excellence */}
            <div className="bg-gradient-to-r from-primary to-red-600 rounded-3xl p-12 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Deutsche Ingenieurskunst
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    Made in Germany steht weltweit für Qualität, Präzision und Innovation. 
                    Unsere deutschen Premium-Marken verkörpern diese Werte in jedem Detail.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="ri-check-line text-2xl mr-3"></i>
                      <span>Höchste Qualitätsstandards</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-2xl mr-3"></i>
                      <span>Innovative Technologien</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-2xl mr-3"></i>
                      <span>Langlebigkeit und Wertstabilität</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-2xl mr-3"></i>
                      <span>Fahrspaß und Sicherheit</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <i className="ri-award-fill text-8xl text-white/20 mb-6"></i>
                  <h4 className="text-2xl font-bold mb-4">Premium Qualität</h4>
                  <p className="text-white/80">
                    Jedes Fahrzeug wird sorgfältig ausgewählt und geprüft, 
                    um unseren hohen Qualitätsansprüchen zu genügen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sports Car Manufacturers Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Internationale Sportwagenhersteller
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Neben deutschen Premium-Marken führen wir auch legendäre Sportwagenhersteller 
                aus aller Welt für echte Enthusiasten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ferrari */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-fire-line text-2xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Ferrari</h3>
                    <p className="text-red-600 font-semibold">Italienische Leidenschaft</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Die Rossa Corsa aus Maranello - Formel 1 Technologie für die Straße
                </p>
              </div>

              {/* Lamborghini */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-flashlight-line text-2xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Lamborghini</h3>
                    <p className="text-yellow-600 font-semibold">Raging Bull</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Extravagante Supersportwagen aus Sant&apos;Agata Bolognese
                </p>
              </div>

              {/* McLaren */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-speed-line text-2xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">McLaren</h3>
                    <p className="text-orange-600 font-semibold">Racing DNA</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Britische Präzision und Formel 1 Erfahrung seit 1963
                </p>
              </div>

              {/* Aston Martin */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-vip-crown-line text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Aston Martin</h3>
                    <p className="text-green-600 font-semibold">British Luxury</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Elegante Grand Tourer mit britischem Gentleman-Charakter
                </p>
              </div>

              {/* Bentley */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-vip-diamond-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bentley</h3>
                    <p className="text-blue-600 font-semibold">Extraordinary Journeys</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Handgefertigter Luxus und Performance aus Crewe, England
                </p>
              </div>

              {/* Maserati */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-700">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-music-line text-2xl text-blue-700"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Maserati</h3>
                    <p className="text-blue-700 font-semibold">Audacity in Motion</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Italienische Eleganz mit dem unverwechselbaren Trident
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Brands Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Warum diese Marken?
              </h2>
              <p className="text-xl text-gray-600">
                Unsere Markenauswahl basiert auf Qualität, Innovation und Leidenschaft
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-award-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Bewährte Qualität</h3>
                <p className="text-gray-600">
                  Wir führen nur Marken mit nachgewiesener Zuverlässigkeit und höchsten Qualitätsstandards
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation & Technologie</h3>
                <p className="text-gray-600">
                  Modernste Fahrzeugtechnologie und wegweisende Innovationen für die Zukunft der Mobilität
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Service & Wartung</h3>
                <p className="text-gray-600">
                  Kompetente Betreuung und professionelle Wartung für alle Marken in unserem Portfolio
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-money-euro-circle-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Wertstabilität</h3>
                <p className="text-gray-600">
                  Premium-Marken mit hoher Wertstabilität und attraktiven Wiederverkaufswerten für langfristige Investitionen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-red-600">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ihr Traumwagen wartet auf Sie!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entdecken Sie unsere exklusive Auswahl an Premium-Fahrzeugen und Sportwagen. 
              Lassen Sie sich von unserer Leidenschaft für Automobile begeistern!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/fahrzeugangebote"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="ri-car-line mr-2"></i>
                Fahrzeuge entdecken
              </a>
              <a 
                href="tel:+4941745969700"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <i className="ri-phone-line mr-2"></i>
                04174 596 97 00
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
