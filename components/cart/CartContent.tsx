"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function CartContent() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16 fade-in">
        <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/products" className="btn-primary inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {state.items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-4 fade-in stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                  <span>{item.fabric}</span>
                  <span>•</span>
                  <span>{item.color}</span>
                </div>
                <div className="text-xl font-bold text-violet-800 mt-2">₹{item.price}</div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 fade-in stagger-2">
          <h3 className="font-playfair text-xl font-bold mb-6">Order Summary</h3>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal ({state.itemCount} items)</span>
              <span>₹{state.total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-violet-800">₹{state.total}</span>
              </div>
            </div>
          </div>

          <Link href="/checkout" className="w-full btn-primary text-center block mb-4">
            Proceed to Checkout
          </Link>

          <Link href="/products" className="w-full btn-secondary text-center block">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
