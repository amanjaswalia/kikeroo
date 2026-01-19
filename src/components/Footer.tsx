import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-kik-blue text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
        {/* Support Column */}
        <div className="text-center md:text-left">
          <h4 className="text-base md:text-xl font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-sm md:text-base">
            <li><Link href="/support" className="hover:text-kik-gold transition">Help Center</Link></li>
            <li><Link href="/careers" className="hover:text-kik-gold transition">Careers</Link></li>
            <li><Link href="/terms" className="hover:text-kik-gold transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-kik-gold transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Information Column */}
        <div className="text-center md:text-left">
          <h4 className="text-base md:text-xl font-semibold mb-4">Information</h4>
          <ul className="space-y-3 text-sm md:text-base">
            <li><Link href="/about" className="hover:text-kik-gold transition">About us</Link></li>
            <li><Link href="/hotels" className="hover:text-kik-gold transition">Hotels</Link></li>
            <li><Link href="/events" className="hover:text-kik-gold transition">Events</Link></li>
            <li><Link href="/activities" className="hover:text-kik-gold transition">Activities</Link></li>
            <li><Link href="/places" className="hover:text-kik-gold transition">Places</Link></li>
          </ul>
        </div>

        {/* Social Networks Column */}
        <div className="text-center md:text-left">
          <h4 className="text-base md:text-xl font-semibold mb-4">Social Networks</h4>
          <ul className="space-y-3 text-sm md:text-base">
            <li><Link href="#" className="hover:text-kik-gold transition">Facebook</Link></li>
            <li><Link href="#" className="hover:text-kik-gold transition">LinkedIn</Link></li>
            <li><Link href="#" className="hover:text-kik-gold transition">Instagram</Link></li>
            <li><Link href="#" className="hover:text-kik-gold transition">Twitter</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/Logo new 1.png"
              alt="Kikeroo Logo"
              width={100}
              height={50}
              className="h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Slogan */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-kik-gold text-lg md:text-xl font-semibold italic">
          &quot;Travel Together, Create Memories Forever&quot;
        </p>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Kikeroo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-kik-gold transition">Terms</Link>
            <Link href="/privacy" className="hover:text-kik-gold transition">Privacy</Link>
            <Link href="/support" className="hover:text-kik-gold transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
