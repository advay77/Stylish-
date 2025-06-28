import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import AboutContent from "@/components/about/AboutContent"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
