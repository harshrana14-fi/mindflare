// components/navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  Calendar,
  Users,
  Code,
  Github,
  Mail,
  ExternalLink,
  ChevronDown,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    {
      name: "About",
      href: "#about",
      icon: Info,
      dropdown: [
        { name: "Our Mission", href: "#mission" },
        { name: "Vision & Values", href: "#vision" },
        { name: "Faculty Coordinators", href: "#faculty" },
      ],
    },
    {
      name: "Events",
      href: "#events",
      icon: Calendar,
      dropdown: [
        { name: "Upcoming Events", href: "#upcoming" },
        { name: "Past Events", href: "#past" },
        { name: "Event Gallery", href: "#gallery" },
      ],
    },
    {
      name: "Team",
      href: "#team",
      icon: Users,
      dropdown: [
        { name: "Executive Committee", href: "#executive" },
        { name: "Core Team", href: "#core" },
        { name: "Alumni", href: "#alumni" },
      ],
    },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-blue-100">
                  <Image
                    src="/logo.jpg" // replace with actual path if different
                    alt="MindFlare Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    MindFlare
                  </h1>
                  <p className="text-sm text-gray-600 -mt-1">
                    Tech Society • MAIT
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() =>
                        item.dropdown && handleDropdownToggle(item.name)
                      }
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                    >
                      <IconComponent size={16} />
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.linkedin.com/company/mindflare2/"
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/mindflare_mait/?igsh=eDZ2emRqdWdtcjdi#"
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <Instagram size={18} />
                </a>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2">
                <span>Join Society</span>
                <ExternalLink size={14} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{item.name}</span>
                    </a>
                    {item.dropdown && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block p-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://github.com/mindflare-mait"
                      className="p-3 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-200"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:mindflare@mait.ac.in"
                      className="p-3 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-200"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200">
                    Join Society
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
}
