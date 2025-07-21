// components/Navbar.tsx
import Image from 'next/image'
import Link from 'next/link'
import zobelab from "@/assets/ZobeLab.png"
export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-purple-600">
        <Image src={zobelab} alt='logo'></Image>
        ZOBELAB
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-purple-600 transition">Services</Link>
          <Link href="/academy" className="text-gray-700 hover:text-purple-600 transition">Academy</Link>
          <Link href="#waitlist" className="text-gray-700 hover:text-purple-600 transition">Waitlist</Link>
        </div>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}