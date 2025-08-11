'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KontaktPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
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
          subject: formData.subject,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
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
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Kontakt</h1>
              <p className="text-xl text-gray-300 mb-8">
                Nehmen Sie Kontakt mit uns auf - wir sind für Sie da
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Kontaktinformationen</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ri-map-pin-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                        <p className="text-gray-600">
                          Lüneburger Str. 30<br />
                          21435 Stelle<br />
                          Deutschland
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ri-phone-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                        <p className="text-gray-600">
                          <a href="tel://+494174596970" className="hover:text-primary transition-colors">
                            041 745 969 70
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ri-mail-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@autogalerie-nord.de" className="hover:text-primary transition-colors">
                            info@autogalerie-nord.de
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="ri-time-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Öffnungszeiten</h3>
                        <p className="text-gray-600">
                          Montag - Freitag: 09:00 - 18:00 Uhr<br />
                          Samstag: Nach Vereinbarung<br />
                          Sonntag: Geschlossen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-8">Nachricht senden</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Betreff *
                      </label>
                      <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                        <option value="Service-Termin">Service-Termin</option>
                        <option value="Fahrzeugankauf">Fahrzeugankauf</option>
                        <option value="Finanzierungsberatung">Finanzierungsberatung</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
