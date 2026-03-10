import Image from 'next/image'

interface ActivityCardProps {
  image: string
  location: string
  title: string
  date: string
}

export default function ActivityCard({ image, location, title, date }: ActivityCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer h-[320px]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white/60 text-xs tracking-wide">{location}</p>
        <h3 className="text-white text-base font-bold mt-0.5 leading-tight">{title}</h3>
        <p className="text-kik-gold text-xs font-medium mt-1.5">{date}</p>
      </div>
    </div>
  )
}
