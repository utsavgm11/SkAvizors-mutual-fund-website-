'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ModalForm = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    const formData = new FormData(e.target);
    const formBody = new URLSearchParams();
    formData.forEach((v, k) => formBody.append(k, v));
    try {
      const res = await fetch('/api/saveForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (!res.ok) throw new Error('Unable to submit form');
      setSuccess('✅ Response submitted successfully!');
      e.target.reset();
    } catch (err) {
      setSuccess('❌ Error submitting response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={formRef}
        className="bg-white rounded-lg p-4 max-w-sm w-full mx-3 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-600 p-1 rounded-full hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Smaller Title */}
        <h2 className="text-xl font-bold mb-3 text-center text-gray-800">
          Free Consultation
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-gray-700 text-sm">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-0.5 font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-0.5 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="your.email@example.com"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-0.5 font-semibold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+91 98765 43210"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-0.5 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              defaultValue="Hi Shrikant, I would like to get in touch with you."
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded py-2 px-4 font-semibold focus:outline-none disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Request'}
            </button>
            <a
              href="https://wa.me/919920963209?text=Hi%20Shrikant%2C%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:text-orange-800 text-xs"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>
          {/* Success/Error Message */}
          {success && (
            <p
              className={`mt-2 text-center font-semibold ${
                success.includes('✅') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
