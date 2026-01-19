'use client'

import { Suspense, useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import { activities } from '@/lib/data'

function ActivitiesContent() {
  const searchParams = useSearchParams()
  const locationFilter = searchParams.get('location') || ''

  const [searchQuery, setSearchQuery] = useState(locationFilter)

  const filteredActivities = useMemo(() => {
    if (!searchQuery) return activities
    return activities.filter(
      activity =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <div className="bg-[#0d1b2a] min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-white text-3xl font-bold">Activities</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border border-gray-600 rounded px-4 py-2 text-white focus:border-kik-gold focus:outline-none"
            />
            <span className="text-gray-400">{filteredActivities.length} results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={500}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-gray-300 text-xs">{activity.location}</p>
                <h3 className="text-white text-lg font-bold">{activity.title}</h3>
                <p className="text-kik-gold text-sm mt-1">{formatDate(activity.date)}</p>
              </div>
              <div className="absolute top-4 right-4 bg-kik-gold text-black px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Book Now
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No activities found matching your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 bg-kik-gold text-black px-6 py-2 rounded font-semibold hover:bg-opacity-80 transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function LoadingState() {
  return (
    <div className="bg-[#0d1b2a] min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-700 rounded w-48 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-[300px] bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ActivitiesPage() {
  return (
    <PageLayout showSearch>
      <Suspense fallback={<LoadingState />}>
        <ActivitiesContent />
      </Suspense>
    </PageLayout>
  )
}
