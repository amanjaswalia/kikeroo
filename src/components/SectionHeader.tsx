import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  link?: string
}

export default function SectionHeader({ title, link }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center w-[90%] md:w-[80%] mx-auto pt-12">
      <h2 className="text-white text-xl md:text-2xl font-semibold">{title}</h2>
      {link ? (
        <Link
          href={link}
          className="text-white text-base md:text-xl hover:text-kik-gold transition"
        >
          See all
        </Link>
      ) : (
        <button className="text-white text-base md:text-xl hover:text-kik-gold transition">
          See all
        </button>
      )}
    </div>
  )
}
