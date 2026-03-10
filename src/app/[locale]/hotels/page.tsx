'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PageLayout from '@/components/PageLayout';
import type { Hotel } from '@/lib/types';
import { FiSearch, FiStar } from 'react-icons/fi';

function HotelsContent() {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get('location') || '';
  const startDateParam = searchParams.get('startDate') || '';
  const endDateParam = searchParams.get('endDate') || '';
  const filtersParam = searchParams.get('filters') || '';
  const t = useTranslations('Hotels');

  const [searchQuery, setSearchQuery] = useState(locationFilter);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const activeFilters = filtersParam ? filtersParam.split(',') : [];

  const fetchHotels = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (sortBy !== 'default') params.set('sort', sortBy);

    // Price range filters
    const priceFilters = activeFilters.filter(f => f.startsWith('$'));
    if (priceFilters.length > 0) params.set('priceRange', priceFilters.join(','));

    // Rating filters
    const ratingFilters = activeFilters.filter(f => f.includes('star'));
    if (ratingFilters.length > 0) params.set('rating', ratingFilters[0]);

    // Amenity filters
    const amenityFilters = activeFilters.filter(f => ['WiFi', 'Pool', 'Gym', 'Parking', 'Restaurant'].includes(f));
    if (amenityFilters.length > 0) params.set('amenities', amenityFilters.join(','));

    const res = await fetch(`/api/hotels?${params.toString()}`);
    const json = await res.json();
    setHotels(json.data);
    setLoading(false);
  }, [searchQuery, sortBy, filtersParam]);

  useEffect(() => {
    const timer = setTimeout(fetchHotels, 300);
    return () => clearTimeout(timer);
  }, [fetchHotels]);

  return (
    <div className="bg-gray-50 dark:bg-kik-darker min-h-screen py-14 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-slate-500 dark:text-white/40 text-sm mt-1">
              {t('propertiesFound', { count: hotels.length })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40 w-4 h-4" />
              <input
                type="text"
                placeholder={t('filterByLocation')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 dark:text-white text-sm focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-slate-400 dark:placeholder:text-white/30 w-[240px]"
              />
            </div>
          </div>
        </div>

        {/* Active filters display */}
        {(activeFilters.length > 0 || startDateParam || endDateParam) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-slate-500 dark:text-white/40 text-xs">Active filters:</span>
            {activeFilters.map((f) => (
              <span key={f} className="bg-kik-blue/10 dark:bg-kik-blue/20 text-kik-blue dark:text-kik-blue-light text-xs px-2.5 py-1 rounded-lg">
                {f}
              </span>
            ))}
            {startDateParam && (
              <span className="bg-kik-blue/10 dark:bg-kik-blue/20 text-kik-blue dark:text-kik-blue-light text-xs px-2.5 py-1 rounded-lg">
                From: {startDateParam}
              </span>
            )}
            {endDateParam && (
              <span className="bg-kik-blue/10 dark:bg-kik-blue/20 text-kik-blue dark:text-kik-blue-light text-xs px-2.5 py-1 rounded-lg">
                To: {endDateParam}
              </span>
            )}
          </div>
        )}

        {loading ? (
          <div className="animate-pulse">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-[340px] bg-slate-200 dark:bg-white/5 rounded-xl"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.id}
                  className="group relative cursor-pointer overflow-hidden rounded-xl h-[340px]"
                  itemScope
                  itemType="https://schema.org/Hotel"
                >
                  <Image
                    src={hotel.image}
                    alt={`${hotel.name} in ${hotel.city}, ${hotel.country}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Price badge */}
                  <div className="absolute top-4 left-4 bg-kik-darker/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-bold">
                    &euro;{hotel.price}<span className="text-white/50 text-xs font-normal">/night</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-white/60 text-xs font-medium tracking-wider uppercase"
                      itemProp="addressCountry"
                    >
                      {hotel.country}
                    </p>
                    <h2
                      className="text-white text-lg font-bold mt-0.5"
                      itemProp="name"
                    >
                      {hotel.name}
                    </h2>
                    <p className="text-white/50 text-xs mt-0.5">{hotel.city}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <FiStar className="w-3.5 h-3.5 text-kik-gold fill-kik-gold" />
                      <span className="text-white text-xs font-semibold">{hotel.rating.toFixed(1)}</span>
                      <span className="text-white/40 text-xs">
                        &middot; {hotel.amenities.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-kik-gold text-kik-darker px-3.5 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-lg">
                    {t('viewDetails')}
                  </div>
                </article>
              ))}
            </div>

            {hotels.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500 dark:text-white/40 text-lg">
                  {t('noResults')}
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSortBy('default'); }}
                  className="mt-5 bg-kik-gold text-kik-darker px-7 py-2.5 rounded-xl font-semibold text-sm hover:bg-kik-gold-light transition-colors shadow-lg shadow-kik-gold/20"
                >
                  {t('clearSearch')}
                </button>
              </div>
            )}
          </>
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

export default function HotelsPage() {
  return (
    <PageLayout showSearch>
      <Suspense fallback={<LoadingState />}>
        <HotelsContent />
      </Suspense>
    </PageLayout>
  );
}
