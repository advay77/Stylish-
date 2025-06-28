"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/image.png"
              alt="Kishori Collections Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full bg-white object-contain"
              priority
            />
            <span className="font-playfair text-2xl font-bold gradient-text">Kishori Collections</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-violet-800 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-violet-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button className="p-2 text-gray-700 hover:text-violet-800 transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-violet-800 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-violet-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center scale-in">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* Authentication - Clerk components always available */}
            <SignedOut>
              <SignInButton>
                <button className="btn-primary text-sm px-4 py-2">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t border-gray-200 transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
