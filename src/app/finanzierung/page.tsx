'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedHero from '@/components/AnimatedHero';

export default function Finanzierung() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    income: '',
    vehiclePrice: '',
    downPayment: '',
    privacy: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.privacy) {
      setError('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    setLoading(true);

    try {
      const messageBody = `
        Eine neue Finanzierungsanfrage ist eingegangen:
        --------------------------------------------------
        Name: ${formData.firstName} ${formData.lastName}
        E-Mail: ${formData.email}
        Telefon: ${formData.phone || 'Nicht angegeben'}
        --------------------------------------------------
        Monatliches Nettoeinkommen: ${formData.income ? formData.income + ' €' : 'Nicht angegeben'}
        Gewünschter Fahrzeugpreis: ${formData.vehiclePrice ? formData.vehiclePrice + ' €' : 'Nicht angegeben'}
        Geplante Anzahlung: ${formData.downPayment ? formData.downPayment + ' €' : 'Nicht angegeben'}
        --------------------------------------------------
      `;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Neue Finanzierungsanfrage',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: messageBody,
        }),
      });

      if (response.ok) {
        router.push('/danke');
      } else {
        const result = await response.json();
        setError(result.message || 'Fehler beim Senden der Anfrage.');
      }
    } catch (err) {
      setError('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating CTA Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button 
          onClick={() => setShowForm(true)}
          className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <i className="ri-calculator-line text-xl"></i>
        </button>
      </div>

      <main>
        {/* Hero Section */}
        <AnimatedHero 
          title="Traumauto finanzieren"
          subtitle="Günstige Konditionen mit unseren starken Partnern"
          theme="sales"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Jetzt Finanzierung anfragen
            </button>
            <a 
              href="tel:+4941745969700" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-phone-line mr-2"></i>
              Direkt anrufen
            </a>
          </div>
        </AnimatedHero>

        {/* Partner Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unser starker Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Gemeinsam mit unserem Kooperationspartner credit.de bieten wir Ihnen seriöse und 
                attraktive Lösungen, um Sie Ihrem Wunschauto ein Stück näher zu bringen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-12">So einfach geht&apos;s zum Wunschauto</h2>
                    <p className="text-lg text-gray-600">
                      Als einer der führenden Anbieter für Autofinanzierung in Deutschland bietet 
                      Santander Consumer Bank maßgeschneiderte Lösungen für jeden Bedarf.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-award-line text-2xl text-primary"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">Testsieger</h4>
                      <p className="text-sm text-gray-600">Autokredit 2023</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-shield-check-line text-2xl text-green-600"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900">Sicher</h4>
                      <p className="text-sm text-gray-600">Geprüfte Bank</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Ihre Vorteile</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary text-xl mr-3"></i>
                      <span>Günstige Zinssätze ab 2,99% eff. Jahreszins</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary text-xl mr-3"></i>
                      <span>Schnelle Bearbeitung in 24h</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary text-xl mr-3"></i>
                      <span>Flexible Laufzeiten von 12-84 Monaten</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-primary text-xl mr-3"></i>
                      <span>Sondertilgungen jederzeit möglich</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                So einfach geht&apos;s
              </h2>
              <p className="text-xl text-gray-600">
                In nur wenigen Schritten zu Ihrer Traumauto-Finanzierung
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: 'ri-file-text-line', title: 'Anfrage stellen', desc: 'Füllen Sie unser Formular aus' },
                { icon: 'ri-search-line', title: 'Prüfung', desc: 'Wir prüfen Ihre Bonität' },
                { icon: 'ri-check-line', title: 'Angebot', desc: 'Sie erhalten Ihr persönliches Angebot' },
                { icon: 'ri-car-line', title: 'Fahren', desc: 'Ihr Traumauto wartet auf Sie' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${ 
                    activeStep === index ? 'bg-primary text-white scale-110' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <i className={`${step.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Warum Finanzierung bei uns?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-percent-line text-3xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beste Konditionen</h3>
                <p className="text-gray-600">
                  Durch unsere Partnerschaft erhalten Sie besonders günstige Zinssätze und 
                  faire Konditionen für Ihre Autofinanzierung.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-time-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schnelle Abwicklung</h3>
                <p className="text-gray-600">
                  Von der Anfrage bis zur Zusage - wir sorgen für eine schnelle und 
                  unkomplizierte Abwicklung Ihrer Finanzierung.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-user-heart-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Persönliche Beratung</h3>
                <p className="text-gray-600">
                  Unser erfahrenes Team berät Sie persönlich und findet die optimale 
                  Finanzierungslösung für Ihre Bedürfnisse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Finanzierungsanfrage</h3>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monatliches Einkommen
                      </label>
                      <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleInputChange}
                        placeholder="€"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fahrzeugpreis
                      </label>
                      <input
                        type="number"
                        name="vehiclePrice"
                        value={formData.vehiclePrice}
                        onChange={handleInputChange}
                        placeholder="€"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anzahlung
                      </label>
                      <input
                        type="number"
                        name="downPayment"
                        value={formData.downPayment}
                        onChange={handleInputChange}
                        placeholder="€"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="privacy"
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1 mr-3"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. 
                      Die{' '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Datenschutzerklärung
                      </a>{' '}
                      habe ich zur Kenntnis genommen. *
                    </label>
                  </div>

                  {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Wird gesendet...' : 'Finanzierungsanfrage senden'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-red-600">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für Ihr Traumauto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Starten Sie jetzt Ihre Finanzierungsanfrage oder rufen Sie uns direkt an!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="ri-calculator-line mr-2"></i>
                Finanzierung berechnen
              </button>
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
