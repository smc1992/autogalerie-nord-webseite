'use client';

import React from 'react';
import Link from 'next/link';

export default function DankeBusinessPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Vielen Dank für Ihre Geschäftsanfrage!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ihre Anfrage wurde erfolgreich übermittelt. Unser Team für Geschäftskunden wird sich umgehend mit Ihnen in Verbindung setzen, um Ihre Anforderungen zu besprechen.
            </p>
            <Link href="/"
              className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
                Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
