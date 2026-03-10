'use client';

import Header from './Header';
import Footer from './Footer';
import SearchFilters from './SearchFilters';

interface PageLayoutProps {
  children: React.ReactNode;
  showSearch?: boolean;
}

export default function PageLayout({
  children,
  showSearch = false,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-kik-darker">
      <div
        className="min-h-[400px] bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: 'url(/images/BG.png)',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-kik-darker/30 to-kik-darker" />
        <div className="relative">
          <Header />
          {showSearch && <SearchFilters />}
          <div className="h-12" />
        </div>
      </div>
      {children}
      <Footer />
    </main>
  );
}
