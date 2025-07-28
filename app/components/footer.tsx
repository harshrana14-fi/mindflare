// components/Footer.tsx
'use client';

import { Mail, ExternalLink, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl top-[-50px] left-[-80px] animate-pulse" />
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl bottom-[-50px] right-[-80px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-extrabold text-lg tracking-wide">MF</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  MindFlare
                </h3>
                <p className="text-gray-400 text-sm">Technology Society • MAIT</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              The official technology society of MAIT&apos;s IT Department, dedicated to fostering
              innovation, technical excellence, and collaborative learning among students.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/mindflare2/"
                target="_blank"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                aria-label="Send Email"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/mindflare_mait/?igsh=eDZ2emRqdWdtcjdi#"
                target="_blank"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                aria-label="External Link"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Events", "Our Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    className="text-gray-400 hover:text-white transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Membership Form",
                "Event Calendar",
                "Project Guidelines",
                "Code of Conduct",
                "Alumni Network",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 MindFlare Technology Society, MAIT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
