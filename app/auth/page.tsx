import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AuthFallback from "@/components/auth/AuthFallback"

export default function AuthPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AuthFallback />
      <Footer />
    </main>
  )
}
