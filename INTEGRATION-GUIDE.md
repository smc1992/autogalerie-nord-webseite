# Next.js Seiten-Integration Guide

Diese Anleitung dokumentiert den standardisierten Prozess zur Integration neuer statischer oder interaktiver Seiten in das Next.js-Projekt der Autogalerie Nord. Die Einhaltung dieser Schritte gewährleistet Konsistenz, Wartbarkeit und eine pixelgenaue Umsetzung.

---

## 1. Technische Grundkonfiguration

Das Projekt verwendet einen JavaScript-basierten Ansatz für Tailwind CSS, um eine dynamische und pixelgenaue Konfiguration zu gewährleisten.

-   **Styling-Ansatz:** Das Styling erfolgt ausschließlich über das Tailwind-JavaScript-File. Es wird **keine** kompilierte CSS-Datei verwendet.
-   **Zentrale Konfiguration:** Alle globalen Skripte und Styles werden in `src/app/layout.tsx` geladen.

-   **Dateipfade (in `layout.tsx`):**
    ```html
    <link rel="stylesheet" href="/css/fonts.css" />
    <link rel="stylesheet" href="/icons/remixicon.min.css" />
    <script src="/js/tailwind.js"></script>
    ```
-   **Tailwind-Konfiguration (in `layout.tsx`):**
    ```javascript
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#E52318', // Haupt-Akzentfarbe (Rot)
            secondary: '#1f2937' // Dunkler Hintergrund / Textfarbe
          },
          borderRadius: {
            'button': '8px'
          }
        }
      }
    }
    ```

---

## 2. Workflow: Neue Seite integrieren

### Schritt 1: Seite erstellen & Struktur anlegen

1.  **Verzeichnis anlegen:** Erstelle einen neuen Ordner für die Seite unter `src/app/`. Der Name des Ordners wird zum URL-Pfad (z.B. `src/app/neuer-service/` wird zu `https://.../neuer-service`).
2.  **Datei erstellen:** Erstelle in diesem Ordner eine `page.tsx`-Datei.
3.  **Seitenstruktur:** Die Seite muss eine React-Komponente exportieren. Der `Header` und `Footer` werden automatisch durch das Root-Layout (`layout.tsx`) hinzugefügt. Der gesamte Seiteninhalt gehört in ein `<main>`-Tag.
4.  **Header-Abstand:** Das `<main>`-Element **muss** die Klasse `pt-32` erhalten, um nicht vom fixierten Header verdeckt zu werden.

### Schritt 2: Inhalte aus HTML übernehmen (JSX-Konvertierung)

-   **Klassen:** `class` wird zu `className`.
-   **Kommentare:** `<!-- ... -->` wird zu `{/* ... */}`.
-   **Selbstschließende Tags:** `<input>` wird zu `<input />`, `<br>` zu `<br />` etc.
-   **Style-Attribute:** `style="..."` wird zu `style={{ camelCaseProperty: 'value' }}`.

### Schritt 3: Interaktivität hinzufügen (Client Components)

Für Formulare, Klick-Events oder andere dynamische Elemente muss die Seite eine Client Component sein.

1.  **Deklarieren:** Füge `'use client';` als allererste Zeile in die `page.tsx` ein.
2.  **State verwalten:** Nutze `useState` von React für Formulardaten, Ladezustände etc.
3.  **Events implementieren:** Erstelle Handler-Funktionen wie `handleSubmit` oder `handleChange`.

### Schritt 4: API-Anbindung (optional)

Für serverseitige Logik (z.B. E-Mail-Versand):

1.  **API-Route erstellen:** Lege unter `src/app/api/` eine Route an (z.B. `contact/route.ts`).
2.  **Funktion exportieren:** Exportiere eine `async function POST(request: Request)`.
3.  **Logik implementieren:** Verarbeite die Daten und gib eine Antwort mit `NextResponse.json()` zurück.
4.  **Frontend anbinden:** Nutze `fetch` in der `handleSubmit`-Funktion der Client Component, um die API-Route aufzurufen.

---

## 3. Checkliste & Referenz

### ✅ Checkliste für jede neue Seite

- [ ] Seite in `src/app/[name]/page.tsx` erstellt?
- [ ] `Header` wird korrekt angezeigt (wird automatisch eingebunden)?
- [ ] `Footer` wird korrekt angezeigt (wird automatisch eingebunden)?
- [ ] `<main>`-Tag hat die Klasse `pt-32`?
- [ ] Alle Icons verwenden die korrekten `ri-` Klassen aus Remix Icon?
- [ ] Navigation im Header (`/src/components/Header.tsx`) erweitert (Desktop & Mobile)?
- [ ] Aktive Link-Hervorhebung für den neuen Link funktioniert?
- [ ] Pixelgenaue visuelle Übereinstimmung mit der Original-HTML-Vorlage?

### 🎯 Erfolgreich integrierte Seiten
   ```

3. **Template-Struktur für neue Seiten:**
   ```tsx
   import React from 'react';
   import Header from '@/components/Header';

   export default function SeitenName() {
     return (
       <>
         <Header />
         <main className="pt-32">
           {/* Content hier */}
         </main>
       </>
     );
   }
   ```

4. **Wichtige Regeln:**
   - ✅ `pt-32` für Main-Padding (wegen Header-Höhe)
   - ✅ Keine Footer-Importe (Footer kommt aus layout.tsx)
   - ✅ Alle Icons mit `ri-` Klassen verwenden
   - ✅ Exakte HTML-Struktur in JSX konvertieren
   - ✅ Alle CSS-Klassen pixelgenau übernehmen

5. **Header-Navigation erweitern:**
   - Desktop: Navigation in `Header.tsx` erweitern
   - Mobile: Mobile Menu ebenfalls anpassen
   - Aktive Link-Hervorhebung mit `pathname` prüfen

### ❌ Häufige Fehler vermeiden:

- ❌ Kompilierte Tailwind CSS verwenden
- ❌ Doppelte Footer-Importe
- ❌ Falsches Main-Padding (`pt-20` statt `pt-32`)
- ❌ Icons vergessen oder falsche Icon-Klassen
- ❌ Tailwind-Konfiguration nicht übereinstimmend

### 📋 Checkliste für neue Seiten:

- [ ] Seite in `src/app/[name]/page.tsx` erstellt
- [ ] Header importiert, Footer NICHT importiert
- [ ] `pt-32` Main-Padding verwendet
- [ ] Alle Icons mit korrekten `ri-` Klassen
- [ ] Navigation im Header erweitert (Desktop + Mobile)
- [ ] Aktive Link-Hervorhebung funktioniert
- [ ] Pixelgenaue Übereinstimmung mit Original-HTML
- [ ] Alle Tailwind-Klassen korrekt übernommen

### 🎯 Erfolgreich integrierte Seiten:

- ✅ index (Hauptseite)
- ✅ fahrzeugangebote
- ✅ autoankauf
- ✅ kontakt
- ✅ ueber-uns
- ✅ marken
- ✅ impressum
- ✅ datenschutz
- ✅ businessloesungen

### 🔧 Technische Details:

**Tailwind-Konfiguration (layout.tsx):**
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#E52318',
        secondary: '#1f2937'
      },
      borderRadius: {
        'button': '8px'
      }
    }
  }
}
```

**CSS-Dateien (layout.tsx):**
```html
<link rel="stylesheet" href="/css/fonts.css" />
<link rel="stylesheet" href="/icons/remixicon.min.css" />
<script src="/js/tailwind.js"></script>
```

Diese Methode garantiert pixelgenaue Übereinstimmung mit dem Original-HTML und vermeidet alle bekannten Probleme.
