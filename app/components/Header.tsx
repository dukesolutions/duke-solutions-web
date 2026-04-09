'use client'

import Link from 'next/link'
import { useState } from 'react'
import { companyData } from '../data'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            {companyData.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link href="/gallery" className="hover:text-gray-300 transition">Gallery</Link>
          </nav>

          {/* Contact Button */}
          <a href={`tel:${companyData.phone}`} className="hidden md:block btn-primary">
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link href="/gallery" className="hover:text-gray-300 transition">Gallery</Link>
            <a href={`tel:${companyData.phone}`} className="btn-primary text-center">
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
