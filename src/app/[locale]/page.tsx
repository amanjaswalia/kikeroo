import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import SearchFilters from '@/components/SearchFilters';
import GroupTripBanner from '@/components/GroupTripBanner';
import SectionHeader from '@/components/SectionHeader';
import HotelCard from '@/components/HotelCard';
import EventCard from '@/components/EventCard';
import ActivityCard from '@/components/ActivityCard';
import PlaceCard from '@/components/PlaceCard';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const t = await getTranslations('Home');

  const [hotels, events, activities, places] = await Promise.all([
    prisma.hotel.findMany({ take: 5 }),
    prisma.event.findMany({ take: 5 }),
    prisma.activity.findMany({ take: 5 }),
    prisma.place.findMany({ take: 5 }),
  ]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <main>
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/images/BG.png)' }}
      >
        <Header />

        <div className="pt-8 pb-6">
          <SearchFilters />
        </div>

        <GroupTripBanner />

        {/* Hotels Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mt-8">
          <SectionHeader title={t('seeAll')} sectionTitle="Hotels" link="/hotels" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                country={hotel.country}
                city={hotel.city}
              />
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mt-10">
          <SectionHeader title={t('seeAll')} sectionTitle="Events" link="/events" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
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
        </section>

        {/* Activities Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mt-10 hidden md:block">
          <SectionHeader title={t('seeAll')} sectionTitle="Activities" link="/activities" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
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
        </section>

        {/* Places Section */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 mt-10 pb-20 hidden md:block">
          <SectionHeader title={t('seeAll')} sectionTitle="Places" link="/places" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-5">
            {places.map((place) => (
              <PlaceCard
                key={place.id}
                image={place.image}
                name={`${place.name} (${place.country})`}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials - outside dark bg */}
      <Testimonials />

      {/* Gallery */}
      <Gallery />

      <Footer />
    </main>
  );
}
