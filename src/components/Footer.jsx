'use client';

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const importantLinks = [
    { name: "About Us", href: "#about-us" },
    { name: "Financial Solutions", href: "#financial-solutions" },
    { name: "Investment Options", href: "#investment-options" },
    { name: "Calculators", href: "#calculators" },
    { name: "Privacy Policy", href: "/privacypolicy" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/919920963209",
      iconSrc: "/images/whatsapp white.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shrikant-krishna-2a376a85/",
      iconSrc: "/images/linkedin.svg",
    },
    {
      name: "Gmail",
      href: "mailto:contact@skadvizors.com",
      iconSrc: "/images/gmail white.svg",
    },
  ];

  const handleScroll = (href, index, e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setHoveredLink(index);
      }
    }
    // For href not starting with #, allow normal navigation to happen
  };

  return (
    <footer className="relative bg-transparent text-white mt-16 select-none">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[8px] opacity-80"
        style={{ backgroundImage: 'url("/images/footer-bg-darkblue.jpg")', zIndex: 0 }}
        aria-hidden="true"
      ></div>

      {/* Overlay for slight dark tint */}
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Branding Column */}
        <div className="flex flex-col space-y-3 max-w-xs select-none">
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo.png"
              alt="SK Advizors Logo"
              className="w-12 h-12"
              draggable={false}
            />
            <h2 className="text-2xl font-extrabold tracking-wide">SK Advizors</h2>
          </div>
          <p className="text-white font-light italic">Your Trust, Our Commitment</p>
          <p className="text-gray-300 text-sm">
            Delivering personalized financial solutions with transparency and excellence.
          </p>
        </div>

        {/* Important Links Column */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-orange-600 pb-2 ">Important Links</h3>
          <ul className="space-y-2">
            {importantLinks.map((link, index) => {
              if (link.href.startsWith("#")) {
                // Anchor links with smooth scroll
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`cursor-pointer transition-colors duration-300 font-medium ${
                        hoveredLink === index ? "text-orange-500" : "text-white"
                      }`}
                      onClick={(e) => handleScroll(link.href, index, e)}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              } else {
                // Route links use Next.js Link for client-side navigation (without nested <a>)
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`cursor-pointer transition-colors duration-300 font-medium ${
                        hoveredLink === index ? "text-orange-500" : "text-white"
                      }`}
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        {/* Connect With Us Column */}
        <div>
          <h3 className="mb-4 text-xl font-semibold border-b border-orange-600 pb-2 ">Connect With Us</h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ name, href, iconSrc }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white hover:text-orange-500 transition-colors duration-300"
              >
                <img
                  src={iconSrc}
                  alt={name}
                  className="w-7 h-7 select-none"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center text-gray-300 text-sm space-y-3 sm:space-y-0">
        <p>© {new Date().getFullYear()} SK Advizors. All rights reserved.</p>
        <a
          href="https://utsav-portfolio-puce-alpha-42.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-300"
          aria-label="Designed and developed by Utsav Mahyawanshi"
        >
          <img
            src="/images/Utsav white.png"
            alt="Utsav Logo"
            className="w-12 h-12 select-none"
            draggable={false}
          />
          <span>Designed & Developed by Utsav Mahyawanshi</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
