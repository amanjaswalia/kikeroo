import Image from 'next/image'

interface PlaceCardProps {
  image: string
  name: string
}

export default function PlaceCard({ image, name }: PlaceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer h-[320px]">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-lg font-bold">{name}</h3>
      </div>
    </div>
  )
}
