'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

// External URLs
const CLIENT_LOGIN_URL = "https://www.fundzbazar.com/signin";
const REGISTER_URL = "https://www.fundzbazar.com/customisedlinkregistration/7c7723/2364257c7723246c3c7c7723266b7c3f632621713d3f6326";

const PortalAccessPage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white relative p-4 sm:p-8">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-gray-300 hover:text-orange-400 transition duration-300 z-10 p-2 rounded-full hover:bg-gray-800"
        aria-label="Go back to Home Page"
      >
        <FaHome size={28} />
      </Link>

      {/* Central Card */}
      <div className="flex flex-col items-center justify-center w-full max-w-lg bg-gray-800 border border-gray-700 shadow-2xl shadow-gray-900/50 rounded-3xl p-6 sm:p-10 md:p-12 z-20 transform transition-all duration-500 hover:shadow-orange-500/10">
        {/* Main Header & Logo Area */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/logo.png"
            alt="SK Advizors Logo"
            width={100}
            height={100}
            className="mb-4 drop-shadow-lg"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-2 text-center tracking-tight">
            Client Portal Access
          </h1>
          <p className="text-md sm:text-lg text-gray-400 text-center max-w-sm">
            Securely manage your financial investments and start your registration.
          </p>
        </div>

        {/* Access Cards */}
        <div className="flex gap-4 sm:gap-6 w-full flex-col sm:flex-row mt-4">
          {/* Client Login Card */}
          <a
            href={CLIENT_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center p-6 rounded-2xl border-2 border-orange-500 bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 min-w-[140px] transform hover:-translate-y-0.5"
          >
            <FaSignInAlt size={36} className="text-white mb-3" />
            <span className="text-xl font-bold text-white text-center">
              Client Login
            </span>
            <span className="text-sm mt-1 text-orange-200 text-center opacity-90">
              Access existing folios
            </span>
          </a>

          {/* New User Card */}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center p-6 rounded-2xl border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg transition-all duration-300 min-w-[140px] transform hover:-translate-y-0.5"
          >
            <FaUserPlus size={36} className="text-cyan-400 mb-3" />
            <span className="text-xl font-bold text-white text-center">
              New User
            </span>
            <span className="text-sm mt-1 text-gray-300 text-center opacity-80">
              Start your registration now
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PortalAccessPage;
