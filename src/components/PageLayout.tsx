'use client'

import Header from './Header'
import Footer from './Footer'
import SearchFilters from './SearchFilters'

interface PageLayoutProps {
  children: React.ReactNode
  showSearch?: boolean
  darkBg?: boolean
}

export default function PageLayout({ children, showSearch = false, darkBg = true }: PageLayoutProps) {
  return (
    <main className={darkBg ? 'min-h-screen bg-[#0d1b2a]' : 'min-h-screen'}>
      <div
        className="min-h-[400px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: 'url(/images/BG.png)', backgroundSize: 'cover' }}
      >
        <Header />
        {showSearch && <SearchFilters />}
      </div>
      {children}
      <Footer />
    </main>
  )
}
