import Image from 'next/image'

interface PlaceCardProps {
  image: string
  name: string
}

export default function PlaceCard({ image, name }: PlaceCardProps) {
  return (
    <div className="relative w-full md:w-[20%] flex-shrink-0">
      <Image
        src={image}
        alt={name}
        width={300}
        height={400}
        className="w-full h-auto object-cover rounded"
      />
      <div className="absolute bottom-8 md:bottom-10 left-4 md:left-5 text-white">
        <h3 className="text-base md:text-xl font-bold">{name}</h3>
      </div>
    </div>
  )
}
