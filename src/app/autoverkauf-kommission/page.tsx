'use client';

import React, { useState, useEffect } from 'react';
import AnimatedHero from '@/components/AnimatedHero';

export default function AutoverkaufKommission() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance steps for demo
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button 
          onClick={() => document.getElementById('bewertung-formular')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <i className="ri-calculator-line text-xl"></i>
        </button>
      </div>


        {/* Hero Section */}
        <AnimatedHero 
          title="Verkaufen Sie Ihr Auto"
          subtitle="Professioneller Kommissionsverkauf mit maximaler Reichweite und bestem Preis"
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
              href="#bewertung"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-calculator-line mr-2"></i>
              Fahrzeug bewerten
            </a>
          </div>
        </AnimatedHero>

      {/* Vorteile Kommissionsverkauf */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Warum Kommissionsverkauf bei Autogalerie Nord?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir kaufen Ihr Fahrzeug zum höchstmöglichen Preis, schnell und unkompliziert.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                  <i className="ri-money-dollar-circle-line text-primary text-3xl group-hover:animate-bounce"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-primary transition-colors">Höchstmöglicher Preis</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Durch unsere Expertise und unser Netzwerk erzielen wir für Ihr Fahrzeug den bestmöglichen Verkaufspreis.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Schnell & Unkompliziert</h3>
                <p className="text-gray-600">Keine langen Wartezeiten oder komplizierte Abwicklung. Wir kümmern uns um alles für Sie.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Sicher & Seriös</h3>
                <p className="text-gray-600">Vertrauen Sie auf unsere langjährige Erfahrung und seriöse Abwicklung ohne versteckte Kosten.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-search-eye-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Professionelle Bewertung</h3>
                <p className="text-gray-600">Unsere Experten bewerten Ihr Fahrzeug vor Ort und erstellen eine faire, marktgerechte Einschätzung.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-file-text-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Komplette Abwicklung</h3>
                <p className="text-gray-600">Alle Verhandlungen mit potenziellen Käufern werden von unserem erfahrenen Team geführt. Wir filtern &quot;unseriöse Anfragen&quot; heraus und sorgen für einen reibungslosen und sicheren Verkaufsprozess.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-2-line text-primary text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Persönliche Betreuung</h3>
                <p className="text-gray-600">Ein fester Ansprechpartner begleitet Sie durch den gesamten Verkaufsprozess.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf Kommissionsverkauf */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">So funktioniert unser Kommissionsverkauf</h2>
              <p className="text-xl text-gray-600">In nur 4 einfachen Schritten zu Ihrem optimalen Verkaufspreis</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`text-center transition-all duration-500 ${activeStep === 0 ? 'scale-105' : ''}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl transition-all duration-500 ${
                  activeStep === 0 
                    ? 'bg-gradient-to-br from-primary to-red-600 shadow-lg scale-110' 
                    : 'bg-primary'
                }`}>
                  <span className={activeStep === 0 ? 'animate-pulse' : ''}>1</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  activeStep === 0 ? 'text-primary' : 'text-black'
                }`}>Kontaktaufnahme</h3>
                <p className="text-gray-600">Wir kümmern uns um die professionelle Vermarktung, die Verhandlungen und den gesamten Papierkram. Sie erhalten am Ende den bestmöglichen Preis für Ihr Fahrzeug, ohne den üblichen Stress.</p>
                {activeStep === 0 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`text-center transition-all duration-500 ${activeStep === 1 ? 'scale-105' : ''}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl transition-all duration-500 ${
                  activeStep === 1 
                    ? 'bg-gradient-to-br from-primary to-red-600 shadow-lg scale-110' 
                    : 'bg-primary'
                }`}>
                  <span className={activeStep === 1 ? 'animate-pulse' : ''}>2</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  activeStep === 1 ? 'text-primary' : 'text-black'
                }`}>Vor-Ort Bewertung</h3>
                <p className="text-gray-600">Wir erstellen hochwertige Fotos und eine detaillierte Beschreibung, um Ihr Fahrzeug im &quot;besten Licht&quot; zu präsentieren. Unsere Online-Präsenz auf allen großen Plattformen garantiert maximale Reichweite.</p>
                {activeStep === 1 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`text-center transition-all duration-500 ${activeStep === 2 ? 'scale-105' : ''}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl transition-all duration-500 ${
                  activeStep === 2 
                    ? 'bg-gradient-to-br from-primary to-red-600 shadow-lg scale-110' 
                    : 'bg-primary'
                }`}>
                  <span className={activeStep === 2 ? 'animate-pulse' : ''}>3</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  activeStep === 2 ? 'text-primary' : 'text-black'
                }`}>Vertragsabschluss</h3>
                <p className="text-gray-600">Bei Einverständnis schließen wir einen transparenten Kommissionsvertrag ab und übernehmen den Verkauf.</p>
                {activeStep === 2 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`text-center transition-all duration-500 ${activeStep === 3 ? 'scale-105' : ''}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl transition-all duration-500 ${
                  activeStep === 3 
                    ? 'bg-gradient-to-br from-primary to-red-600 shadow-lg scale-110' 
                    : 'bg-primary'
                }`}>
                  <span className={activeStep === 3 ? 'animate-pulse' : ''}>4</span>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  activeStep === 3 ? 'text-primary' : 'text-black'
                }`}>Auszahlung</h3>
                <p className="text-gray-600">Nach erfolgreichem Verkauf erhalten Sie umgehend Ihren Erlös - abzüglich unserer fairen Provision.</p>
                {activeStep === 3 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fahrzeugbewertung Formular */}
      <section id="bewertung-formular" className="py-20 bg-white scroll-mt-32">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-6">Kostenlose Fahrzeugbewertung</h2>
              <p className="text-xl text-gray-600">Erhalten Sie eine unverbindliche Einschätzung des Wertes Ihres Fahrzeugs</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
                <p className="text-center text-gray-600 text-sm">Alle Felder mit * sind Pflichtfelder</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Ihr Vorname" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Ihr Nachname" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="ihre.email@beispiel.de" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="+49 123 456789" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Marke *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="z.B. BMW" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Modell *</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="z.B. 3er" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Erstzulassung *</label>
                    <input type="month" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kilometerstand *</label>
                    <input type="number" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="z.B. 85000" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Kraftstoff *</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3" required>
                      <option value="">Kraftstoff wählen</option>
                      <option value="benzin">Benzin</option>
                      <option value="diesel">Diesel</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="elektro">Elektro</option>
                      <option value="gas">Autogas/LPG</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
                  <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32" placeholder="Beschreiben Sie den Zustand Ihres Fahrzeugs, Ausstattung, Schäden, etc."></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mr-3" required />
                  <label className="text-sm text-gray-600">Ich stimme der Verarbeitung meiner Daten zur Fahrzeugbewertung zu und habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen.</label>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-red-600 text-white px-8 py-4 !rounded-button font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Kostenlose Bewertung anfordern
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Häufige Fragen */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Häufige Fragen zum Autoverkauf</h2>
              <p className="text-xl text-gray-600">Die wichtigsten Antworten rund um den Kommissionsverkauf</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">Wie hoch ist die Provision beim Kommissionsverkauf?</h3>
                <p className="text-gray-600">Unsere Provision ist fair und transparent. Sie richtet sich nach dem Verkaufspreis und wird vor Vertragsabschluss klar kommuniziert. In der Regel liegt sie zwischen 8-15% des Verkaufspreises.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">Wie lange dauert der Verkauf meines Fahrzeugs?</h3>
                <p className="text-gray-600">Die Verkaufsdauer hängt von verschiedenen Faktoren ab (Marke, Modell, Zustand, Preis). In der Regel können wir Fahrzeuge innerhalb von 2-8 Wochen verkaufen. Beliebte Modelle gehen oft schneller.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">Was passiert, wenn mein Auto nicht verkauft wird?</h3>
                <p className="text-gray-600">Von der Erstellung des Kaufvertrags bis zur Abmeldung des Fahrzeugs – wir übernehmen die &quot;gesamte Abwicklung&quot; für Sie. Lehnen Sie sich zurück, während wir den Verkauf für Sie abschließen.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">Welche Unterlagen benötige ich für den Verkauf?</h3>
                <p className="text-gray-600">Sie benötigen: Fahrzeugbrief/-schein, TÜV/AU-Bescheinigung, Serviceheft (falls vorhanden), alle Schlüssel und ggf. Rechnungen für Reparaturen oder Umbauten.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-3">Kann ich mein Fahrzeug während der Kommission weiter nutzen?</h3>
                <p className="text-gray-600">Ja, Sie können Ihr Fahrzeug bis zum Verkauf weiter nutzen. Wir vereinbaren flexible Besichtigungstermine mit Interessenten.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Bereit für den Verkauf Ihres Fahrzeugs?</h2>
            <p className="text-xl text-white/90 mb-8">
              Lassen Sie uns gemeinsam den bestmöglichen Preis für Ihr Auto erzielen. Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4941745969700"
                className="bg-white text-primary px-8 py-4 !rounded-button font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center inline-block"
              >
                <i className="ri-phone-line mr-2"></i>
                +49 (0) 4174 596970
              </a>
              <a 
                href="mailto:info@autogalerie-nord.de?subject=Autoverkauf%20Anfrage&body=Hallo,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20den%20Kommissionsverkauf%20meines%20Fahrzeugs.%0D%0A%0D%0ABitte%20kontaktieren%20Sie%20mich%20für%20weitere%20Informationen.%0D%0A%0D%0AVielen%20Dank!"
                className="border-2 border-white text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg text-center inline-block"
              >
                <i className="ri-mail-line mr-2"></i>
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Was unsere Kunden sagen</h2>
              <p className="text-xl text-white/80">Vertrauen Sie auf die Erfahrungen zufriedener Kunden</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-white/90 mb-6 italic">&quot;Sehr professionelle Abwicklung! Mein BMW wurde schnell und zu einem fairen Preis verkauft. Kann ich nur weiterempfehlen.&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Michael S.</p>
                    <p className="text-white/60 text-sm">BMW 3er Verkauf</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-white/90 mb-6 italic">&quot;Kompetente Beratung und transparente Abwicklung. Der Verkaufspreis lag über meinen Erwartungen!&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Andrea K.</p>
                    <p className="text-white/60 text-sm">Mercedes C-Klasse</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <p className="text-white/90 mb-6 italic">&quot;Schnell, unkompliziert und seriös. Genau so sollte Autoverkauf funktionieren. Vielen Dank!&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Thomas R.</p>
                    <p className="text-white/60 text-sm">Audi A4 Avant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
