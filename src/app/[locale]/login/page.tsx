'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations('Login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError(t('fillAllFields'));
      return;
    }

    console.log('Login:', formData);
    alert(t('loginSuccess'));
    router.push('/');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
      style={{ backgroundImage: 'url(/images/BG.png)' }}
    >
      <div className="absolute inset-0 bg-kik-darker/60 backdrop-blur-sm" />

      <div className="relative bg-kik-darker/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 w-full max-w-[420px] shadow-2xl shadow-black/40">
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo 1 (1).png"
              alt="Kikeroo"
              width={120}
              height={40}
              className="mx-auto mb-6"
            />
          </Link>
          <h1 className="text-white text-2xl font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-white/40 text-sm mt-2">{t('subtitle')}</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2.5">
              {t('emailLabel')}
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2.5">
              {t('passwordLabel')}
            </label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={t('passwordPlaceholder')}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 py-3 text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-white/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
              >
                {showPassword ? (
                  <FiEyeOff className="w-4 h-4" />
                ) : (
                  <FiEye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
                className="rounded border-white/20 bg-transparent text-kik-gold focus:ring-kik-gold/30"
              />
              <span className="text-white/40 text-xs">{t('rememberMe')}</span>
            </label>
            <Link
              href="#"
              className="text-kik-gold text-xs font-medium hover:text-kik-gold-light transition-colors"
            >
              {t('forgotPassword')}
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-kik-gold text-kik-darker font-semibold py-3 rounded-xl hover:bg-kik-gold-light transition-all duration-200 text-sm shadow-lg shadow-kik-gold/20"
          >
            {t('signIn')}
          </button>
        </form>

        <div className="mt-7">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-kik-darker/80 text-white/30">
                {t('orContinueWith')}
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/70 py-2.5 rounded-xl hover:bg-white/10 hover:text-white transition-all text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/70 py-2.5 rounded-xl hover:bg-white/10 hover:text-white transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-7">
          {t('noAccount')}{' '}
          <Link
            href="/signup"
            className="text-kik-gold font-medium hover:text-kik-gold-light transition-colors"
          >
            {t('signUp')}
          </Link>
        </p>
      </div>
    </div>
  );
}
