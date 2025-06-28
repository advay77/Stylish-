import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import HeroSection from "@/components/home/HeroSection"
import TrendingCollections from "@/components/home/TrendingCollections"
import NewArrivals from "@/components/home/NewArrivals"
import Bestsellers from "@/components/home/Bestsellers"
import TestimonialsClient from "@/components/home/TestimonialsClient"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <HeroSection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TrendingCollections />
        <NewArrivals />
        <Bestsellers />
        <TestimonialsClient />
      </section>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
