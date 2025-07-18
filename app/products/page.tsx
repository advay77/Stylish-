"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import ProductFilters from "@/components/products/ProductFilters"
import ProductGrid from "@/components/products/ProductGrid"
import { useState } from "react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedColor, setSelectedColor] = useState("All Colors")
  const [selectedPrice, setSelectedPrice] = useState("All Prices")

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 fade-in">
          <h1 className="font-playfair text-4xl font-bold gradient-text mb-4">Our Collection</h1>
          <p className="text-xl text-gray-600">Discover premium fabrics for every occasion</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid
              selectedCategory={selectedCategory}
              selectedType={selectedType}
              selectedColor={selectedColor}
              selectedPrice={selectedPrice}
            />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
