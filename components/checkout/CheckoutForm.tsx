"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, MapPin, User, Mail, Phone } from "lucide-react"
import { useUser } from "@clerk/nextjs"

export default function CheckoutForm() {
  const { state, dispatch } = useCart()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const { user } = useUser()
  const userData = user || null

  const [formData, setFormData] = useState({
    name: userData?.fullName || "",
    email: userData?.emailAddresses?.[0]?.emailAddress || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const generateUPILink = () => {
    const upiId = "stylevsStyle@upi" // Replace with actual UPI ID
    const amount = state.total
    const note = `Payment for Style vs Style order`

    return `upi://pay?pa=${upiId}&pn=Style vs Style&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`
  }

  const handlePlaceOrder = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      // Create order data
      const orderData = {
        items: state.items,
        total: state.total,
        customer: formData,
        timestamp: new Date().toISOString(),
        orderId: `SVS-${Date.now()}`,
      }

      // Store order in Firebase (you'll need to implement this)
      // await storeOrder(orderData)

      // Send email notification (you'll need to implement this)
      // await sendOrderNotification(orderData)

      // Open UPI payment
      const upiLink = generateUPILink()
      window.open(upiLink, "_blank")

      // Clear cart
      dispatch({ type: "CLEAR_CART" })

      toast({
        title: "Order Placed!",
        description: "Your order has been placed. Complete the payment to confirm.",
      })

      // You might want to redirect to an order confirmation page
      // router.push('/order-confirmation')
    } catch (error) {
      console.error("Error placing order:", error)
      toast({
        title: "Error",
        description: "There was an error placing your order. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Checkout Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 fade-in">
        <h2 className="font-playfair text-2xl font-bold mb-6">Delivery Information</h2>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
              required
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-violet-800 focus:border-violet-800"
              placeholder="Any special delivery instructions..."
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="space-y-6 fade-in stagger-2">
        {/* Items Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-playfair text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-3 mb-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                </div>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{state.total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span className="text-violet-800">₹{state.total}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-playfair text-xl font-bold mb-4">Payment Method</h3>

          <div className="border border-violet-200 rounded-lg p-4 bg-violet-50">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard className="w-5 h-5 text-violet-800" />
              <span className="font-medium">UPI Payment</span>
            </div>
            <p className="text-sm text-gray-600">
              You will be redirected to your UPI app to complete the payment securely.
            </p>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full mt-6 bg-gradient-to-r from-violet-800 to-pink-600 hover:from-violet-900 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Processing..." : `Place Order - ₹${state.total}`}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            By placing this order, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  )
}
