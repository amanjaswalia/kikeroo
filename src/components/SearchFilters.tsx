'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import {
  FiChevronDown,
  FiCalendar,
  FiUsers,
  FiFilter,
  FiSearch,
  FiX,
} from 'react-icons/fi';
import {
  searchTypes,
  guestOptions,
  locations,
  filterOptions,
  SearchType,
} from '@/lib/data';

interface DropdownProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  options: readonly string[] | string[];
  onSelect: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

function Dropdown({
  label,
  value,
  icon,
  options,
  onSelect,
  isOpen,
  onToggle,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px] group"
      >
        <div className="flex items-center justify-between text-white/50 gap-2 text-sm">
          <span className="flex items-center gap-2">
            {icon}
            {label}
          </span>
          <FiChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {value && (
          <p className="text-white text-sm font-medium mt-1">{value}</p>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 bg-kik-darker/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50 min-w-[200px] max-h-[250px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                onToggle();
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                value === option
                  ? 'bg-kik-blue text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface DatePickerProps {
  startDate: string;
  endDate: string;
  onStartChange: (date: string) => void;
  onEndChange: (date: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  labels: { dates: string; checkIn: string; checkOut: string; apply: string };
}

function DatePicker({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  isOpen,
  onToggle,
  labels,
}: DatePickerProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  const formatDateDisplay = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return `${start.getDate()} ${start.toLocaleString('default', { month: 'short' })} - ${end.getDate()} ${end.toLocaleString('default', { month: 'short' })}`;
    }
    return '';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px]"
      >
        <div className="flex items-center justify-between text-white/50 gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            {labels.dates}
          </span>
          <FiChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {(startDate || endDate) && (
          <p className="text-white text-sm font-medium mt-1">
            {formatDateDisplay()}
          </p>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 bg-kik-darker/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50 p-5 min-w-[280px]">
          <div className="space-y-4">
            <div>
              <label className="text-white/50 text-xs font-medium block mb-1.5">
                {labels.checkIn}
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartChange(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-kik-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium block mb-1.5">
                {labels.checkOut}
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndChange(e.target.value)}
                min={startDate}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-kik-gold focus:outline-none transition-colors"
              />
            </div>
            <button
              onClick={onToggle}
              className="w-full bg-kik-gold text-kik-darker font-semibold py-2.5 rounded-lg text-sm hover:bg-kik-gold-light transition-colors"
            >
              {labels.apply}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface MoreFiltersProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
  labels: {
    moreFilters: string;
    selected: string;
    priceRange: string;
    rating: string;
    amenities: string;
    applyFilters: string;
  };
}

function MoreFilters({
  selectedFilters,
  onFilterChange,
  isOpen,
  onToggle,
  labels,
}: MoreFiltersProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter((f) => f !== filter));
    } else {
      onFilterChange([...selectedFilters, filter]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px]"
      >
        <div className="flex items-center justify-between text-white/50 gap-2 text-sm">
          <span className="flex items-center gap-2">
            <FiFilter className="w-4 h-4" />
            {labels.moreFilters}
          </span>
          <FiChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {selectedFilters.length > 0 && (
          <p className="text-white text-sm font-medium mt-1">
            {labels.selected}
          </p>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-kik-darker/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 z-50 p-5 min-w-[260px]">
          <div className="space-y-5">
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2.5">
                {labels.priceRange}
              </h4>
              <div className="space-y-1.5">
                {filterOptions.priceRange.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2.5 text-white/70 text-sm cursor-pointer hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-white/20 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2.5">
                {labels.rating}
              </h4>
              <div className="space-y-1.5">
                {filterOptions.rating.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2.5 text-white/70 text-sm cursor-pointer hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-white/20 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2.5">
                {labels.amenities}
              </h4>
              <div className="space-y-1.5">
                {filterOptions.amenities.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2.5 text-white/70 text-sm cursor-pointer hover:text-white transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-white/20 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={onToggle}
              className="w-full bg-kik-gold text-kik-darker font-semibold py-2.5 rounded-lg text-sm hover:bg-kik-gold-light transition-colors"
            >
              {labels.applyFilters}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface SearchFiltersProps {
  onSearch?: (filters: {
    searchType: SearchType;
    startDate: string;
    endDate: string;
    guests: string;
    location: string;
    moreFilters: string[];
  }) => void;
  showTitle?: boolean;
}

export default function SearchFilters({
  onSearch,
  showTitle = true,
}: SearchFiltersProps) {
  const t = useTranslations('Search');
  const router = useRouter();
  const [searchType, setSearchType] = useState<SearchType>('Hotel');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState('1 adult, 1 infant');
  const [location, setLocation] = useState('');
  const [moreFilters, setMoreFilters] = useState<string[]>([]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        searchType,
        startDate,
        endDate,
        guests,
        location,
        moreFilters,
      });
    } else {
      const searchParams = new URLSearchParams();
      if (location) searchParams.set('location', location);
      if (startDate) searchParams.set('startDate', startDate);
      if (endDate) searchParams.set('endDate', endDate);
      if (guests) searchParams.set('guests', guests);
      if (moreFilters.length)
        searchParams.set('filters', moreFilters.join(','));

      const routeMap: Record<SearchType, string> = {
        Hotel: '/hotels',
        Event: '/events',
        Activity: '/activities',
        Place: '/places',
      };

      router.push(`${routeMap[searchType]}?${searchParams.toString()}`);
    }
  };

  const handleClear = () => {
    setSearchType('Hotel');
    setStartDate('');
    setEndDate('');
    setGuests('1 adult, 1 infant');
    setLocation('');
    setMoreFilters([]);
  };

  return (
    <div className="mt-10 md:mt-14">
      {showTitle && (
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
            {t('findAdventure')}
          </h2>
          <p className="text-white/50 text-sm mt-2">{t('subtitle')}</p>
        </div>
      )}

      {/* Filter Cards */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 max-w-[900px] mx-auto flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 rounded-2xl p-5 md:p-6">
        <Dropdown
          label={t('typeOfSearch')}
          value={searchType.toLowerCase()}
          options={searchTypes}
          onSelect={(value) => setSearchType(value as SearchType)}
          isOpen={openDropdown === 'searchType'}
          onToggle={() => handleToggle('searchType')}
        />

        <div className="hidden md:block w-px h-10 bg-white/10" />

        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onStartChange={setStartDate}
          onEndChange={setEndDate}
          isOpen={openDropdown === 'dates'}
          onToggle={() => handleToggle('dates')}
          labels={{
            dates: t('dates'),
            checkIn: t('checkIn'),
            checkOut: t('checkOut'),
            apply: t('apply'),
          }}
        />

        <div className="hidden md:block w-px h-10 bg-white/10" />

        <Dropdown
          label={t('guests')}
          value={guests}
          icon={<FiUsers className="w-4 h-4" />}
          options={guestOptions}
          onSelect={setGuests}
          isOpen={openDropdown === 'guests'}
          onToggle={() => handleToggle('guests')}
        />

        <div className="hidden md:block w-px h-10 bg-white/10" />

        <MoreFilters
          selectedFilters={moreFilters}
          onFilterChange={setMoreFilters}
          isOpen={openDropdown === 'filters'}
          onToggle={() => handleToggle('filters')}
          labels={{
            moreFilters: t('moreFilters'),
            selected: t('selected', { count: moreFilters.length }),
            priceRange: t('priceRange'),
            rating: t('rating'),
            amenities: t('amenities'),
            applyFilters: t('applyFilters'),
          }}
        />
      </div>

      {/* Location Input */}
      <div className="max-w-[900px] mx-auto mt-6 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder={t('whereTo')}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              list="locations-list"
              className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-3.5 text-white text-sm w-full focus:border-kik-gold/50 focus:outline-none focus:ring-1 focus:ring-kik-gold/20 transition-all placeholder:text-white/30"
            />
            <datalist id="locations-list">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSearch}
              className="bg-kik-blue text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-kik-blue-light transition-all duration-200 flex items-center gap-2 text-sm shadow-lg shadow-kik-blue/20"
            >
              <FiSearch className="w-4 h-4" />
              {t('search')}
            </button>
            <button
              onClick={handleClear}
              className="bg-white/5 border border-white/10 text-white/70 font-medium px-6 py-3.5 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200 text-sm flex items-center gap-2"
            >
              <FiX className="w-4 h-4" />
              {t('clear')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
