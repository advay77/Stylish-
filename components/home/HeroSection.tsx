"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-pink-50 to-violet-50"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 float" style={{ animationDelay: "0s" }}></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-violet-200 rounded-full opacity-60 float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gold-400 rounded-full opacity-60 float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6 slide-up stagger-1">
              <Sparkles className="w-6 h-6 text-gold-500 mr-2" />
              <span className="text-violet-800 font-medium">Premium Quality Fabrics</span>
            </div>

            <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 slide-up stagger-2">
              <span className="gradient-text">Kishori Collections</span>
              <br />
              <span className="text-gray-800">Fabric That Feels</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 slide-up stagger-3">
              Discover our exquisite collection of premium women's clothing materials. From luxurious silks to
              comfortable cottons, find the perfect fabric for your style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up stagger-4">
              <Link href="/products" className="btn-primary inline-flex items-center justify-center">
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Our Story
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 slide-up stagger-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-800">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-800">100+</div>
                <div className="text-sm text-gray-600">Fabric Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-800">5★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in stagger-2">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-float-y">
              <Image
                src="/Image1.png"
                alt="Premium fabric collection"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl scale-in stagger-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-800 to-pink-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-y {
          0% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
