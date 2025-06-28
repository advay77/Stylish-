"use client"
import dynamic from "next/dynamic"

const Testimonials = dynamic(() => import("./Testimonials"), {
  loading: () => <div className="text-center py-8">Loading testimonials...</div>,
})

export default function TestimonialsClient() {
  return <Testimonials />
}
