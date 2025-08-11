import React from 'react';
import Link from 'next/link';

export default function DankePage() {
  return (

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-double-line text-5xl text-green-600"></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Vielen Dank!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ihre Anfrage wurde erfolgreich an uns übermittelt. Wir werden uns so schnell wie möglich bei Ihnen melden.
            </p>
            <Link 
              href="/"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

  );
}
