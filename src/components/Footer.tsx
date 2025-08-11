"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <Link href="/">
                <Image src="/Bilder/autogalerie nord logo.webp" alt="Autogalerie Nord" width={200} height={96} className="h-24 mb-6" />
              </Link>
              <p className="text-gray-600 mb-6">
                Ihr vertrauensvoller Partner für hochwertige Gebrauchtwagen in Norddeutschland.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61565890614324" target="_blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/autogalerie.nord.gmbh/" target="_blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCJgqiKOxC-9VRx53LF8aZKg" target="_blank" className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                  <i className="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Startseite</Link></li>
                <li><Link href="/fahrzeugangebote" className="text-gray-600 hover:text-primary transition-colors">Fahrzeuge</Link></li>
                <li><Link href="/autoankauf" className="text-gray-600 hover:text-primary transition-colors">Autoankauf</Link></li>
                <li><Link href="/ueber-uns" className="text-gray-600 hover:text-primary transition-colors">Über Uns</Link></li>
                <li><Link href="/kontakt" className="text-gray-600 hover:text-primary transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                <li><Link href="/impressum" className="text-gray-600 hover:text-primary transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-gray-600 hover:text-primary transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Kontakt</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><i className="ri-map-pin-line mr-3 mt-1 text-primary"></i>Lüneburger Str. 30, 21435 Stelle</li>
                <li className="flex items-center"><i className="ri-phone-line mr-3 text-primary"></i><a href="tel://+494174596970" className="hover:text-primary">041 745 969 70</a></li>
                <li className="flex items-center"><i className="ri-mail-line mr-3 text-primary"></i><a href="mailto:info@autogalerie-nord.de" className="hover:text-primary">info@autogalerie-nord.de</a></li>
              </ul>
            </div>
            {/* Review Seal Column */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-6 lg:p-3 lg:aspect-square lg:flex lg:flex-col lg:justify-between">
                <div className="text-center mb-4 lg:mb-2">
                  <h4 className="text-lg lg:text-sm font-bold text-black mb-2 lg:mb-1">Kundenbewertungen</h4>
                  <div className="flex items-center justify-center mb-3 lg:mb-1">
                    <span className="text-2xl lg:text-lg font-bold text-black mr-2 lg:mr-1">4,7</span>
                    <div className="flex text-yellow-400 text-lg" style={{fontSize: '14px'}}>
                      <i className="ri-star-fill lg:text-xs"></i>
                      <i className="ri-star-fill lg:text-xs"></i>
                      <i className="ri-star-fill lg:text-xs"></i>
                      <i className="ri-star-fill lg:text-xs"></i>
                      <i className="ri-star-fill lg:text-xs"></i>
                    </div>
                  </div>
                  <p className="text-sm lg:text-xs text-gray-600 mb-1 lg:mb-0">648 Bewertungen</p>
                  <p className="text-sm lg:text-xs text-primary font-semibold lg:leading-tight">92% Weiterempfehlungen</p>
                </div>
                
                <div className="space-y-3 lg:space-y-0.5 lg:flex-1">
                  <a 
                    href="https://www.mobile.de/bewertungen/AutogalerieNordGmbh#1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 lg:p-1 bg-white rounded-lg lg:rounded border border-gray-100 hover:border-primary hover:shadow-md lg:hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-3 lg:mr-1" style={{fontSize: '10px'}}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                      <span className="text-gray-500 text-sm mr-2 lg:hidden">(343)</span>
                      <span className="font-semibold text-black group-hover:text-primary transition-colors lg:hidden">Mobile.de</span>
                      <span className="hidden lg:inline text-xs font-medium text-black group-hover:text-primary transition-colors">Mobile</span>
                    </div>
                    <i className="ri-external-link-line text-gray-400 group-hover:text-primary transition-colors lg:hidden"></i>
                    <span className="hidden lg:inline text-xs text-gray-500">(343)</span>
                  </a>
                  
                  <a 
                    href="https://www.autoscout24.de/haendler/autogalerie-nord-gmbh/bewertungen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 lg:p-1 bg-white rounded-lg lg:rounded border border-gray-100 hover:border-primary hover:shadow-md lg:hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-3 lg:mr-1" style={{fontSize: '10px'}}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                      <span className="text-gray-500 text-sm mr-2 lg:hidden">(51)</span>
                      <span className="font-semibold text-black group-hover:text-primary transition-colors lg:hidden">Autoscout24.de</span>
                      <span className="hidden lg:inline text-xs font-medium text-black group-hover:text-primary transition-colors">Scout24</span>
                    </div>
                    <i className="ri-external-link-line text-gray-400 group-hover:text-primary transition-colors lg:hidden"></i>
                    <span className="hidden lg:inline text-xs text-gray-500">(51)</span>
                  </a>
                  
                  <a 
                    href="https://www.google.com/maps/place/Autogalerie+Nord+GmbH/@53.3823943,10.112712,17z/data=!3m1!4b1!4m6!3m5!1s0x47b194b2edb929d5:0x6ebe5e811dc94ee0!8m2!3d53.3823911!4d10.1152869!16s%2Fg%2F11c58qgx1f?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 lg:p-1 bg-white rounded-lg lg:rounded border border-gray-100 hover:border-primary hover:shadow-md lg:hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-3 lg:mr-1" style={{fontSize: '10px'}}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                      <span className="text-gray-500 text-sm mr-2 lg:hidden">(254)</span>
                      <span className="font-semibold text-black group-hover:text-primary transition-colors lg:hidden">Google</span>
                      <span className="hidden lg:inline text-xs font-medium text-black group-hover:text-primary transition-colors">Google</span>
                    </div>
                    <i className="ri-external-link-line text-gray-400 group-hover:text-primary transition-colors lg:hidden"></i>
                    <span className="hidden lg:inline text-xs text-gray-500">(254)</span>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/autogalerienord/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 lg:p-1 bg-white rounded-lg lg:rounded border border-gray-100 hover:border-primary hover:shadow-md lg:hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm mr-3 lg:mr-1" style={{fontSize: '10px'}}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                      <span className="text-gray-500 text-sm mr-2 lg:hidden">(5)</span>
                      <span className="font-semibold text-black group-hover:text-primary transition-colors lg:hidden">Facebook</span>
                      <span className="hidden lg:inline text-xs font-medium text-black group-hover:text-primary transition-colors">Facebook</span>
                    </div>
                    <i className="ri-external-link-line text-gray-400 group-hover:text-primary transition-colors lg:hidden"></i>
                    <span className="hidden lg:inline text-xs text-gray-500">(5)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; <span>{new Date().getFullYear()}</span> Autogalerie Nord. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;