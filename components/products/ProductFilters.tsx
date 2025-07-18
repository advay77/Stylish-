"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"

const categories = [
  "All Categories",
  "Traditional",
  "Casual",
  "Party",
  "Accessories"
]
const types = [
  "All Types",
  "Saree",
  "Kurti",
  "Dress",
  "Dupatta",
  "Lehenga",
  "Blouse",
  "Suit",
  "Skirt",
  "Top",
  "Pant"
]
const colors = [
  "All Colors",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Pink",
  "Purple",
  "Black",
  "White",
  "Orange",
  "Brown",
  "Grey",
  "Beige",
  "Gold",
  "Silver",
  "Multicolor"
]
const priceRanges = ["All Prices", "Under ₹1000", "₹1000 - ₹2000", "₹2000 - ₹5000", "Above ₹5000"]

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor,
  selectedPrice,
  setSelectedPrice,
}: any) {
  const [isOpen, setIsOpen] = useState(false)

  const clearFilters = () => {
    setSelectedCategory("All Categories")
    setSelectedType("All Types")
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
              types={types}
              colors={colors}
              priceRanges={priceRanges}
              selectedCategory={selectedCategory}
              selectedType={selectedType}
              selectedColor={selectedColor}
              selectedPrice={selectedPrice}
              setSelectedCategory={setSelectedCategory}
              setSelectedType={setSelectedType}
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
          types={types}
          colors={colors}
          priceRanges={priceRanges}
          selectedCategory={selectedCategory}
          selectedType={selectedType}
          selectedColor={selectedColor}
          selectedPrice={selectedPrice}
          setSelectedCategory={setSelectedCategory}
          setSelectedType={setSelectedType}
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
  types,
  colors,
  priceRanges,
  selectedCategory,
  selectedType,
  selectedColor,
  selectedPrice,
  setSelectedCategory,
  setSelectedType,
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
      {/* Type Filter */}
      <div>
        <h4 className="font-semibold mb-3">Type</h4>
        <div className="space-y-2">
          {types.map((type: string) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={selectedType === type}
                onChange={() => setSelectedType(type)}
                className="text-violet-800 focus:ring-violet-800"
              />
              <span className="text-sm">{type}</span>
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
