"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactContent() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const whatsappNumber = "919876543210"
  const whatsappMessage = "Hi! I'd like to know more about your fabric collection."

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our fabrics? Need styling advice? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="font-playfair text-2xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-violet-800 focus:border-violet-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-violet-800 focus:border-violet-800"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-violet-800 focus:border-violet-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-violet-800 focus:border-violet-800"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-800 to-pink-600 hover:from-violet-900 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "hello@stylevsStyle.com",
                  description: "Send us an email anytime!",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 98765 43210",
                  description: "Mon-Sat, 9 AM - 7 PM",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Mumbai, Maharashtra",
                  description: "India",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Mon - Sat: 9 AM - 7 PM",
                  description: "Sunday: Closed",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-800 to-pink-600 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-violet-800 font-medium">{item.content}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Quick Chat on WhatsApp</h3>
                  <p className="text-sm text-gray-600">Get instant responses to your queries</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-violet-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of fabrics do you offer?",
                answer:
                  "We offer a wide range of premium fabrics including silk, cotton, linen, georgette, chiffon, and chanderi. Each fabric is carefully selected for quality and craftsmanship.",
              },
              {
                question: "Do you provide stitching services?",
                answer:
                  "While we specialize in fabric sales, we can recommend trusted tailors and provide stitching guidelines for our fabrics.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 7-day return policy for unused fabrics in original condition. Custom-cut fabrics cannot be returned.",
              },
              {
                question: "Do you ship across India?",
                answer:
                  "Yes, we ship across India with free shipping on orders above ₹1000. Delivery typically takes 3-7 business days.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
