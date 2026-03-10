'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import { places } from '@/lib/data';
import { FiSearch } from 'react-icons/fi';

function PlacesContent() {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get('location') || '';
  const t = useTranslations('Places');

  const [searchQuery, setSearchQuery] = useState(locationFilter);
  const [countryFilter, setCountryFilter] = useState<string>('');

  const countries = useMemo(() => [...new Set(places.map(p => p.country))].sort(), []);

  const filteredPlaces = useMemo(() => {
    let result = [...places];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (place) =>
          place.name.toLowerCase().includes(q) ||
          place.country.toLowerCase().includes(q)
      );
    }

    if (countryFilter) {
      result = result.filter(p => p.country === countryFilter);
    }

    return result;
  }, [searchQuery, countryFilter]);

  return (
    <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-14 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-slate-500 dark:text-white/40 text-sm mt-1">
              {t('destinationsFound', { count: filteredPlaces.length })}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
            >
              <option value="">All Countries</option>
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40 w-4 h-4" />
              <input
                type="text"
                placeholder={t('searchPlaces')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/30 w-[240px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl h-[320px]"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">{place.name}</h3>
                <p className="text-white/60 text-sm mt-0.5">{place.country}</p>
              </div>
              <div className="absolute top-4 right-4 bg-kik-gold text-kik-darker px-3.5 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-lg">
                {t('explore')}
              </div>
            </div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-white/40 text-lg">
              {t('noResults')}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setCountryFilter(''); }}
              className="mt-5 bg-kik-gold text-kik-darker px-7 py-2.5 rounded-xl font-semibold text-sm hover:bg-kik-gold-light transition-colors shadow-lg shadow-kik-gold/20"
            >
              {t('clearSearch')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-14 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 dark:bg-white/5 rounded-lg w-48 mb-3"></div>
          <div className="h-4 bg-slate-200 dark:bg-white/5 rounded w-32 mb-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-[320px] bg-slate-200 dark:bg-white/5 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlacesPage() {
  return (
    <PageLayout showSearch>
      <Suspense fallback={<LoadingState />}>
        <PlacesContent />
      </Suspense>
    </PageLayout>
  );
}
