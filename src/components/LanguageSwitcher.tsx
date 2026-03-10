'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const localeLabels: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  nl: 'Nederlands',
  it: 'Italiano',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-white/70 hover:text-kik-gold transition-colors text-sm px-2 py-1.5 rounded-lg hover:bg-white/10"
      >
        <FiGlobe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeLabels[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <FiChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-kik-darker/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50 min-w-[160px] overflow-hidden">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                locale === loc
                  ? 'bg-kik-blue text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {localeLabels[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
