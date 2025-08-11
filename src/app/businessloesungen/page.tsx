'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedHero from '@/components/AnimatedHero';

export default function Businessloesungen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!formData.privacy) {
      setError('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'B2B-Anfrage für Geschäftslösungen',
          ...formData,
        }),
      });

      if (response.ok) {
        router.push('/danke/businessloesungen');
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

        {/* Hero Section */}
        <AnimatedHero 
          title="Geschäftslösungen für Ihren Fuhrpark"
          subtitle="Professionelle Flottenmanagement-Services und maßgeschneiderte Leasing-Optionen"
          theme="sales"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4941745969700"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="ri-phone-line mr-2"></i>
              Beratungstermin vereinbaren
            </a>
            <a 
              href="#contact-form"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-file-text-line mr-2"></i>
              Angebot anfordern
            </a>
          </div>
        </AnimatedHero>

        {/* Business Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  Unsere <span className="text-primary">Business-Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Von der individuellen Beratung bis zur kompletten
                  Fuhrparkverwaltung - wir bieten Ihnen maßgeschneiderte Lösungen
                  für Ihr Unternehmen.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-customer-service-2-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Persönliche Beratung
                   </h3>
                   <p className="text-gray-600">
                     Individuelle Beratung für Ihre spezifischen Anforderungen und
                     Budgetvorstellungen.
                   </p>
                 </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-truck-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Flottenmanagement
                   </h3>
                   <p className="text-gray-600">
                     Komplette Verwaltung Ihres Fuhrparks mit digitalen Tools und
                     professionellem Service.
                   </p>
                 </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-file-text-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Leasing & Finanzierung
                   </h3>
                   <p className="text-gray-600">
                     Flexible Leasing-Optionen und maßgeschneiderte
                     Finanzierungslösungen für Geschäftskunden.
                   </p>
                 </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-tools-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Wartung & Service
                   </h3>
                   <p className="text-gray-600">
                     Professionelle Wartung und Reparatur direkt in unserer
                     zertifizierten Werkstatt.
                   </p>
                 </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-shield-check-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Versicherung & Garantie
                   </h3>
                   <p className="text-gray-600">
                     Umfassende Versicherungspakete und erweiterte Garantien für
                     maximale Sicherheit.
                   </p>
                 </div>
                 <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                     <i className="ri-discount-percent-line text-primary text-2xl"></i>
                   </div>
                   <h3 className="text-xl font-bold text-black mb-4">
                     Großkunden-Rabatte
                   </h3>
                   <p className="text-gray-600">
                     Attraktive Mengenrabatte und Sonderkonditionen für
                     Firmenkunden ab 5 Fahrzeugen.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-6">
                  Warum Unternehmen uns vertrauen
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Über 200 zufriedene Geschäftskunden vertrauen bereits auf unsere
                  professionellen Services und maßgeschneiderten Lösungen.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-time-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-gray-600">Support & Notfallservice</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-team-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">200+</h3>
                  <p className="text-gray-600">Zufriedene Geschäftskunden</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-car-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                  <p className="text-gray-600">Verwaltete Flottenfahrzeuge</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-award-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                  <p className="text-gray-600">Jahre Branchenerfahrung</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black mb-6">
                  Kontakt für B2B-Anfragen
                </h2>
                <p className="text-xl text-gray-600">
                  Lassen Sie uns gemeinsam die perfekte Lösung für Ihren Fuhrpark
                  entwickeln. Kontaktieren Sie uns für ein unverbindliches Angebot.
                </p>
              </div>
              <div className="bg-gray-50 p-8 lg:p-12 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Unternehmensname *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Ihr Unternehmensname"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ansprechpartner *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Vor- und Nachname"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail-Adresse *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonnummer
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="+49 123 456789"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewünschter Service
                    </label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Bitte wählen Sie einen Service</option>
                      <option value="Flottenmanagement">Flottenmanagement</option>
                      <option value="Leasing & Finanzierung">Leasing & Finanzierung</option>
                      <option value="Wartung & Service">Wartung & Service</option>
                      <option value="Persönliche Beratung">Persönliche Beratung</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Beschreiben Sie Ihre Anforderungen..."
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      Ich stimme der{' '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu *
                    </label>
                  </div>
                  
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Wird gesendet...' : 'Anfrage senden'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Vereinbaren Sie noch heute einen kostenlosen Beratungstermin und
                  entdecken Sie, wie wir Ihren Fuhrpark optimieren können.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+4941745969700" className="bg-primary text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-red-700 transition-colors">
                    <i className="ri-phone-line mr-2"></i>
                    Jetzt anrufen
                  </a>
                  <a href="/kontakt" className="border-2 border-primary text-primary px-8 py-4 !rounded-button font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
                    <i className="ri-mail-line mr-2"></i>
                    E-Mail senden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
