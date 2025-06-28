"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The quality of fabrics is exceptional! I've ordered multiple times and each piece exceeds my expectations. The silk collection is absolutely divine.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Anita Desai",
    location: "Delhi",
    rating: 5,
    text: "Style vs Style has become my go-to for premium fabrics. The cotton materials are so soft and the colors are vibrant. Highly recommended!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Bangalore",
    rating: 5,
    text: "Amazing collection and excellent customer service. The delivery was quick and the packaging was beautiful. Will definitely order again!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real customers who love our fabric collection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover relative fade-in stagger-${index + 1}`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-violet-200" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in stagger-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold mb-4 gradient-text">Join 500+ Happy Customers</h3>
            <p className="text-gray-600 mb-6">
              Experience the quality and elegance that has made us the preferred choice for premium fabrics
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-800">4.9</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-800">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-800">1000+</div>
                <div className="text-sm text-gray-600">Orders Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
