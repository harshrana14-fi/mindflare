"use client";

import { Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-4">
            Get in Touch with MindFlare
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you want to collaborate, participate, or simply know more — we’re here to connect.
            Whether you&apos;re curious about events, want to join, or just say hi — we’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-500 mt-1" size={26} />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-400">+91 9876543210</p>
                <p className="text-gray-400">+91 9123456789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-blue-500 mt-1" size={26} />
              <div>
                <h3 className="text-xl font-semibold">Office Hours</h3>
                <p className="text-gray-400">Monday - Friday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>General Inquiry</option>
                  <option>Join MindFlare</option>
                  <option>Event Collaboration</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg font-semibold text-lg flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
