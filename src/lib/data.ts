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
