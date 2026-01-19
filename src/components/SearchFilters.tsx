'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiChevronDown, FiCalendar, FiUsers, FiFilter } from 'react-icons/fi'
import { searchTypes, guestOptions, locations, filterOptions, SearchType } from '@/lib/data'

interface DropdownProps {
  label: string
  value: string
  icon?: React.ReactNode
  options: readonly string[] | string[]
  onSelect: (value: string) => void
  isOpen: boolean
  onToggle: () => void
}

function Dropdown({ label, value, icon, options, onSelect, isOpen, onToggle }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px]"
      >
        <div className="flex items-center justify-between text-gray-400 gap-2 text-sm md:text-base">
          <span className="flex items-center gap-2">
            {icon}
            {label}
          </span>
          <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        {value && <p className="text-white text-xs md:text-sm mt-1">{value}</p>}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#1a2235] border border-gray-600 rounded-md shadow-lg z-50 min-w-[180px] max-h-[250px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option)
                onToggle()
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-kik-blue transition ${
                value === option ? 'bg-kik-blue text-white' : 'text-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

interface DatePickerProps {
  startDate: string
  endDate: string
  onStartChange: (date: string) => void
  onEndChange: (date: string) => void
  isOpen: boolean
  onToggle: () => void
}

function DatePicker({ startDate, endDate, onStartChange, onEndChange, isOpen, onToggle }: DatePickerProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  const formatDateDisplay = () => {
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      return `${start.getDate()} ${start.toLocaleString('default', { month: 'short' })}-${end.getDate()} ${end.toLocaleString('default', { month: 'short' })}`
    }
    return ''
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px]"
      >
        <div className="flex items-center justify-between text-gray-400 gap-2 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <FiCalendar className="w-4 h-4" />
            Dates
          </span>
          <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        {(startDate || endDate) && (
          <p className="text-white text-xs md:text-sm mt-1">{formatDateDisplay()}</p>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[#1a2235] border border-gray-600 rounded-md shadow-lg z-50 p-4 min-w-[280px]">
          <div className="space-y-3">
            <div>
              <label className="text-gray-400 text-sm block mb-1">Check-in</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartChange(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white text-sm focus:border-kik-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm block mb-1">Check-out</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndChange(e.target.value)}
                min={startDate}
                className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white text-sm focus:border-kik-gold focus:outline-none"
              />
            </div>
            <button
              onClick={onToggle}
              className="w-full bg-kik-gold text-black font-semibold py-2 rounded text-sm hover:bg-opacity-80 transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

interface MoreFiltersProps {
  selectedFilters: string[]
  onFilterChange: (filters: string[]) => void
  isOpen: boolean
  onToggle: () => void
}

function MoreFilters({ selectedFilters, onFilterChange, isOpen, onToggle }: MoreFiltersProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onToggle])

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter(f => f !== filter))
    } else {
      onFilterChange([...selectedFilters, filter])
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="text-left min-w-[140px] md:min-w-[155px]"
      >
        <div className="flex items-center justify-between text-gray-400 gap-2 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <FiFilter className="w-4 h-4" />
            More filters
          </span>
          <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        {selectedFilters.length > 0 && (
          <p className="text-white text-xs md:text-sm mt-1">{selectedFilters.length} selected</p>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#1a2235] border border-gray-600 rounded-md shadow-lg z-50 p-4 min-w-[250px]">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Price Range</h4>
              <div className="space-y-1">
                {filterOptions.priceRange.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-gray-600 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Rating</h4>
              <div className="space-y-1">
                {filterOptions.rating.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-gray-600 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Amenities</h4>
              <div className="space-y-1">
                {filterOptions.amenities.map((option) => (
                  <label key={option} className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option)}
                      onChange={() => toggleFilter(option)}
                      className="rounded border-gray-600 bg-transparent text-kik-gold focus:ring-kik-gold"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={onToggle}
              className="w-full bg-kik-gold text-black font-semibold py-2 rounded text-sm hover:bg-opacity-80 transition"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

interface SearchFiltersProps {
  onSearch?: (filters: {
    searchType: SearchType
    startDate: string
    endDate: string
    guests: string
    location: string
    moreFilters: string[]
  }) => void
  showTitle?: boolean
}

export default function SearchFilters({ onSearch, showTitle = true }: SearchFiltersProps) {
  const router = useRouter()
  const [searchType, setSearchType] = useState<SearchType>('Hotel')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [guests, setGuests] = useState('1 adult, 1 infant')
  const [location, setLocation] = useState('')
  const [moreFilters, setMoreFilters] = useState<string[]>([])

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        searchType,
        startDate,
        endDate,
        guests,
        location,
        moreFilters,
      })
    } else {
      const searchParams = new URLSearchParams()
      if (location) searchParams.set('location', location)
      if (startDate) searchParams.set('startDate', startDate)
      if (endDate) searchParams.set('endDate', endDate)
      if (guests) searchParams.set('guests', guests)
      if (moreFilters.length) searchParams.set('filters', moreFilters.join(','))

      const routeMap: Record<SearchType, string> = {
        Hotel: '/hotels',
        Event: '/events',
        Activity: '/activities',
        Place: '/places',
      }

      router.push(`${routeMap[searchType]}?${searchParams.toString()}`)
    }
  }

  const handleClear = () => {
    setSearchType('Hotel')
    setStartDate('')
    setEndDate('')
    setGuests('1 adult, 1 infant')
    setLocation('')
    setMoreFilters([])
  }

  return (
    <div className="mt-8">
      {showTitle && (
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Search</h2>
      )}

      {/* Filter Cards */}
      <div className="bg-kik-dark max-w-[900px] mx-auto flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 rounded p-4 md:p-5">
        <Dropdown
          label="Type of search"
          value={searchType.toLowerCase()}
          options={searchTypes}
          onSelect={(value) => setSearchType(value as SearchType)}
          isOpen={openDropdown === 'searchType'}
          onToggle={() => handleToggle('searchType')}
        />

        <DatePicker
          startDate={startDate}
          endDate={endDate}
          onStartChange={setStartDate}
          onEndChange={setEndDate}
          isOpen={openDropdown === 'dates'}
          onToggle={() => handleToggle('dates')}
        />

        <Dropdown
          label="Guests"
          value={guests}
          icon={<FiUsers className="w-4 h-4" />}
          options={guestOptions}
          onSelect={setGuests}
          isOpen={openDropdown === 'guests'}
          onToggle={() => handleToggle('guests')}
        />

        <MoreFilters
          selectedFilters={moreFilters}
          onFilterChange={setMoreFilters}
          isOpen={openDropdown === 'filters'}
          onToggle={() => handleToggle('filters')}
        />
      </div>

      {/* Location Input */}
      <div className="max-w-[900px] mx-auto mt-8 px-4 md:px-0">
        <label className="text-gray-400 text-sm block mb-2">Location</label>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              list="locations-list"
              className="bg-transparent border-2 border-gray-500 rounded px-5 py-3 text-white text-lg w-full focus:border-kik-gold focus:outline-none transition"
            />
            <datalist id="locations-list">
              {locations.map((loc) => (
                <option key={loc} value={loc} />
              ))}
            </datalist>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSearch}
              className="bg-kik-blue text-white font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition flex items-center gap-2"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="bg-kik-gold text-black font-semibold px-8 py-3 rounded hover:bg-opacity-80 transition"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
