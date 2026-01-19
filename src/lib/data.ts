export interface Hotel {
  id: number
  image: string
  country: string
  city: string
}

export interface Event {
  id: number
  image: string
  location: string
  title: string
  date: string
  type: string
}

export interface Activity {
  id: number
  image: string
  location: string
  title: string
  date: string
}

export interface Place {
  id: number
  image: string
  name: string
  country: string
}

export const hotels: Hotel[] = [
  { id: 1, image: '/images/tegal.png', country: 'Bolivia', city: 'Tegal' },
  { id: 2, image: '/images/sucre.png', country: 'Bolivia', city: 'La Paz' },
  { id: 3, image: '/images/la paz (1).png', country: 'Japan', city: 'Kanazawa' },
  { id: 4, image: '/images/Cochabamba.png', country: 'Bolivia', city: 'Cochabamba' },
  { id: 5, image: '/images/surabaya.png', country: 'Indonesia', city: 'Surabaya' },
]

export const events: Event[] = [
  { id: 1, image: '/images/image 5.png', location: 'Tegal, Bolivia', title: 'Rammstein', date: '2021-01-05', type: 'concert' },
  { id: 2, image: '/images/image 10.png', location: 'Kanazawa, Japan', title: 'Hans Zimmer Live', date: '2021-02-11', type: 'concert' },
  { id: 3, image: '/images/image 11.png', location: 'Berlin, Germany', title: 'Louis Tomlinson', date: '2021-02-10', type: 'concert' },
  { id: 4, image: '/images/image 12.png', location: 'Surabaya, Indonesia', title: 'Die Arzte', date: '2021-10-31', type: 'concert' },
  { id: 5, image: '/images/image 13.png', location: 'La Paz, Bolivia', title: 'Elton John', date: '2021-09-03', type: 'concert' },
]

export const activities: Activity[] = [
  { id: 1, image: '/images/image 28.png', location: 'Tegal, Bolivia', title: 'Parachute jump', date: '2021-01-05' },
  { id: 2, image: '/images/image 27.png', location: 'Kanazawa, Japan', title: 'Concert Hans Zimmer Live', date: '2021-02-11' },
  { id: 3, image: '/images/image 29.png', location: 'Berlin, Germany', title: 'Horse riding', date: '2021-02-10' },
  { id: 4, image: '/images/image 30.png', location: 'Surabaya, Indonesia', title: 'Flying in an air tube', date: '2021-10-31' },
  { id: 5, image: '/images/image 31.png', location: 'La Paz, Bolivia', title: 'Diving with dolphins', date: '2021-09-03' },
]

export const places: Place[] = [
  { id: 1, image: '/images/image 31.png', name: 'La Paz', country: 'Bolivia' },
  { id: 2, image: '/images/image 29.png', name: 'Berlin', country: 'Germany' },
  { id: 3, image: '/images/image 30.png', name: 'Surabaya', country: 'Indonesia' },
  { id: 4, image: '/images/image 28.png', name: 'Tegal', country: 'Bolivia' },
  { id: 5, image: '/images/image 27.png', name: 'Kanazawa', country: 'Japan' },
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
  'Tegal',
  'La Paz',
  'Kanazawa',
  'Cochabamba',
  'Surabaya',
] as const

export const filterOptions = {
  priceRange: ['$0-$100', '$100-$200', '$200-$500', '$500+'],
  rating: ['5 stars', '4+ stars', '3+ stars', 'Any'],
  amenities: ['WiFi', 'Pool', 'Gym', 'Parking', 'Restaurant'],
}
