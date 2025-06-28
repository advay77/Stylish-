import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { CartProvider } from "@/contexts/CartContext"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Style vs Style - Premium Women's Clothing Materials",
  description: "Style That Speaks, Fabric That Feels - Discover premium women's clothing materials and fabrics",
  keywords: "women clothing, fabric, materials, fashion, style",
}

// Remove runtime check for Clerk keys; always wrap with ClerkProvider
function AuthProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-gradient-to-br from-violet-50 to-pink-50 min-h-screen">
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
