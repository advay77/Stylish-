"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Silk Elegance",
    description: "Luxurious silk fabrics for special occasions",
    image: "/placeholder.svg?height=400&width=300",
    itemCount: 25,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Cotton Comfort",
    description: "Soft and breathable cotton materials",
    image: "/placeholder.svg?height=400&width=300",
    itemCount: 40,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Designer Prints",
    description: "Unique patterns and contemporary designs",
    image: "/placeholder.svg?height=400&width=300",
    itemCount: 30,
    rating: 4.9,
  },
]

export default function TrendingCollections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Trending Collections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular fabric collections, carefully curated for the modern woman
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={collection.id} className={`group cursor-pointer fade-in stagger-${index + 1}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg card-hover">
                <div className="relative h-80">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gold-500 fill-current" />
                    <span className="text-sm font-medium">{collection.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-white/90 mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">{collection.itemCount} items</span>
                    <Link
                      href={`/products?collection=${collection.id}`}
                      className="inline-flex items-center text-white hover:text-gold-400 transition-colors"
                    >
                      Explore
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in stagger-4">
          <Link href="/products" className="btn-primary inline-flex items-center">
            View All Collections
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
