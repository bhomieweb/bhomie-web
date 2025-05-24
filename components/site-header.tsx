"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold text-maroon-700 hover:text-maroon-800 transition-colors">
            Bhomie
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-maroon-700 transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/rental-guarantee"
            className="text-sm font-medium hover:text-maroon-700 transition-colors relative group"
          >
            Rental Guarantee
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/property-management"
            className="text-sm font-medium hover:text-maroon-700 transition-colors relative group"
          >
            Property Management
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/tenant-placement"
            className="text-sm font-medium hover:text-maroon-700 transition-colors relative group"
          >
            Tenant Placement
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-maroon-700 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-700 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                href="/"
                className="py-3 px-4 text-sm font-medium hover:text-maroon-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rental-guarantee"
                className="py-3 px-4 text-sm font-medium hover:text-maroon-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rental Guarantee
              </Link>
              <Link
                href="/property-management"
                className="py-3 px-4 text-sm font-medium hover:text-maroon-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Property Management
              </Link>
              <Link
                href="/tenant-placement"
                className="py-3 px-4 text-sm font-medium hover:text-maroon-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tenant Placement
              </Link>
              <Link
                href="#contact"
                className="py-3 px-4 text-sm font-medium hover:text-maroon-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white shadow-lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}

        <Button className="hidden md:inline-flex bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
          Get Started
        </Button>
      </div>
    </header>
  )
}
