import { Link } from '@/i18n/navigation';
import { FiArrowRight } from 'react-icons/fi';

interface SectionHeaderProps {
  sectionTitle: string;
  title: string;
  link?: string;
}

export default function SectionHeader({
  sectionTitle,
  title,
  link,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between pt-10 pb-2">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-kik-gold rounded-full" />
        <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
          {sectionTitle}
        </h2>
      </div>
      {link ? (
        <Link
          href={link}
          className="group flex items-center gap-1.5 text-white/60 text-sm font-medium hover:text-kik-gold transition-colors"
        >
          {title}
          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <button className="group flex items-center gap-1.5 text-white/60 text-sm font-medium hover:text-kik-gold transition-colors">
          {title}
          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      )}
    </div>
  );
}
