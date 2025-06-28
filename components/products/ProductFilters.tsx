"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"

const categories = ["All Categories", "Silk", "Cotton", "Linen", "Georgette", "Chiffon", "Chanderi"]
const colors = ["All Colors", "Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Black", "White"]
const priceRanges = ["All Prices", "Under ₹1000", "₹1000 - ₹2000", "₹2000 - ₹5000", "Above ₹5000"]

export default function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedColor, setSelectedColor] = useState("All Colors")
  const [selectedPrice, setSelectedPrice] = useState("All Prices")
  const [isOpen, setIsOpen] = useState(false)

  const clearFilters = () => {
    setSelectedCategory("All Categories")
    setSelectedColor("All Colors")
    setSelectedPrice("All Prices")
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-violet-800 text-white px-4 py-2 rounded-lg"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
          <div
            className={`bg-white h-full w-80 p-6 overflow-y-auto transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-xl font-bold">Filters</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterContent
              categories={categories}
              colors={colors}
              priceRanges={priceRanges}
              selectedCategory={selectedCategory}
              selectedColor={selectedColor}
              selectedPrice={selectedPrice}
              setSelectedCategory={setSelectedCategory}
              setSelectedColor={setSelectedColor}
              setSelectedPrice={setSelectedPrice}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6 fade-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-playfair text-xl font-bold">Filters</h3>
          <button onClick={clearFilters} className="text-sm text-violet-800 hover:text-violet-900">
            Clear All
          </button>
        </div>
        <FilterContent
          categories={categories}
          colors={colors}
          priceRanges={priceRanges}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          selectedPrice={selectedPrice}
          setSelectedCategory={setSelectedCategory}
          setSelectedColor={setSelectedColor}
          setSelectedPrice={setSelectedPrice}
          clearFilters={clearFilters}
        />
      </div>
    </>
  )
}

function FilterContent({
  categories,
  colors,
  priceRanges,
  selectedCategory,
  selectedColor,
  selectedPrice,
  setSelectedCategory,
  setSelectedColor,
  setSelectedPrice,
  clearFilters,
}: any) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h4 className="font-semibold mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category: string) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="text-violet-800 focus:ring-violet-800"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h4 className="font-semibold mb-3">Color</h4>
        <div className="space-y-2">
          {colors.map((color: string) => (
            <label key={color} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="color"
                checked={selectedColor === color}
                onChange={() => setSelectedColor(color)}
                className="text-violet-800 focus:ring-violet-800"
              />
              <span className="text-sm">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-semibold mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range: string) => (
            <label key={range} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === range}
                onChange={() => setSelectedPrice(range)}
                className="text-violet-800 focus:ring-violet-800"
              />
              <span className="text-sm">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
