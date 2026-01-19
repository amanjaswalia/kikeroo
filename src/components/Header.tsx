'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-center justify-between md:justify-around pt-6 md:pt-8 px-4 md:px-0 text-white">
        <Link href="/" className="logo z-10">
          <Image
            src="/images/logo 1 (1).png"
            alt="Kikeroo Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-xl -ml-20 lg:-ml-36">
          <Link href="/" className="font-semibold hover:text-kik-gold transition">Search</Link>
          <Link href="/about" className="hover:text-kik-gold transition">About us</Link>
          <Link href="/support" className="hover:text-kik-gold transition">Support</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-5 text-base lg:text-xl pt-1">
          <Link href="/signup" className="hover:text-kik-gold transition">Sign up</Link>
          <Link href="/login" className="hover:text-kik-gold transition">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-10 text-white p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-kik-dark z-[5] pt-20 pb-6 px-4 md:hidden">
          <nav className="flex flex-col gap-4 text-white">
            <Link
              href="/"
              className="font-semibold hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/hotels"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link
              href="/events"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/activities"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Activities
            </Link>
            <Link
              href="/places"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Places
            </Link>
            <Link
              href="/about"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/support"
              className="hover:text-kik-gold transition py-2 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
            <div className="flex gap-4 pt-4">
              <Link
                href="/signup"
                className="flex-1 bg-kik-gold text-black font-semibold py-2 rounded text-center hover:bg-opacity-80 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="flex-1 border border-white text-white font-semibold py-2 rounded text-center hover:bg-white hover:text-black transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
