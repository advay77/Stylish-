"use client"

import Image from "next/image"
import { Heart, Award, Truck } from "lucide-react"

export default function AboutContent() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16 fade-in">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a mother's passion for quality fabrics to a brand that celebrates the essence of feminine elegance and
            comfort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in stagger-1">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Founder working with fabrics"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 fade-in stagger-2">
            <h2 className="font-playfair text-3xl font-bold text-gray-800">A Mother's Vision, A Brand's Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Style vs Style was born from a simple yet powerful vision - to bring premium quality fabrics directly to
              women who appreciate the finer things in life. What started as a mother's quest to find the perfect
              materials for her family has blossomed into a trusted brand serving hundreds of satisfied customers across
              India.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our founder, a passionate advocate for quality and craftsmanship, personally curates each fabric in our
              collection. From the bustling textile markets of Gujarat to the silk weaving centers of Karnataka, every
              piece tells a story of tradition, quality, and care.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Made with Love</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-gold-500" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-violet-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              <span className="gradient-text">Our Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "Every fabric is handpicked and quality-tested to ensure it meets our high standards.",
              },
              {
                icon: Heart,
                title: "Customer Love",
                description: "We treat every customer like family, providing personalized service and care.",
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                description: "Fast, secure shipping with careful packaging to protect your precious fabrics.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className={`bg-white rounded-2xl p-8 shadow-lg text-center card-hover fade-in stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-800 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 fade-in">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Happy Customers" },
                { number: "1000+", label: "Orders Delivered" },
                { number: "100+", label: "Fabric Varieties" },
                { number: "4.9★", label: "Customer Rating" },
              ].map((stat, index) => (
                <div key={stat.label} className={`scale-in stagger-${index + 1}`}>
                  <div className="text-4xl font-bold text-violet-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-violet-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="font-playfair text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-violet-200 max-w-4xl mx-auto leading-relaxed">
            To empower women with access to premium quality fabrics that inspire creativity, celebrate individuality,
            and honor the timeless art of textile craftsmanship. We believe that every woman deserves fabrics that not
            only look beautiful but feel extraordinary against her skin.
          </p>
        </div>
      </section>
    </div>
  )
}
