// navbar.tsx

"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Zap,
  Calendar,
  Users,
  Code,
  Github,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: Users },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Team", href: "#team", icon: Users },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative transition-all duration-300 ${
              scrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg border border-white/20"
                : "bg-white/70 backdrop-blur-sm border border-white/30"
            } rounded-2xl px-6 py-4`}
          >
            {/* Floating orbs animation */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping"></div>

            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-md overflow-hidden">
                    <Image
                      src="/logo.jpg"
                      alt="MindFlare Logo"
                      width={48}
                      height={48}
                      className="object-cover select-none"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MindFlare
                  </h1>
                  <p className="text-xs text-gray-600 font-medium -mt-1">
                    MAIT Tech Society
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                    >
                      <IconComponent
                        size={16}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="font-medium">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </a>
                  );
                })}
              </div>

              {/* CTA Button & Social Links */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm">
                  Join Us
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isOpen
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-transparent pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={16} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Navigation</h2>
                <p className="text-xs text-gray-600">Explore MindFlare</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-4 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-100 group-hover:bg-blue-100 rounded-xl transition-colors duration-300">
                    <IconComponent
                      size={18}
                      className="group-hover:text-blue-600 transition-colors duration-300"
                    />
                  </div>
                  <span className="font-medium text-lg">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
                Join MindFlare
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="fixed top-20 right-8 z-30 pointer-events-none hidden xl:block">
        <div className="relative">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="fixed top-32 left-8 z-30 pointer-events-none hidden xl:block">
        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping"></div>
      </div>
    </>
  );
}
