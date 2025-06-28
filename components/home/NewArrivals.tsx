"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShoppingBag, Heart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"

const newArrivals = [
  {
    id: "new-1",
    name: "Floral Silk Dupatta",
    price: 2499,
    originalPrice: 3199,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Pure Silk",
    color: "Rose Pink",
    isNew: true,
  },
  {
    id: "new-2",
    name: "Handwoven Cotton Saree",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Handloom Cotton",
    color: "Ivory White",
    isNew: true,
  },
  {
    id: "new-3",
    name: "Designer Georgette",
    price: 1599,
    originalPrice: 2099,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Georgette",
    color: "Deep Purple",
    isNew: true,
  },
  {
    id: "new-4",
    name: "Embroidered Chiffon",
    price: 2199,
    originalPrice: 2899,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Chiffon",
    color: "Mint Green",
    isNew: true,
  },
]

export default function NewArrivals() {
  const { dispatch } = useCart()
  const { toast } = useToast()

  const addToCart = (product: (typeof newArrivals)[0]) => {
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
    <section className="py-20 bg-gradient-to-br from-pink-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">New Arrivals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh from our collection - the latest fabrics that are trending this season
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-500">{product.fabric}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{product.color}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-violet-800">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-violet-800 hover:bg-violet-900 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
