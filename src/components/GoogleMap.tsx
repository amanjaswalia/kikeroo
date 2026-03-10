'use client';

interface GoogleMapProps {
  query?: string;
  className?: string;
}

export default function GoogleMap({
  query = 'Berlin, Germany',
  className = '',
}: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div
        className={`bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 ${className}`}
        style={{ minHeight: '300px' }}
      >
        <p className="text-slate-500 dark:text-white/40 text-sm">
          Map unavailable - API key not configured
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 ${className}`}
    >
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(query)}`}
        title="Google Maps"
      />
    </div>
  );
}
