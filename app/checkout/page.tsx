import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CheckoutForm from "@/components/checkout/CheckoutForm"
import { SignInButton } from "@clerk/nextjs"

// Check if Clerk is available
const hasClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

async function getAuthStatus() {
  if (!hasClerkKeys) {
    return { userId: null, requiresAuth: false }
  }

  try {
    const { auth } = await import("@clerk/nextjs/server")
    const { userId } = await auth()
    return { userId, requiresAuth: true }
  } catch (error) {
    return { userId: null, requiresAuth: false }
  }
}

export default async function CheckoutPage() {
  const { userId, requiresAuth } = await getAuthStatus()

  if (requiresAuth && !userId) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16 fade-in">
            <h1 className="font-playfair text-4xl font-bold gradient-text mb-8">Sign In Required</h1>
            <p className="text-xl text-gray-600 mb-8">Please sign in to continue with checkout</p>
            <SignInButton mode="modal">
              <button className="btn-primary">Sign In to Continue</button>
            </SignInButton>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-playfair text-4xl font-bold gradient-text mb-8 fade-in">Checkout</h1>
        <CheckoutForm />
      </div>
      <Footer />
    </main>
  )
}
