'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

const confirmationMessages: { [key: string]: { title: string; message: string } } = {
  kontakt: {
    title: 'Vielen Dank für Ihre Kontaktanfrage!',
    message: 'Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.',
  },
  businessloesungen: {
    title: 'Vielen Dank für Ihr Interesse an unseren Businesslösungen!',
    message: 'Ein Berater wird sich in Kürze mit Ihnen in Verbindung setzen, um Ihre Anforderungen zu besprechen.',
  },
  finanzierung: {
    title: 'Vielen Dank für Ihre Finanzierungsanfrage!',
    message: 'Wir prüfen Ihre Angaben und melden uns schnellstmöglich mit einem passenden Angebot bei Ihnen.',
  },
  default: {
    title: 'Vielen Dank!',
    message: 'Ihre Anfrage wurde erfolgreich an uns übermittelt. Wir werden uns so schnell wie möglich bei Ihnen melden.',
  },
};

export default function DankePage() {
  const params = useParams();
  const router = useRouter();
  const source = Array.isArray(params.source) ? params.source[0] : params.source || 'default';

  const { title, message } = confirmationMessages[source] || confirmationMessages.default;

  return (
    <main className="flex items-center justify-center min-h-[60vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg text-center">
        <div>
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg">{message}</p>
        </div>
        <div>
          <Link href="/"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
