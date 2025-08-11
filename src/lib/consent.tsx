'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Deklariert gtag global, um TypeScript-Fehler zu vermeiden
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

// Name des Cookies, der die Zustimmungseinstellungen speichert
export const CONSENT_COOKIE = 'cookie_consent';

// Definiert die Struktur des Consent-Status
export interface ConsentState {
  necessary: true; // Notwendige Cookies können nicht deaktiviert werden
  analytics: boolean;
  marketing: boolean;
}

// Definiert den Typ für den Context-Wert
interface ConsentContextType {
  consent: ConsentState;
  setConsent: (newConsent: Partial<Omit<ConsentState, 'necessary'>>) => void;
  isInitialized: boolean;
}

// Standard-Zustand, wenn keine Einstellung gespeichert ist
const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

// Erstellt den React Context
const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

/**
 * Hook für den einfachen Zugriff auf den Consent-Context.
 * Muss innerhalb eines ConsentProvider verwendet werden.
 */
export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};

/**
 * Provider-Komponente, die den Consent-Status global zur Verfügung stellt.
 * Liest den Zustand aus Cookies und synchronisiert Änderungen.
 */
export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(defaultConsent);
  const [isInitialized, setIsInitialized] = useState(false);

  // Beim ersten Laden den Zustand aus dem Cookie wiederherstellen
  useEffect(() => {
    let initialState: ConsentState = { ...defaultConsent };
    try {
      const savedConsent = Cookies.get(CONSENT_COOKIE);
      if (savedConsent) {
        const parsedConsent: Partial<ConsentState> = JSON.parse(savedConsent);
        // Stelle sicher, dass 'necessary' immer true ist
        initialState = { ...initialState, ...parsedConsent, necessary: true };
      }
    } catch (e) {
      console.error('Fehler beim Parsen des Consent-Cookies:', e);
    } finally {
      setConsentState(initialState);
      setIsInitialized(true);
    }
  }, []);

  // Funktion zum Aktualisieren des Consent-Status
  const setConsent = (newConsent: Partial<Omit<ConsentState, 'necessary'>>) => {
    const updatedConsent: ConsentState = { ...consent, ...newConsent, necessary: true };
    setConsentState(updatedConsent);
    Cookies.set(CONSENT_COOKIE, JSON.stringify(updatedConsent), { expires: 365 });

    // Google Consent Mode aktualisieren, falls gtag vorhanden ist
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: updatedConsent.analytics ? 'granted' : 'denied',
        ad_storage: updatedConsent.marketing ? 'granted' : 'denied',
      });
    }
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent, isInitialized }}>
      {children}
    </ConsentContext.Provider>
  );
}
