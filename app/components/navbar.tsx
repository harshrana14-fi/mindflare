// components/navbar.tsx

"use client";
import Link from "next/link";
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
    { name: "Home", href: "#", icon: Home },
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
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
        <div
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200/50 rounded-xl transform scale-98"
              : "bg-white/90 backdrop-blur-lg shadow-lg border border-gray-200/30 rounded-2xl"
          }`}
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
          }}
        >
          <div className="px-4 lg:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo Section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Image
                      src="/logo.jpg"
                      alt="MindFlare Logo"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                      MindFlare
                    </h1>
                    <p className="text-xs text-gray-600 -mt-0.5 font-medium">
                      Tech Society • MAIT
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-0.5">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name} className="relative">
                      {item.dropdown ? (
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative overflow-hidden group ${
                            activeDropdown === item.name
                              ? "bg-blue-50 text-blue-600 shadow-md"
                              : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <IconComponent size={16} className="relative z-10" />
                          <span className="relative z-10 text-sm">
                            {item.name}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`relative z-10 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative overflow-hidden group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <IconComponent size={16} className="relative z-10" />
                          <span className="relative z-10 text-sm">
                            {item.name}
                          </span>
                        </Link>
                      )}

                      {/* Dropdown menu remains unchanged */}
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-3 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 z-50 animate-in slide-in-from-top-2 duration-300">
                          <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 border-l border-t border-gray-200/50 rotate-45 backdrop-blur-xl"></div>
                          {item.dropdown.map((dropdownItem, index) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 mx-2 rounded-xl"
                              onClick={() => setActiveDropdown(null)}
                              style={{
                                animationDelay: `${index * 50}ms`,
                              }}
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
              <div className="hidden lg:flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <a
                    href="https://www.linkedin.com/company/mindflare2/"
                    target="_blank"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/mindflare_mait/?igsh=eDZ2emRqdWdtcjdi#"
                    target="_blank"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
                <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 transform text-sm">
                  <span>Join Society</span>
                  <ExternalLink size={12} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200/50 backdrop-blur-xl">
              <div className="px-6 py-6 space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="animate-in slide-in-from-left duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-4 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-md group"
                      >
                        <IconComponent
                          size={20}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="font-medium">{item.name}</span>
                      </a>
                      {item.dropdown && (
                        <div className="ml-10 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block p-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 rounded-lg transition-all duration-200"
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
                <div className="pt-4 border-t border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://github.com/mindflare-mait"
                        className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="mailto:mindflare@mait.ac.in"
                        className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Join Society
                    </button>
                  </div>
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
