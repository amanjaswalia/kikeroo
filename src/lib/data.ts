const images = [
  '/images/tegal.png',
  '/images/sucre.png',
  '/images/la paz (1).png',
  '/images/Cochabamba.png',
  '/images/surabaya.png',
  '/images/image 5.png',
  '/images/image 10.png',
  '/images/image 11.png',
  '/images/image 12.png',
  '/images/image 13.png',
  '/images/image 26.png',
  '/images/image 27.png',
  '/images/image 28.png',
  '/images/image 29.png',
  '/images/image 30.png',
  '/images/image 31.png',
]

function img(index: number): string {
  return images[index % images.length]
}

export interface Hotel {
  id: number
  image: string
  country: string
  city: string
  name: string
  price: number
  rating: number
  amenities: string[]
}

export interface Event {
  id: number
  image: string
  location: string
  title: string
  date: string
  type: string
  price: number
}

export interface Activity {
  id: number
  image: string
  location: string
  title: string
  date: string
  price: number
  category: string
}

export interface Place {
  id: number
  image: string
  name: string
  country: string
}

export const hotels: Hotel[] = [
  { id: 1, image: img(0), country: 'Germany', city: 'Berlin', name: 'Grand Hotel Berlin', price: 180, rating: 4.5, amenities: ['WiFi', 'Restaurant', 'Bar', 'Gym'] },
  { id: 2, image: img(1), country: 'France', city: 'Paris', name: 'Le Petit Palace Paris', price: 320, rating: 4.8, amenities: ['WiFi', 'Spa', 'Restaurant', 'Room Service'] },
  { id: 3, image: img(2), country: 'Spain', city: 'Barcelona', name: 'Barcelona Seaside Resort', price: 250, rating: 4.3, amenities: ['WiFi', 'Pool', 'Restaurant'] },
  { id: 4, image: img(3), country: 'Netherlands', city: 'Amsterdam', name: 'Canal View Amsterdam', price: 210, rating: 4.1, amenities: ['WiFi', 'Bar', 'Pet Friendly'] },
  { id: 5, image: img(4), country: 'Italy', city: 'Rome', name: 'Roma Antica Inn', price: 275, rating: 4.6, amenities: ['WiFi', 'Restaurant', 'Room Service', 'Bar'] },
  { id: 6, image: img(5), country: 'Japan', city: 'Tokyo', name: 'Tokyo Bay Inn', price: 350, rating: 4.7, amenities: ['WiFi', 'Gym', 'Spa', 'Restaurant'] },
  { id: 7, image: img(6), country: 'Japan', city: 'Kyoto', name: 'Kyoto Garden Ryokan', price: 420, rating: 4.9, amenities: ['WiFi', 'Spa', 'Restaurant'] },
  { id: 8, image: img(7), country: 'Thailand', city: 'Bangkok', name: 'Bangkok Riverside Hotel', price: 95, rating: 4.2, amenities: ['WiFi', 'Pool', 'Restaurant', 'Bar'] },
  { id: 9, image: img(8), country: 'Indonesia', city: 'Bali', name: 'Bali Paradise Resort', price: 150, rating: 4.6, amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
  { id: 10, image: img(9), country: 'USA', city: 'New York', name: 'Manhattan Skyline Hotel', price: 450, rating: 4.4, amenities: ['WiFi', 'Gym', 'Room Service', 'Bar'] },
  { id: 11, image: img(10), country: 'USA', city: 'Los Angeles', name: 'Sunset Boulevard Lodge', price: 380, rating: 4.3, amenities: ['WiFi', 'Pool', 'Parking', 'Gym'] },
  { id: 12, image: img(11), country: 'UK', city: 'London', name: 'Kensington Royal Suites', price: 400, rating: 4.7, amenities: ['WiFi', 'Restaurant', 'Room Service', 'Spa'] },
  { id: 13, image: img(12), country: 'UAE', city: 'Dubai', name: 'Dubai Marina Luxury Hotel', price: 680, rating: 4.9, amenities: ['WiFi', 'Pool', 'Spa', 'Gym'] },
  { id: 14, image: img(13), country: 'Turkey', city: 'Istanbul', name: 'Bosphorus Palace Hotel', price: 160, rating: 4.5, amenities: ['WiFi', 'Restaurant', 'Bar'] },
  { id: 15, image: img(14), country: 'Czech Republic', city: 'Prague', name: 'Old Town Prague Hotel', price: 120, rating: 4.2, amenities: ['WiFi', 'Bar', 'Restaurant'] },
  { id: 16, image: img(15), country: 'Austria', city: 'Vienna', name: 'Vienna Imperial Suites', price: 310, rating: 4.6, amenities: ['WiFi', 'Spa', 'Restaurant', 'Room Service'] },
  { id: 17, image: img(0), country: 'Portugal', city: 'Lisbon', name: 'Lisbon Harbour View', price: 175, rating: 4.3, amenities: ['WiFi', 'Bar', 'Restaurant'] },
  { id: 18, image: img(1), country: 'Switzerland', city: 'Zurich', name: 'Zurich Lakeside Hotel', price: 520, rating: 4.8, amenities: ['WiFi', 'Spa', 'Gym', 'Restaurant'] },
  { id: 19, image: img(2), country: 'Morocco', city: 'Marrakech', name: 'Marrakech Riad Palace', price: 130, rating: 4.4, amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'] },
  { id: 20, image: img(3), country: 'South Africa', city: 'Cape Town', name: 'Table Mountain Lodge', price: 200, rating: 4.5, amenities: ['WiFi', 'Pool', 'Parking', 'Bar'] },
  { id: 21, image: img(4), country: 'Australia', city: 'Sydney', name: 'Sydney Harbour Grand', price: 390, rating: 4.6, amenities: ['WiFi', 'Gym', 'Restaurant', 'Bar'] },
  { id: 22, image: img(5), country: 'Brazil', city: 'Rio de Janeiro', name: 'Copacabana Beach Hotel', price: 220, rating: 4.3, amenities: ['WiFi', 'Pool', 'Bar'] },
  { id: 23, image: img(6), country: 'Argentina', city: 'Buenos Aires', name: 'Buenos Aires Boutique Hotel', price: 140, rating: 4.1, amenities: ['WiFi', 'Restaurant', 'Bar'] },
  { id: 24, image: img(7), country: 'Mexico', city: 'Mexico City', name: 'Mexico City Centro Hotel', price: 110, rating: 4.0, amenities: ['WiFi', 'Parking', 'Restaurant'] },
  { id: 25, image: img(8), country: 'Canada', city: 'Toronto', name: 'Toronto Lakeshore Suites', price: 280, rating: 4.4, amenities: ['WiFi', 'Gym', 'Room Service', 'Parking'] },
  { id: 26, image: img(9), country: 'India', city: 'Mumbai', name: 'Mumbai Gateway Hotel', price: 85, rating: 4.2, amenities: ['WiFi', 'Restaurant', 'Airport Shuttle'] },
  { id: 27, image: img(10), country: 'Singapore', city: 'Singapore', name: 'Marina Bay Sands View', price: 480, rating: 4.8, amenities: ['WiFi', 'Pool', 'Spa', 'Gym'] },
  { id: 28, image: img(11), country: 'South Korea', city: 'Seoul', name: 'Seoul Gangnam Residence', price: 190, rating: 4.3, amenities: ['WiFi', 'Gym', 'Restaurant'] },
  { id: 29, image: img(12), country: 'Bolivia', city: 'La Paz', name: 'La Paz Altitude Hotel', price: 65, rating: 3.9, amenities: ['WiFi', 'Restaurant', 'Airport Shuttle'] },
  { id: 30, image: img(13), country: 'Bolivia', city: 'Cochabamba', name: 'Cochabamba Garden Inn', price: 55, rating: 3.7, amenities: ['WiFi', 'Parking', 'Restaurant'] },
]

export const events: Event[] = [
  { id: 1, image: img(5), location: 'Berlin, Germany', title: 'Rammstein World Tour', date: '2026-03-15', type: 'Concert', price: 120 },
  { id: 2, image: img(6), location: 'Paris, France', title: 'Louvre After Dark Exhibition', date: '2026-04-02', type: 'Exhibition', price: 45 },
  { id: 3, image: img(7), location: 'Barcelona, Spain', title: 'Primavera Sound Festival', date: '2026-06-05', type: 'Festival', price: 280 },
  { id: 4, image: img(8), location: 'London, UK', title: 'Hamilton West End', date: '2026-05-10', type: 'Theater', price: 150 },
  { id: 5, image: img(9), location: 'Amsterdam, Netherlands', title: 'Amsterdam Comedy Night', date: '2026-04-18', type: 'Comedy', price: 35 },
  { id: 6, image: img(10), location: 'Rome, Italy', title: 'Serie A: Roma vs Lazio', date: '2026-03-22', type: 'Sports', price: 85 },
  { id: 7, image: img(11), location: 'Tokyo, Japan', title: 'Tokyo Jazz Festival', date: '2026-07-12', type: 'Festival', price: 95 },
  { id: 8, image: img(12), location: 'New York, USA', title: 'Broadway: The Phantom of the Opera', date: '2026-05-25', type: 'Theater', price: 200 },
  { id: 9, image: img(13), location: 'Dubai, UAE', title: 'Dubai World Cup', date: '2026-03-28', type: 'Sports', price: 350 },
  { id: 10, image: img(14), location: 'Istanbul, Turkey', title: 'Istanbul Biennial', date: '2026-09-01', type: 'Exhibition', price: 30 },
  { id: 11, image: img(15), location: 'Prague, Czech Republic', title: 'Prague Spring Music Festival', date: '2026-05-12', type: 'Festival', price: 110 },
  { id: 12, image: img(0), location: 'Vienna, Austria', title: 'Vienna Philharmonic Concert', date: '2026-06-20', type: 'Concert', price: 180 },
  { id: 13, image: img(1), location: 'Lisbon, Portugal', title: 'NOS Alive Festival', date: '2026-07-08', type: 'Festival', price: 230 },
  { id: 14, image: img(2), location: 'Bangkok, Thailand', title: 'Muay Thai Championship', date: '2026-08-15', type: 'Sports', price: 60 },
  { id: 15, image: img(3), location: 'Sydney, Australia', title: 'Sydney Comedy Gala', date: '2026-04-25', type: 'Comedy', price: 55 },
  { id: 16, image: img(4), location: 'Cape Town, South Africa', title: 'Cape Town International Jazz Festival', date: '2026-03-27', type: 'Festival', price: 140 },
  { id: 17, image: img(5), location: 'Seoul, South Korea', title: 'K-Pop World Concert', date: '2026-08-03', type: 'Concert', price: 175 },
  { id: 18, image: img(6), location: 'Mexico City, Mexico', title: 'Frida Kahlo Immersive Exhibition', date: '2026-06-14', type: 'Exhibition', price: 40 },
  { id: 19, image: img(7), location: 'Buenos Aires, Argentina', title: 'Tango World Championship', date: '2026-08-22', type: 'Sports', price: 70 },
  { id: 20, image: img(8), location: 'Rio de Janeiro, Brazil', title: 'Rock in Rio Festival', date: '2026-09-18', type: 'Festival', price: 300 },
  { id: 21, image: img(9), location: 'Mumbai, India', title: 'Bollywood Live Spectacular', date: '2026-10-05', type: 'Concert', price: 50 },
  { id: 22, image: img(10), location: 'Toronto, Canada', title: 'Just for Laughs Festival', date: '2026-07-20', type: 'Comedy', price: 65 },
  { id: 23, image: img(11), location: 'Singapore', title: 'Singapore Grand Prix', date: '2026-10-03', type: 'Sports', price: 320 },
  { id: 24, image: img(12), location: 'Marrakech, Morocco', title: 'Marrakech Popular Arts Festival', date: '2026-07-01', type: 'Festival', price: 25 },
  { id: 25, image: img(13), location: 'Zurich, Switzerland', title: 'Zurich Film Festival', date: '2026-09-25', type: 'Exhibition', price: 55 },
  { id: 26, image: img(14), location: 'La Paz, Bolivia', title: 'Fiesta del Gran Poder', date: '2026-06-07', type: 'Festival', price: 20 },
  { id: 27, image: img(15), location: 'Kyoto, Japan', title: 'Kyoto Noh Theater Performance', date: '2026-04-10', type: 'Theater', price: 90 },
  { id: 28, image: img(0), location: 'Bali, Indonesia', title: 'Bali Spirit Festival', date: '2026-05-01', type: 'Festival', price: 160 },
  { id: 29, image: img(1), location: 'Los Angeles, USA', title: 'LA Stand-Up Comedy Showcase', date: '2026-06-28', type: 'Comedy', price: 45 },
  { id: 30, image: img(2), location: 'Cochabamba, Bolivia', title: 'Cochabamba Cultural Theater Night', date: '2026-11-14', type: 'Theater', price: 30 },
]

export const activities: Activity[] = [
  { id: 1, image: img(10), location: 'Bali, Indonesia', title: 'Scuba Diving in Bali', date: '2026-03-20', price: 120, category: 'Water Sports' },
  { id: 2, image: img(11), location: 'Barcelona, Spain', title: 'Wine Tasting in Barcelona', date: '2026-04-12', price: 85, category: 'Food & Wine' },
  { id: 3, image: img(12), location: 'Tokyo, Japan', title: 'Traditional Tea Ceremony in Tokyo', date: '2026-05-08', price: 60, category: 'Cultural' },
  { id: 4, image: img(13), location: 'Cape Town, South Africa', title: 'Shark Cage Diving in Cape Town', date: '2026-06-15', price: 250, category: 'Adventure' },
  { id: 5, image: img(14), location: 'Kyoto, Japan', title: 'Bamboo Forest Hiking in Kyoto', date: '2026-04-22', price: 40, category: 'Nature' },
  { id: 6, image: img(15), location: 'Marrakech, Morocco', title: 'Desert Camel Trek in Marrakech', date: '2026-07-10', price: 95, category: 'Adventure' },
  { id: 7, image: img(0), location: 'Bangkok, Thailand', title: 'Thai Cooking Class in Bangkok', date: '2026-05-18', price: 55, category: 'Food & Wine' },
  { id: 8, image: img(1), location: 'Rio de Janeiro, Brazil', title: 'Hang Gliding over Rio', date: '2026-08-02', price: 180, category: 'Adventure' },
  { id: 9, image: img(2), location: 'Rome, Italy', title: 'Colosseum Guided Tour in Rome', date: '2026-06-20', price: 45, category: 'Cultural' },
  { id: 10, image: img(3), location: 'Sydney, Australia', title: 'Surfing Lessons in Sydney', date: '2026-07-05', price: 110, category: 'Water Sports' },
  { id: 11, image: img(4), location: 'Amsterdam, Netherlands', title: 'Canal Kayaking in Amsterdam', date: '2026-05-30', price: 50, category: 'Water Sports' },
  { id: 12, image: img(5), location: 'Dubai, UAE', title: 'Dune Buggy Safari in Dubai', date: '2026-10-12', price: 200, category: 'Adventure' },
  { id: 13, image: img(6), location: 'Paris, France', title: 'Pastry Making Workshop in Paris', date: '2026-04-28', price: 130, category: 'Food & Wine' },
  { id: 14, image: img(7), location: 'Istanbul, Turkey', title: 'Turkish Hammam Experience in Istanbul', date: '2026-09-08', price: 75, category: 'Wellness' },
  { id: 15, image: img(8), location: 'New York, USA', title: 'Central Park Bike Tour in New York', date: '2026-06-01', price: 35, category: 'Nature' },
  { id: 16, image: img(9), location: 'Berlin, Germany', title: 'Berlin Wall History Walk', date: '2026-03-25', price: 30, category: 'Cultural' },
  { id: 17, image: img(10), location: 'Lisbon, Portugal', title: 'Surfing in Lisbon', date: '2026-07-18', price: 90, category: 'Water Sports' },
  { id: 18, image: img(11), location: 'Buenos Aires, Argentina', title: 'Tango Dance Lesson in Buenos Aires', date: '2026-08-14', price: 65, category: 'Cultural' },
  { id: 19, image: img(12), location: 'Singapore', title: 'Singapore Botanic Gardens Walk', date: '2026-05-22', price: 30, category: 'Nature' },
  { id: 20, image: img(13), location: 'La Paz, Bolivia', title: 'Mountain Biking Death Road in La Paz', date: '2026-09-20', price: 140, category: 'Adventure' },
  { id: 21, image: img(14), location: 'Seoul, South Korea', title: 'K-Beauty Spa Day in Seoul', date: '2026-10-08', price: 100, category: 'Wellness' },
  { id: 22, image: img(15), location: 'Mexico City, Mexico', title: 'Tequila and Mezcal Tasting in Mexico City', date: '2026-06-25', price: 70, category: 'Food & Wine' },
  { id: 23, image: img(0), location: 'London, UK', title: 'Thames River Cruise in London', date: '2026-04-05', price: 55, category: 'Nature' },
  { id: 24, image: img(1), location: 'Mumbai, India', title: 'Yoga Retreat in Mumbai', date: '2026-11-01', price: 500, category: 'Wellness' },
  { id: 25, image: img(2), location: 'Prague, Czech Republic', title: 'Beer Brewing Tour in Prague', date: '2026-08-28', price: 60, category: 'Food & Wine' },
]

export const places: Place[] = [
  { id: 1, image: img(0), name: 'Berlin', country: 'Germany' },
  { id: 2, image: img(1), name: 'Paris', country: 'France' },
  { id: 3, image: img(2), name: 'Barcelona', country: 'Spain' },
  { id: 4, image: img(3), name: 'Amsterdam', country: 'Netherlands' },
  { id: 5, image: img(4), name: 'Rome', country: 'Italy' },
  { id: 6, image: img(5), name: 'Tokyo', country: 'Japan' },
  { id: 7, image: img(6), name: 'Kyoto', country: 'Japan' },
  { id: 8, image: img(7), name: 'Bangkok', country: 'Thailand' },
  { id: 9, image: img(8), name: 'Bali', country: 'Indonesia' },
  { id: 10, image: img(9), name: 'New York', country: 'USA' },
  { id: 11, image: img(10), name: 'Los Angeles', country: 'USA' },
  { id: 12, image: img(11), name: 'London', country: 'UK' },
  { id: 13, image: img(12), name: 'Dubai', country: 'UAE' },
  { id: 14, image: img(13), name: 'Istanbul', country: 'Turkey' },
  { id: 15, image: img(14), name: 'Prague', country: 'Czech Republic' },
  { id: 16, image: img(15), name: 'Vienna', country: 'Austria' },
  { id: 17, image: img(0), name: 'Lisbon', country: 'Portugal' },
  { id: 18, image: img(1), name: 'Zurich', country: 'Switzerland' },
  { id: 19, image: img(2), name: 'Marrakech', country: 'Morocco' },
  { id: 20, image: img(3), name: 'Cape Town', country: 'South Africa' },
  { id: 21, image: img(4), name: 'Sydney', country: 'Australia' },
  { id: 22, image: img(5), name: 'Rio de Janeiro', country: 'Brazil' },
  { id: 23, image: img(6), name: 'Buenos Aires', country: 'Argentina' },
  { id: 24, image: img(7), name: 'Mexico City', country: 'Mexico' },
  { id: 25, image: img(8), name: 'Mumbai', country: 'India' },
]

export const searchTypes = ['Hotel', 'Event', 'Activity', 'Place'] as const
export type SearchType = typeof searchTypes[number]

export const guestOptions = [
  '1 adult',
  '2 adults',
  '1 adult, 1 child',
  '1 adult, 1 infant',
  '2 adults, 1 child',
  '2 adults, 2 children',
  '3 adults',
  '4 adults',
] as const

export const locations = [
  'Berlin',
  'Paris',
  'Barcelona',
  'Amsterdam',
  'Rome',
  'Tokyo',
  'Kyoto',
  'Bangkok',
  'Bali',
  'New York',
  'Los Angeles',
  'London',
  'Dubai',
  'Istanbul',
  'Prague',
  'Vienna',
  'Lisbon',
  'Zurich',
  'Marrakech',
  'Cape Town',
  'Sydney',
  'Rio de Janeiro',
  'Buenos Aires',
  'Mexico City',
  'Toronto',
  'Mumbai',
  'Singapore',
  'Seoul',
  'La Paz',
  'Cochabamba',
] as const

export const filterOptions = {
  priceRange: ['$0-$100', '$100-$200', '$200-$500', '$500+'],
  rating: ['5 stars', '4+ stars', '3+ stars', 'Any'],
  amenities: ['WiFi', 'Pool', 'Gym', 'Parking', 'Restaurant'],
}

export interface Testimonial {
  id: number
  name: string
  initials: string
  location: string
  rating: number
  review: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    location: 'New York, USA',
    rating: 5,
    review: 'Kikeroo made planning our group trip to Berlin so easy. Everyone could see the bookings and we coordinated everything in one place!',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    initials: 'MR',
    location: 'Milan, Italy',
    rating: 5,
    review: 'The best platform for traveling with friends. We booked hotels, concerts, and activities all together. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emma Müller',
    initials: 'EM',
    location: 'Berlin, Germany',
    rating: 4,
    review: 'Great selection of events and activities. Our group of 8 had an amazing time in Bolivia thanks to Kikeroo.',
  },
  {
    id: 4,
    name: 'James Chen',
    initials: 'JC',
    location: 'London, UK',
    rating: 5,
    review: 'Customer support was incredible when we needed to change our booking. The whole experience was seamless from start to finish.',
  },
]

export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/image 26.png', alt: 'Group travel adventure' },
  { id: 2, src: '/images/image 27.png', alt: 'Exploring Kanazawa' },
  { id: 3, src: '/images/image 28.png', alt: 'Adventure activities' },
  { id: 4, src: '/images/image 29.png', alt: 'Berlin exploration' },
  { id: 5, src: '/images/image 30.png', alt: 'Surabaya experience' },
  { id: 6, src: '/images/image 31.png', alt: 'La Paz discovery' },
  { id: 7, src: '/images/image 5.png', alt: 'Live events' },
  { id: 8, src: '/images/image 10.png', alt: 'Concert experience' },
]
