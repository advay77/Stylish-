import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import HeroSection from "@/components/home/HeroSection"
import TrendingCollections from "@/components/home/TrendingCollections"
import NewArrivals from "@/components/home/NewArrivals"
import Bestsellers from "@/components/home/Bestsellers"
import Testimonials from "@/components/home/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrendingCollections />
      <NewArrivals />
      <Bestsellers />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
