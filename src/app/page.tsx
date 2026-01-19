import { Metadata } from 'next'
import Header from '@/components/Header'
import SearchFilters from '@/components/SearchFilters'
import GroupTripBanner from '@/components/GroupTripBanner'
import SectionHeader from '@/components/SectionHeader'
import HotelCard from '@/components/HotelCard'
import EventCard from '@/components/EventCard'
import ActivityCard from '@/components/ActivityCard'
import PlaceCard from '@/components/PlaceCard'
import Footer from '@/components/Footer'
import { hotels, events, activities, places } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kikeroo - Travel with Friends | Group Trip Planning Made Easy',
  description: 'Plan unforgettable group trips with Kikeroo. Search and book hotels, events, activities, and more. The easiest way to coordinate travel with friends and family.',
  openGraph: {
    title: 'Kikeroo - Travel with Friends | Group Trip Planning Made Easy',
    description: 'Plan unforgettable group trips with Kikeroo. The easiest way to coordinate travel with friends.',
  },
}

export default function Home() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  return (
    <main>
      <div
        className="min-h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/BG.png)' }}
      >
        <Header />
        <SearchFilters />
        <GroupTripBanner />

        <SectionHeader title="Hotels" link="/hotels" />
        <div className="flex flex-col md:flex-row gap-4 mt-8 px-4 md:px-0 w-full">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              image={hotel.image}
              country={hotel.country}
              city={hotel.city}
            />
          ))}
        </div>

        <SectionHeader title="Events" link="/events" />
        <div className="flex flex-col md:flex-row gap-4 mt-8 px-4 md:px-0">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              location={event.location}
              title={event.title}
              date={formatDate(event.date)}
            />
          ))}
        </div>

        <div className="hidden md:block">
          <SectionHeader title="Activities" link="/activities" />
          <div className="flex flex-col md:flex-row gap-4 mt-8 px-4 md:px-0">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                image={activity.image}
                location={activity.location}
                title={activity.title}
                date={formatDate(activity.date)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block pb-24">
          <SectionHeader title="Place" link="/places" />
          <div className="flex flex-col md:flex-row gap-4 mt-8 px-4 md:px-0">
            {places.map((place) => (
              <PlaceCard
                key={place.id}
                image={place.image}
                name={`${place.name} (${place.country})`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
