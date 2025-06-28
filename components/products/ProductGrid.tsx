"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Heart, Star, Grid, List } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { products, Product } from "@/lib/products"

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const { dispatch } = useCart()
  const { toast } = useToast()

  // ✅ Typed function
  const addToCart = (product: Product) => {
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

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return 0
      default:
        return 0
    }
  })

  return (
    <div>
      {/* Sort & View Controls */}
      <div className="flex items-center justify-between mb-6 fade-in">
        <div className="text-gray-600">{products.length} products found</div>

        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-violet-800 focus:border-violet-800"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>

          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-violet-800 text-white" : "text-gray-600"}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-violet-800 text-white" : "text-gray-600"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {sortedProducts.map((product, index) => (
          <div
            key={product.id}
            className={`group bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in stagger-${Math.min(index + 1, 6)} ${
              viewMode === "list" ? "flex" : ""
            }`}
          >
            <div className={`relative ${viewMode === "list" ? "w-48 h-48" : "h-64"} overflow-hidden`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
              </button>

              {product.originalPrice > product.price && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>

            <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-lg mb-2 text-gray-800 hover:text-violet-800 transition-colors">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                <span>{product.fabric}</span>
                <span className="text-gray-400">•</span>
                <span>{product.color}</span>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-violet-800">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>

              <div className={`${viewMode === "list" ? "flex space-x-2" : "space-y-2"}`}>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-violet-800 hover:bg-violet-900 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 bg-pink-200 hover:bg-pink-300 text-violet-800 py-2 px-4 rounded-lg font-medium transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
