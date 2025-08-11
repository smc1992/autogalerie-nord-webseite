'use client';

import { useState, useEffect } from 'react';
import { useConsent, type ConsentState, CONSENT_COOKIE } from '@/lib/consent';
import ServiceCategory from './ServiceCategory';
import Cookies from 'js-cookie';

const ServiceDetail = ({ provider, purpose }: { provider: string, purpose: string }) => (
  <div className="text-sm text-gray-600 space-y-1">
    <p><span className="font-semibold">Anbieter:</span> {provider}</p>
    <p><span className="font-semibold">Zweck:</span> {purpose}</p>
  </div>
);

export default function CookieBanner() {
  const { consent, setConsent, isInitialized } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Lokaler Zustand für die Einstellungen im Modal
  const [localConsent, setLocalConsent] = useState<ConsentState>(consent);

  useEffect(() => {
    // Banner nur anzeigen, wenn initialisiert und kein Cookie gesetzt ist
    if (isInitialized && !Cookies.get(CONSENT_COOKIE)) {
      setShowBanner(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    // Synchronisiere den lokalen Zustand, wenn sich der globale Zustand ändert
    setLocalConsent(consent);
  }, [consent]);

  const logConsent = async (consentState: ConsentState) => {
    try {
      await fetch('/api/log-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consentState),
      });
    } catch (error) {
      console.error('Fehler beim Loggen der Zustimmung:', error);
    }
  };

  const handleAcceptAll = () => {
    const finalConsent: ConsentState = { necessary: true, analytics: true, marketing: true };
    setConsent(finalConsent);
    logConsent(finalConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleDeclineAll = () => {
    const finalConsent: ConsentState = { necessary: true, analytics: false, marketing: false };
    setConsent(finalConsent);
    logConsent(finalConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    const finalConsent: ConsentState = { 
      necessary: true, 
      analytics: localConsent.analytics, 
      marketing: localConsent.marketing 
    };
    setConsent(finalConsent);
    logConsent(finalConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (category: 'analytics' | 'marketing') => (enabled: boolean) => {
    setLocalConsent(prev => ({ ...prev, [category]: enabled }));
  };

  const openSettings = () => {
    setLocalConsent(consent); // Setzt die Einstellungen auf den aktuellen globalen Stand zurück
    setShowSettings(true);
  }

  if (!isInitialized || !showBanner) {
    return null;
  }

  return (
    <>
      {/* Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 text-white shadow-lg p-4 z-50 animate-fade-in-up">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
                <h2 className="font-bold text-lg">Ihre Privatsphäre ist uns wichtig</h2>
                <p className="text-sm text-gray-300">Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und die Nutzung der Website zu analysieren. Bitte treffen Sie Ihre Auswahl.</p>
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button onClick={handleAcceptAll} className="bg-custom-red hover:bg-red-700 text-white px-5 py-2 rounded-md transition-colors duration-200">Alle akzeptieren</button>
              <button onClick={openSettings} className="bg-gray-600 hover:bg-gray-500 text-white px-5 py-2 rounded-md transition-colors duration-200">Einstellungen</button>
              <button onClick={handleDeclineAll} className="bg-transparent hover:bg-gray-700 text-white px-5 py-2 rounded-md transition-colors duration-200">Nur Notwendige</button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2">Cookie-Einstellungen</h2>
            <p className="text-sm text-gray-600 mb-6">Passen Sie Ihre Cookie-Einstellungen an. Sie können Ihre Auswahl jederzeit ändern.</p>
            
            <div className="space-y-4">
              <ServiceCategory
                title="Notwendig"
                description="Diese Cookies sind für die Grundfunktionen der Website unerlässlich und können nicht deaktiviert werden."
                enabled={true}
                onToggle={() => {}}
                isEssential={true}
              >
                <ServiceDetail provider="Eigentümer der Website" purpose="Sicherstellung der Kernfunktionalität wie Seitennavigation, Sicherheit und Speicherung der Cookie-Einstellungen." />
              </ServiceCategory>
              
              <ServiceCategory
                title="Analytik"
                description="Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie anonym Informationen sammeln."
                enabled={localConsent.analytics}
                onToggle={handleToggle('analytics')}
              >
                <ServiceDetail provider="Google LLC" purpose="Sammelt anonyme Daten zur Website-Nutzung (z.B. besuchte Seiten, Verweildauer), um Berichte zu erstellen und die Nutzererfahrung zu verbessern." />
              </ServiceCategory>
              
              <ServiceCategory
                title="Marketing"
                description="Diese Cookies werden verwendet, um Ihnen relevante Werbung auf dieser und anderen Plattformen anzuzeigen."
                enabled={localConsent.marketing}
                onToggle={handleToggle('marketing')}
              >
                <ServiceDetail provider="Meta Platforms, Inc. (Facebook)" purpose="Verfolgt die Wirksamkeit von Werbekampagnen und ermöglicht personalisierte Werbung basierend auf Ihren Interessen." />
              </ServiceCategory>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <button onClick={handleSaveSettings} className="w-full sm:w-auto bg-custom-red hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200">Auswahl speichern</button>
                <div className="flex space-x-4">
                    <button onClick={handleDeclineAll} className="text-sm text-gray-600 hover:text-custom-red">Alle ablehnen</button>
                    <button onClick={handleAcceptAll} className="text-sm text-gray-600 hover:text-custom-red">Alle akzeptieren</button>
                </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
