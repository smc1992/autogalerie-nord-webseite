'use client';

import React from 'react';

export default function Datenschutz() {
  return (
    <>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
              <p className="text-xl text-white/90 mb-8">
                Informationen zum Schutz Ihrer persönlichen Daten gemäß DSGVO
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="space-y-12">
              
              {/* Responsible Party */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Verantwortliche Stelle</h2>
                <p className="text-gray-700 mb-6">
                  Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary mb-4">Autogalerie Nord GmbH</h3>
                  <p className="text-gray-700 mb-2">Galip Alkan</p>
                  <p className="text-gray-700 mb-2">Lüneburger Str. 30</p>
                  <p className="text-gray-700 mb-4">21435 Stelle</p>
                  <p className="text-gray-700 mb-2">
                    <strong>Telefon:</strong> 
                    <a href="tel:+4941745969700" className="text-primary hover:underline ml-2">
                      +49 4174 596970
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>E-Mail:</strong> 
                    <a href="mailto:info@autogalerie-nord.de" className="text-primary hover:underline ml-2">
                      info@autogalerie-nord.de
                    </a>
                  </p>
                </div>
              </div>

              {/* General Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Allgemeine Hinweise</h3>
                <p className="text-gray-700 mb-6">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>

                <p className="text-gray-700 mb-6">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                  Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) 
                  erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne 
                  Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>

                <p className="text-gray-700">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>

              {/* Data Processing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Datenverarbeitung auf unserer Website</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Server-Log-Dateien</h3>
                <p className="text-gray-700 mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-700">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              {/* Google Fonts */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Google Fonts</h2>
                <p className="text-gray-700 mb-4">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, 
                  die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten 
                  Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="text-gray-700 mb-4">
                  Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. 
                  Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
                </p>
                <p className="text-gray-700">
                  Weitere Informationen zu Google Fonts finden Sie unter 
                  <a href="https://developers.google.com/fonts/faq" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://developers.google.com/fonts/faq
                  </a> und in der Datenschutzerklärung von Google: 
                  <a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.google.com/policies/privacy/
                  </a>
                </p>
              </div>

              {/* Google Analytics */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Google Analytics</h2>
                <p className="text-gray-700 mb-4">
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). 
                  Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden 
                  und die eine Analyse der Benutzung der Website durch Sie ermöglichen.
                </p>
                <p className="text-gray-700 mb-4">
                  Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel 
                  an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der 
                  IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von 
                  Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den 
                  Europäischen Wirtschaftsraum zuvor gekürzt.
                </p>
                <p className="text-gray-700">
                  Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen 
                  Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, 
                  indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: 
                  <a href="http://tools.google.com/dlpage/gaoptout?hl=de" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    http://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                </p>
              </div>

              {/* Google Ads */}
              <div className="bg-yellow-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Google Ads</h2>
                <p className="text-gray-700 mb-4">
                  Wir nutzen Google Ads, um auf externen Webseiten auf unsere attraktiven Angebote aufmerksam zu machen. 
                  Wir können in Relation zu den Daten der Werbekampagnen ermitteln, wie erfolgreich die einzelnen 
                  Werbemaßnahmen sind. Wir verfolgen damit das Interesse, Ihnen Werbung anzuzeigen, die für Sie von 
                  Interesse ist, unsere Website für Sie interessanter zu gestalten und eine faire Berechnung von 
                  Werbe-Kosten zu erreichen.
                </p>
                <p className="text-gray-700">
                  Diese Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres 
                  berechtigten Interesses an der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres 
                  Online-Angebots.
                </p>
              </div>

              {/* Facebook Pixel */}
              <div className="bg-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Facebook Pixel</h2>
                <p className="text-gray-700 mb-4">
                  Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Facebook Inc., 
                  1601 S. California Ave, Palo Alto, CA 94304, USA („Facebook“).
                </p>
                <p className="text-gray-700 mb-4">
                  So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine 
                  Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die 
                  Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden 
                  und zukünftige Werbemaßnahmen optimiert werden.
                </p>
                <p className="text-gray-700">
                  Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse 
                  auf die Identität der Nutzer ziehen. Die Daten werden aber von Facebook gespeichert und verarbeitet, 
                  sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Facebook die Daten für eigene 
                  Werbezwecke entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann.
                </p>
              </div>

              {/* WhatsApp Meta API */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. WhatsApp Business API (Meta)</h2>
                <p className="text-gray-700 mb-4">
                  Wir nutzen die WhatsApp Business API von Meta Platforms Ireland Limited (4 Grand Canal Square, 
                  Grand Canal Harbour, Dublin 2, Irland) für die Kundenkommunikation. Wenn Sie uns über WhatsApp 
                  kontaktieren, werden Ihre Nachrichten und Kontaktdaten verarbeitet.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung 
                  vorvertraglicher Maßnahmen und zur Vertragserfüllung sowie auf Grundlage von Art. 6 Abs. 1 lit. f 
                  DSGVO zur Optimierung unserer Kundenkommunikation.
                </p>
                <p className="text-gray-700">
                  Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp: 
                  <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.whatsapp.com/legal/privacy-policy
                  </a>
                </p>
              </div>

              {/* OpenAI Integration */}
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. KI-Integration (OpenAI)</h2>
                <p className="text-gray-700 mb-4">
                  Wir nutzen Künstliche Intelligenz-Services von OpenAI (OpenAI, L.L.C., 3180 18th St, San Francisco, 
                  CA 94110, USA) zur Verbesserung unserer Kundenbetreuung und Website-Funktionalität. Dabei können 
                  Anfragen und Interaktionen verarbeitet werden, um passende Antworten und Services zu bieten.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten 
                  Interesses an der Optimierung unserer Services und Kundenerfahrung.
                </p>
                <p className="text-gray-700">
                  Weitere Informationen zur Datenverarbeitung durch OpenAI finden Sie unter: 
                  <a href="https://openai.com/privacy/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://openai.com/privacy/
                  </a>
                </p>
              </div>

              {/* Facebook Plugins */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Facebook-Plugins</h2>
                <p className="text-gray-700 mb-4">
                  Wir verwenden in unserem Internetauftritt Plugins des Online-Netzwerkportals »Facebook«. 
                  Betreiber dieses Netzwerkes ist die Facebook Inc.; 1601 S. California Avenue, Palo Alto, CA 94304, USA.
                </p>
                <p className="text-gray-700 mb-4">
                  Wenn Sie unsere Website aufrufen, wird durch Ihren Browser eine direkte Verbindung zu den Servern 
                  der Facebook Inc. hergestellt, wobei der konkrete Inhalt des Plugins von Facebook auf deren Servern 
                  bereitgestellt und schließlich über Ihren Browser direkt in unsere Website eingebunden wird.
                </p>
                <p className="text-gray-700">
                  Weitere Informationen zum Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten 
                  durch Facebook sowie Hinweise zu Einstellungsmöglichkeiten für Facebook-Benutzerkonten zum 
                  Schutz der Privatsphäre finden Sie unter: 
                  <a href="http://www.facebook.com/policy.php" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    http://www.facebook.com/policy.php
                  </a>
                </p>
              </div>

              {/* Contact Forms */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Kontaktformular</h2>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p className="text-gray-700">
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das 
                  Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung 
                  (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </div>

              {/* Rights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Ihre Rechte</h2>
                <p className="text-gray-700 mb-4">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Recht auf Auskunft</li>
                  <li>Recht auf Berichtigung oder Löschung</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                </ul>
                <p className="text-gray-700">
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
                  Ihrer personenbezogenen Daten durch uns zu beschweren.
                </p>
              </div>

              {/* SSL Encryption */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. SSL-Verschlüsselung</h2>
                <p className="text-gray-700">
                  Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, 
                  wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. 
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ 
                  auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

            </div>
          </div>
        </section>

    </>
  );
}
