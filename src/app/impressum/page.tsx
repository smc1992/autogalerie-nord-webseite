'use client';

import React from 'react';

export default function Impressum() {
  return (
    <>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Impressum</h1>
              <p className="text-xl text-white/90 mb-8">
                Rechtliche Informationen gemäß § 5 TMG
              </p>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="space-y-12">
              
              {/* Company Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Angaben gemäß § 5 TMG</h2>
                
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Autogalerie Nord GmbH</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Postanschrift:</h4>
                      <p className="text-gray-700 mb-2">Lüneburger Str. 30</p>
                      <p className="text-gray-700 mb-4">21435 Stelle</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Kontakt:</h4>
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
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Vertreten durch:</h3>
                    <p className="text-gray-700">Galip Alkan</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Registereintrag:</h3>
                    <p className="text-gray-700 mb-2">Eintragung im Handelsregister.</p>
                    <p className="text-gray-700 mb-2">Registergericht: Amtsgericht Lüneburg</p>
                    <p className="text-gray-700">Registernummer: HRB 206353</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-ID:</h3>
                    <p className="text-gray-700">
                      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE307285920
                    </p>
                  </div>
                </div>
              </div>

              {/* EU Dispute Resolution */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hinweis auf EU-Streitschlichtung</h2>
                <p className="text-gray-700 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-700">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              {/* Consumer Dispute Resolution */}
              <div className="bg-yellow-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</h2>
                <p className="text-gray-700">
                  Der Verkäufer/Auftragnehmer wird nicht an einem Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle im Sinne des VSBG teilnehmen und ist hierzu auch nicht verpflichtet.
                </p>
              </div>

              {/* Liability Notice */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Haftungshinweis</h2>
                <p className="text-gray-700 mb-4">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                  Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
                <p className="text-gray-700">
                  Alle hier verwendeten Namen, Begriffe, Zeichen und Grafiken können Marken- oder Warenzeichen 
                  im Besitze ihrer rechtlichen Eigentümer sein. Die Rechte aller erwähnten und benutzten Marken- 
                  und Warenzeichen liegen ausschließlich bei deren Besitzern.
                </p>
              </div>

              {/* Content Liability */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Inhalt des Onlineangebotes</h2>
                <p className="text-gray-700 mb-4">
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder 
                  Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich 
                  auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung 
                  der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger 
                  Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des 
                  Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
                </p>
                <p className="text-gray-700">
                  Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, 
                  Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
                  zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                </p>
              </div>

              {/* Links and References */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Verweise und Links</h2>
                <p className="text-gray-700 mb-4">
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten (&quot;Hyperlinks&quot;), die außerhalb 
                  des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich 
                  in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch 
                  möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>
                <p className="text-gray-700">
                  Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen 
                  Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige 
                  Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der 
                  Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten 
                  aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden.
                </p>
              </div>

              {/* Copyright */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Urheber- und Kennzeichenrecht</h2>
                <p className="text-gray-700 mb-4">
                  Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, 
                  Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, 
                  Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, 
                  Tondokumente, Videosequenzen und Texte zurückzugreifen.
                </p>
                <p className="text-gray-700">
                  Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim 
                  Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, 
                  Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne 
                  ausdrückliche Zustimmung des Autors nicht gestattet.
                </p>
              </div>

              {/* AGG */}
              <div className="bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Allgemeines Gleichbehandlungsgesetz (AGG)</h2>
                <p className="text-gray-700">
                  Wir sind im Sinne des AGG bestrebt, Benachteiligungen aus Gründen der Rasse, des Geschlechts, 
                  der Religion oder Weltanschauung, einer Behinderung, des Alters oder der sexuellen Identität 
                  zu verhindern und/oder zu beseitigen und setzen die Regelungen dieses Gesetzes konsequent um. 
                  Sämtliche grammatikalischen Formen verstehen sich grundsätzlich geschlechtsneutral.
                </p>
              </div>

            </div>
          </div>
        </section>

    </>
  );
}
