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
