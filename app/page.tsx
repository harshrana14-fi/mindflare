// app/page.tsx

import React from 'react';
import { 
  Code, 
  Users, 
  Trophy, 
  Calendar, 
  ArrowRight, 
  Target, 
  Lightbulb, 
  BookOpen,
  Award,
  MapPin,
  Clock,
  ExternalLink,
  Play,
  Download,
  Mail,
  Phone,
  Building
} from 'lucide-react';
import Navbar from '@/app/components/navbar';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Official Technology Society - MAIT
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-blue-600">MindFlare</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The premier technology society of Maharaja Agrasen Institute of Technology&apos;s 
                IT Department. We foster innovation, technical excellence, and collaborative 
                learning among aspiring technologists.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center">
                  Become a Member
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2" size={18} />
                  Watch Introduction
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Annual Events</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Code className="mx-auto mb-2" size={32} />
                    <div className="text-sm">Development</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Users className="mx-auto mb-2" size={32} />
                    <div className="text-sm">Community</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Trophy className="mx-auto mb-2" size={32} />
                    <div className="text-sm">Competitions</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <BookOpen className="mx-auto mb-2" size={32} />
                    <div className="text-sm">Learning</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Empowering Future Technologists</h3>
                  <p className="text-blue-100 text-sm">Building tomorrow&apos;s technology leaders today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About MindFlare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established as the official technology society of MAIT&apos;s IT Department, 
              MindFlare serves as a hub for innovation, learning, and technological advancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <Target className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To cultivate a vibrant ecosystem where students explore cutting-edge technologies, 
                develop practical skills, and create innovative solutions for real-world challenges.
              </p>
            </div>
            
            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <Lightbulb className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology community that bridges academic learning with industry 
                requirements, producing future-ready technology professionals and entrepreneurs.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <Users className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Community</h3>
              <p className="text-gray-600">
                A diverse network of passionate students, faculty mentors, and industry experts 
                working together to push the boundaries of technological innovation.
              </p>
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Faculty Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  Dr. A
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Dr. [Faculty Name]</h4>
                <p className="text-blue-600 mb-2">Professor, IT Department</p>
                <p className="text-gray-600 text-sm">Ph.D. in Computer Science • 15+ years experience</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  Dr. B
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Dr. [Faculty Name]</h4>
                <p className="text-indigo-600 mb-2">Associate Professor, IT Department</p>
                <p className="text-gray-600 text-sm">Ph.D. in Information Technology • 12+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Flagship Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Annual competitions and workshops that challenge students and promote 
              technical excellence across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* DSAXtreme Battle */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Event Image */}
              <div className="h-64 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white">
                <div className="text-center">
                  <Code size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">DSAXtreme Battle</h3>
                  <p className="text-red-100">Competitive Programming Championship</p>
                </div>
              </div>
              
              {/* Event Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Annual Competition
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    March 2024
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  The Ultimate Algorithmic Challenge
                </h4>
                
                <p className="text-gray-600 mb-6">
                  A prestigious programming competition where the brightest minds compete to solve 
                  complex algorithmic problems. Participants showcase their problem-solving skills, 
                  coding proficiency, and analytical thinking under time pressure.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Data Structures
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Algorithms
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Problem Solving
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users size={16} className="mr-1" />
                    200+ Participants
                  </div>
                  <button className="text-red-600 font-semibold hover:text-red-700 flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Build Wars */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Event Image */}
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                <div className="text-center">
                  <Trophy size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Build Wars</h3>
                  <p className="text-blue-100">48-Hour Development Hackathon</p>
                </div>
              </div>
              
              {/* Event Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Annual Hackathon
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    October 2024
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation Meets Implementation
                </h4>
                
                <p className="text-gray-600 mb-6">
                  An intensive 48-hour hackathon where teams compete to build innovative applications 
                  from scratch. From ideation to deployment, participants experience the complete 
                  software development lifecycle while working on real-world problems.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Web Development
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Mobile Apps
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    AI/ML
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users size={16} className="mr-1" />
                    50+ Teams
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Recognition and accomplishments that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 rounded-2xl p-6">
              <Award className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Best Tech Society</h3>
              <p className="text-gray-600">MAIT Excellence Awards 2023</p>
            </div>
            
            <div className="text-center bg-green-50 rounded-2xl p-6">
              <Trophy className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+ Competitions</h3>
              <p className="text-gray-600">Successfully organized events</p>
            </div>
            
            <div className="text-center bg-purple-50 rounded-2xl p-6">
              <Users className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+ Students</h3>
              <p className="text-gray-600">Impacted through our programs</p>
            </div>
            
            <div className="text-center bg-orange-50 rounded-2xl p-6">
              <Code className="mx-auto mb-4 text-orange-600" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+ Projects</h3>
              <p className="text-gray-600">Student projects showcased</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about MindFlare or want to join our community? 
                We&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-300">+91 xxxxxxxxxx</p>
                    <p className="text-gray-300">+91 xxxxxxxxxx</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Membership Application</option>
                    <option>Event Information</option>
                    <option>Collaboration Proposal</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
