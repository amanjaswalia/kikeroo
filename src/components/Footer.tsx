'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-kik-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/images/Logo new 1.png"
                alt="Kikeroo Logo"
                width={100}
                height={50}
                className="h-auto mb-4"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-kik-gold/10 hover:text-kik-gold transition-all duration-200 text-xs font-bold"
                    aria-label={social}
                  >
                    {social[0]}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {t('explore')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/hotels' as const, label: t('hotels') },
                { href: '/events' as const, label: t('events') },
                { href: '/activities' as const, label: t('activities') },
                { href: '/places' as const, label: t('places') },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-sm hover:text-kik-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about' as const, label: t('aboutUs') },
                { href: '/careers' as const, label: t('careers') },
                { href: '/support' as const, label: t('helpCenter') },
                { href: '/contact' as const, label: t('contactUs') },
                { href: '/terms' as const, label: t('terms') },
                { href: '/privacy' as const, label: t('privacy') },
                { href: '/cookie-policy' as const, label: t('cookiePolicy') },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-sm hover:text-kik-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              {t('contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/40 text-sm">
                <FiMail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                hello@kikeroo.com
              </li>
              <li className="flex items-start gap-2.5 text-white/40 text-sm">
                <FiPhone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +1 (555) 000-0000
              </li>
              <li className="flex items-start gap-2.5 text-white/40 text-sm">
                <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Global HQ
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-kik-gold/60 text-xs font-medium italic">
            {t('motto')}
          </p>
        </div>
      </div>
    </footer>
  );
}
