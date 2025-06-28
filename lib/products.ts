export type Product = {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  fabric: string
  color: string
  rating: number
  reviews: number
  category: string
  description: string
};

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Royal Banarasi Silk",
    price: 4999,
    originalPrice: 6499,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Banarasi Silk",
    color: "Golden Yellow",
    rating: 4.9,
    reviews: 156,
    category: "Silk",
    description: "A luxurious Banarasi silk fabric with intricate golden patterns, perfect for weddings and special occasions.",
  },
  {
    id: "prod-2",
    name: "Premium Cotton Lawn",
    price: 899,
    originalPrice: 1199,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Cotton Lawn",
    color: "Sky Blue",
    rating: 4.8,
    reviews: 203,
    category: "Cotton",
    description: "Soft, breathable cotton lawn fabric in a refreshing sky blue shade, ideal for summer wear.",
  },
  {
    id: "prod-3",
    name: "Elegant Chanderi",
    price: 2299,
    originalPrice: 2999,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Chanderi",
    color: "Lavender",
    rating: 4.9,
    reviews: 89,
    category: "Chanderi",
    description: "Lightweight and sheer Chanderi fabric in a beautiful lavender hue, perfect for elegant sarees and suits.",
  },
  {
    id: "prod-4",
    name: "Floral Silk Dupatta",
    price: 2499,
    originalPrice: 3199,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Pure Silk",
    color: "Rose Pink",
    rating: 4.7,
    reviews: 124,
    category: "Silk",
    description: "A vibrant rose pink silk dupatta with floral motifs, adding grace to any ethnic outfit.",
  },
  {
    id: "prod-5",
    name: "Handwoven Cotton Saree",
    price: 1899,
    originalPrice: 2499,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Handloom Cotton",
    color: "Ivory White",
    rating: 4.8,
    reviews: 167,
    category: "Cotton",
    description: "Classic handwoven cotton saree in ivory white, known for its comfort and timeless appeal.",
  },
  {
    id: "prod-6",
    name: "Designer Georgette",
    price: 1599,
    originalPrice: 2099,
    image: "/placeholder.svg?height=300&width=250",
    fabric: "Georgette",
    color: "Deep Purple",
    rating: 4.6,
    reviews: 98,
    category: "Georgette",
    description: "Flowy georgette fabric in deep purple, perfect for party wear and evening gowns.",
  },
];
