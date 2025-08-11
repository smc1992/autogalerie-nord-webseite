'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Typ-Definitionen für Navigations-Elemente
interface SubNavItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string; // href ist optional für Dropdown-Container
  label: string;
  dropdown?: SubNavItem[];
}

const TopBar = () => {
  const topBarLinks = [
    { href: 'https://wa.me/4941717889111', icon: 'ri-whatsapp-fill', label: 'WhatsApp' },
    { href: 'tel:+494174596970', icon: 'ri-smartphone-line', label: 'Anrufen' },
    { href: 'mailto:info@autogalerie-nord.de', icon: 'ri-mail-line', label: 'E-Mail senden' },
  ];

  return (
    <div className="bg-primary text-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex justify-center items-center h-12">
        <div className="flex items-center space-x-8">
          {topBarLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label} className="hover:opacity-80 transition-opacity">
              <i className={`${link.icon} text-3xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopDropdown = ({ item, getLinkClasses }: { item: NavItem, getLinkClasses: (path: string) => string }) => {
  return (
    <div className="relative group">
      <button className={`${getLinkClasses(item.href || '#')} flex items-center`}>
        {item.label}
        <i className="ri-arrow-down-s-line ml-1"></i>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
        <div className="py-2">
          {item.dropdown?.map((subItem: SubNavItem) => (
            <Link key={subItem.href} href={subItem.href} className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-primary">
              {subItem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileDropdown = ({ item, closeMenu }: { item: NavItem, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="text-3xl font-medium text-black flex items-center justify-center w-full">
        {item.label}
        <i className={`ri-arrow-down-s-line ml-2 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="mt-4 space-y-4">
          {item.dropdown?.map((subItem: SubNavItem) => (
            <Link key={subItem.href} href={subItem.href} onClick={closeMenu} className="block text-2xl text-gray-700 hover:text-primary">
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavLink = ({ item, getLinkClasses, closeMenu }: { item: NavItem, getLinkClasses: (path: string) => string, closeMenu?: () => void }) => {
  if (item.dropdown) {
    return <DesktopDropdown item={item} getLinkClasses={getLinkClasses} />;
  }
  if (item.href) {
    return (
      <Link href={item.href} className={getLinkClasses(item.href)} onClick={closeMenu}>
        {item.label}
      </Link>
    );
  }
  return null;
};

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClasses = (path: string) => {
    const baseClasses = 'text-lg font-medium hover:text-primary transition-colors';
    return `${baseClasses} ${pathname === path ? 'text-primary' : 'text-black'}`;
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    { href: '/', label: 'Startseite' },
    { href: '/fahrzeugangebote', label: 'Fahrzeuge' },
    {
      label: 'Leistungen',
      href: '#',
      dropdown: [
        { href: '/finanzierung', label: 'Finanzierung' },
        { href: '/zulassungsservice', label: 'Zulassungsservice' },
        { href: '/import-export', label: 'Import & Export' },
        { href: '/autoverkauf-kommission', label: 'Kommissionsverkauf' },
      ],
    },

    { href: '/businessloesungen', label: 'Businesslösungen' },
    { href: '/service', label: 'Service' },
    { href: '/autoankauf', label: 'Autoankauf' },
    {
      label: 'Über uns',
      href: '#',
      dropdown: [
        { href: '/ueber-uns', label: 'Unser Unternehmen' },
        { href: '/kontakt', label: 'Kontakt & Anfahrt' },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <TopBar />
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <Image src="/images/logo.png" alt="Autogalerie Nord Logo" width={280} height={56} priority />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
              <NavLink key={item.label} item={item} getLinkClasses={getLinkClasses} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-black z-50">
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-3xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center justify-center space-y-8`}>
        {navItems.map((item: NavItem) => (
          item.dropdown ? (
            <MobileDropdown key={item.label} item={item} closeMenu={() => setIsMenuOpen(false)} />
          ) : (
            <Link key={item.href} href={item.href!} onClick={() => setIsMenuOpen(false)} className="text-3xl font-medium text-black hover:text-primary">
              {item.label}
            </Link>
          )
        ))}
      </nav>
    </header>
  );
};

export default Header;

