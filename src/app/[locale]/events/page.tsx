'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import { events } from '@/lib/data';
import { FiSearch, FiCalendar } from 'react-icons/fi';

function EventsContent() {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get('location') || '';
  const startDateParam = searchParams.get('startDate') || '';
  const endDateParam = searchParams.get('endDate') || '';
  const t = useTranslations('Events');

  const [searchQuery, setSearchQuery] = useState(locationFilter);
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'date'>('default');

  const eventTypes = useMemo(() => [...new Set(events.map(e => e.type))], []);

  const filteredEvents = useMemo(() => {
    let result = [...events];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(q) ||
          event.location.toLowerCase().includes(q)
      );
    }

    if (typeFilter) {
      result = result.filter(e => e.type === typeFilter);
    }

    // Date range filter
    if (startDateParam) {
      result = result.filter(e => e.date >= startDateParam);
    }
    if (endDateParam) {
      result = result.filter(e => e.date <= endDateParam);
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'date') result.sort((a, b) => a.date.localeCompare(b.date));

    return result;
  }, [searchQuery, typeFilter, startDateParam, endDateParam, sortBy]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-14 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-slate-500 dark:text-white/40 text-sm mt-1">
              {t('eventsFound', { count: filteredEvents.length })}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
            >
              <option value="">All Types</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="date">Date</option>
            </select>
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40 w-4 h-4" />
              <input
                type="text"
                placeholder={t('searchEvents')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/30 w-[240px]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl h-[340px]"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {/* Price badge */}
              <div className="absolute top-4 left-4 bg-kik-darker/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                &euro;{event.price}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block bg-kik-blue/80 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2">
                  {event.type}
                </span>
                <p className="text-white/60 text-xs tracking-wide">
                  {event.location}
                </p>
                <h3 className="text-white text-lg font-bold mt-0.5 leading-tight">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <FiCalendar className="w-3 h-3 text-kik-gold" />
                  <p className="text-kik-gold text-xs font-medium">
                    {formatDate(event.date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-white/40 text-lg">
              {t('noResults')}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setTypeFilter(''); setSortBy('default'); }}
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
              <div key={i} className="h-[340px] bg-slate-200 dark:bg-white/5 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <PageLayout showSearch>
      <Suspense fallback={<LoadingState />}>
        <EventsContent />
      </Suspense>
    </PageLayout>
  );
}
