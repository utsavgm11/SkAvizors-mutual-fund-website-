// rafce
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about-us" },
  { name: "Financial Solutions", href: "#financial-solutions" },
  { name: "Investment Options", href: "#investment-options" },
  { name: "Calculators", href: "#calculators" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const CUSTOM_BREAKPOINT = 1265;

const mobileMenuVariants = {
  hidden: { opacity: 0, scale: 0.95, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, scale: 1, height: "auto", transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Set desktop or mobile state based on screen width
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= CUSTOM_BREAKPOINT);
    window.addEventListener("resize", checkWidth);
    checkWidth();
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Track active section and navbar scroll styling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.pageYOffset > 50);
      let current = "";
      NAV_LINKS.forEach(({ href }) => {
        const el = document.getElementById(href.slice(1));
        if (el && window.pageYOffset >= el.offsetTop - 100) current = href;
      });
      setActiveSection(current || "#home");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(href.slice(1));
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white bg-opacity-80 backdrop-blur-md shadow" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 flex-nowrap">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0 min-w-[140px]">
            <img
              src="/images/logo.png"
              alt="SK Advisor Logo"
              className="h-24 w-auto drop-shadow"
            />
          </a>

          {/* Desktop nav */}
          {isDesktop && (
            <div className="flex-1 flex justify-end items-center space-x-8">
              {NAV_LINKS.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={`relative px-3 py-1 rounded transition font-medium whitespace-nowrap ${
                    activeSection === href
                      ? "text-orange-600 after:content-[''] after:block after:h-1 after:w-full after:bg-orange-600 after:rounded after:mt-1"
                      : "text-gray-800 hover:text-orange-600"
                  }`}
                >
                  {name}
                </a>
              ))}
              <Link
                href="/login"
                className="ml-6 px-5 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 transition font-semibold flex-shrink-0"
              >
                Login
              </Link>
            </div>
          )}

          {/* Hamburger menu */}
          {!isDesktop && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {!isDesktop && menuOpen && (
          <motion.div
            className="bg-white shadow-lg absolute top-20 inset-x-0 z-40 origin-top"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col space-y-3 py-5 px-8">
              {NAV_LINKS.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href)}
                  className={`block px-3 py-3 rounded font-medium ${
                    activeSection === href
                      ? "text-orange-600 bg-orange-100"
                      : "text-gray-800 hover:text-orange-600"
                  }`}
                >
                  {name}
                </a>
              ))}
              <Link
                href="/login"
                className="w-full mt-3 px-5 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 transition font-semibold flex items-center justify-center"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
