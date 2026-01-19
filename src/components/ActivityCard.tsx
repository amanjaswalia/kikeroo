import Image from 'next/image'

interface ActivityCardProps {
  image: string
  location: string
  title: string
  date: string
}

export default function ActivityCard({ image, location, title, date }: ActivityCardProps) {
  return (
    <div className="relative w-full md:w-[20%] flex-shrink-0">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="w-full h-auto object-cover rounded"
      />
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-5 text-white">
        <p className="text-xs text-gray-300">{location}</p>
        <h3 className="text-sm md:text-xl font-bold">{title}</h3>
        <span className="text-xs md:text-sm">{date}</span>
      </div>
    </div>
  )
}
