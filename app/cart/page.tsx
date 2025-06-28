import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import CartContent from "@/components/cart/CartContent"

export default function CartPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-playfair text-4xl font-bold gradient-text mb-8 fade-in">Shopping Cart</h1>
        <CartContent />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
