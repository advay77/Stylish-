"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const whatsappNumber = "+91 6386771480" // Replace with actual number
  const message = "Hi! I'm interested in your fabric collection."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 active:scale-95 float"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
