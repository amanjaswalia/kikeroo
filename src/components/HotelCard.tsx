import Image from 'next/image'

interface HotelCardProps {
  image: string
  country: string
  city: string
}

export default function HotelCard({ image, country, city }: HotelCardProps) {
  return (
    <div className="relative w-full md:w-[20%] flex-shrink-0">
      <Image
        src={image}
        alt={city}
        width={300}
        height={400}
        className="w-full h-auto object-cover brightness-[0.7] rounded"
      />
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8 text-white">
        <p className="text-sm md:text-base font-semibold">{country}</p>
        <h3 className="text-lg md:text-xl font-bold">{city}</h3>
      </div>
    </div>
  )
}
