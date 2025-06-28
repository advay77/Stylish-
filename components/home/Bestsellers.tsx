"use client"

import Image from "next/image"
import { Crown, ShoppingBag, Star } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"

const bestsellers = [
  {
    id: "best-1",
    name: "Royal Banarasi Silk",
    price: 4999,
    image: "/placeholder.svg?height=350&width=280",
    fabric: "Banarasi Silk",
    color: "Golden Yellow",
    rating: 4.9,
    reviews: 156,
    badge: "Bestseller",
  },
  {
    id: "best-2",
    name: "Premium Cotton Lawn",
    price: 899,
    image: "/placeholder.svg?height=350&width=280",
    fabric: "Cotton Lawn",
    color: "Sky Blue",
    rating: 4.8,
    reviews: 203,
    badge: "Most Loved",
  },
  {
    id: "best-3",
    name: "Elegant Chanderi",
    price: 2299,
    image: "/placeholder.svg?height=350&width=280",
    fabric: "Chanderi",
    color: "Lavender",
    rating: 4.9,
    reviews: 89,
    badge: "Premium Choice",
  },
]

export default function Bestsellers() {
  const { dispatch } = useCart()
  const { toast } = useToast()

  const addToCart = (product: (typeof bestsellers)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        fabric: product.fabric,
        color: product.color,
      },
    })

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-8 h-8 text-gold-500 mr-3" />
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Bestsellers</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our customers' favorite picks - these fabrics have won hearts across the country
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-3xl shadow-xl overflow-hidden card-hover border border-violet-100 fade-in stagger-${index + 1}`}
            >
              <div className="relative">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    {product.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2 text-gray-800">{product.name}</h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-600">{product.fabric}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{product.color}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-gold-500 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-violet-800">₹{product.price}</span>
                    <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                      Free Shipping
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-violet-800 to-pink-600 hover:from-violet-900 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
