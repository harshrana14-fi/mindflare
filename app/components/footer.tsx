import {Mail, ExternalLink } from 'lucide-react';

      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MF</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">MindFlare</h3>
                  <p className="text-gray-400 text-sm">Technology Society • MAIT</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The official technology society of MAIT&apos;s IT Department, dedicated to fostering 
                innovation, technical excellence, and collaborative learning among students.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <Mail size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-200">Our Team</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Membership Form</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Event Calendar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Project Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Code of Conduct</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Alumni Network</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 MindFlare Technology Society, MAIT. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>


