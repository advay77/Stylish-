import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/image.png" alt="Kishori Collections Logo" width={32} height={32} className="w-8 h-8 rounded-full bg-white object-contain" />
              <span className="font-playfair text-2xl font-bold">Kishori Collections</span>
            </div>
            <p className="text-violet-200">Premium women's clothing materials from Kishori Collections that speak style and comfort.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-violet-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-violet-200 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-violet-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-violet-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-violet-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=cotton" className="text-violet-200 hover:text-white transition-colors">
                  Cotton Fabrics
                </Link>
              </li>
              <li>
                <Link href="/products?category=silk" className="text-violet-200 hover:text-white transition-colors">
                  Silk Materials
                </Link>
              </li>
              <li>
                <Link href="/products?category=linen" className="text-violet-200 hover:text-white transition-colors">
                  Linen Collection
                </Link>
              </li>
              <li>
                <Link href="/products?category=designer" className="text-violet-200 hover:text-white transition-colors">
                  Designer Fabrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-violet-200" />
                <span className="text-violet-200">srivastavaanjali513@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-violet-200" />
                <span className="text-violet-200">+91 6386771480</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-violet-200" />
                <span className="text-violet-200">Prayagraj, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-800 mt-8 pt-8 text-center">
          <p className="text-violet-200">© 2025 Kishori Collections. All rights reserved. Made with ❤️ for fashion lovers.</p>
        </div>
      </div>
    </footer>
  )
}
