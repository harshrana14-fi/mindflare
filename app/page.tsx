// app/page.tsx 

import React from 'react';
import { Code, Users, Trophy, Mail, ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import Navbar from '@/app/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-pulse">
              MindFlare
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Tech Society | MAIT IT Department
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Igniting innovation, fostering collaboration, and building the future of technology. 
            Join us in our journey to explore cutting-edge technologies and create impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join MindFlare <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              View Events
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:scale-105 transition-transform duration-300">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600 font-medium">Active Members</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:scale-105 transition-transform duration-300">
              <Trophy className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2</h3>
              <p className="text-gray-600 font-medium">Major Events</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 hover:scale-105 transition-transform duration-300">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Projects Built</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 hover:scale-105 transition-transform duration-300">
              <Rocket className="mx-auto mb-4 text-orange-600" size={48} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Innovation Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MindFlare</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MindFlare is the premier technology society of MAIT&apos;s IT Department, dedicated to fostering 
              innovation, technical excellence, and collaborative learning among students passionate about technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-2xl transition-all duration-300 border border-blue-200">
              <Target className="mb-6 text-blue-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a vibrant ecosystem where students can explore, learn, and innovate with cutting-edge 
                technologies while building solutions that make a real-world impact.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <Zap className="mb-6 text-purple-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading tech community that bridges the gap between academic learning and industry 
                requirements, producing future-ready technology leaders.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-teal-100 hover:shadow-2xl transition-all duration-300 border border-green-200">
              <Users className="mb-6 text-green-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Community</h3>
              <p className="text-gray-600 leading-relaxed">
                A diverse community of passionate developers, designers, and innovators working together 
                to push the boundaries of what&apos;s possible in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Challenging competitions and workshops that push the boundaries of technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DSAXtreme Battle */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100 p-8 hover:scale-[1.02] transition-all duration-500 border border-orange-200 shadow-lg hover:shadow-2xl">
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mr-4">
                  <Code className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">DSAXtreme Battle</h3>
                  <p className="text-orange-600 font-semibold">Competitive Programming</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                An intense algorithmic programming competition where the best minds compete to solve complex 
                data structures and algorithms challenges. Test your problem-solving skills and coding prowess 
                in this high-energy battle of logic and speed.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">Algorithms</span>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Problem Solving</span>
                <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Competition</span>
              </div>
              <button className="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Build Wars */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-8 hover:scale-[1.02] transition-all duration-500 border border-blue-200 shadow-lg hover:shadow-2xl">
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4">
                  <Rocket className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Build Wars</h3>
                  <p className="text-blue-600 font-semibold">Development Hackathon</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A thrilling 48-hour hackathon where teams race against time to build innovative solutions. 
                From web applications to mobile apps, AI projects to IoT solutions - creativity meets 
                technical execution in this ultimate development showdown.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Hackathon</span>
                <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium">Innovation</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Team Work</span>
              </div>
              <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ignite Your Tech Journey?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join MindFlare and be part of a community that&apos;s shaping the future of technology. 
            Whether you&apos;re a beginner or an expert, there&apos;s a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Community
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}