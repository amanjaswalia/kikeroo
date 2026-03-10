'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kik-darker/90 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 md:px-8 text-white">
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/images/logo 1 (1).png"
            alt="Kikeroo Logo"
            width={120}
            height={40}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide hover:text-kik-gold transition-colors duration-200"
          >
            {t('search')}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium tracking-wide hover:text-kik-gold transition-colors duration-200"
          >
            {t('about')}
          </Link>
          <Link
            href="/support"
            className="text-sm font-medium tracking-wide hover:text-kik-gold transition-colors duration-200"
          >
            {t('support')}
          </Link>
        </nav>

        {/* Desktop Auth + Controls */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm font-medium px-5 py-2 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            {t('login')}
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-kik-gold text-kik-darker hover:bg-kik-gold-light transition-all duration-200 shadow-lg shadow-kik-gold/20"
          >
            {t('signup')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-10 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-kik-darker z-50 md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <FiX size={22} />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-2">
          {[
            { href: '/' as const, label: t('search') },
            { href: '/hotels' as const, label: t('hotels') },
            { href: '/events' as const, label: t('events') },
            { href: '/activities' as const, label: t('activities') },
            { href: '/places' as const, label: t('places') },
            { href: '/about' as const, label: t('about') },
            { href: '/support' as const, label: t('support') },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/80 hover:text-kik-gold text-base font-medium py-3 border-b border-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-8">
            <Link
              href="/signup"
              className="bg-kik-gold text-kik-darker font-semibold py-3 rounded-lg text-center text-sm hover:bg-kik-gold-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('signup')}
            </Link>
            <Link
              href="/login"
              className="border border-white/20 text-white font-medium py-3 rounded-lg text-center text-sm hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('login')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
