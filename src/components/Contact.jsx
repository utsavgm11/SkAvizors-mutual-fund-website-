'use client';
import React, { useState, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const formData = new FormData(form.current);
    const formBody = new URLSearchParams();
    formData.forEach((value, key) => {
      formBody.append(key, value);
    });

    try {
      const res = await fetch('/api/saveForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (!res.ok) throw new Error('Unable to submit form');

      setSuccess('✅ Response submitted successfully!');
      form.current.reset();
    } catch (error) {
      console.error(error);
      setSuccess('❌ Error submitting response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat w-full py-8 px-6 sm:px-12 object-cover h-full"
      aria-label="Contact Us"
    >
      <div className="max-w-3xl mx-auto bg-navyBlue bg-opacity-90 rounded-lg p-6 text-white shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your full name"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="your.email@example.com"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+91 98765 43210"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              defaultValue="Hi Shrikant, I would like to get in touch with you."
              rows={3}
              className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 transition-colors duration-300 px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            <a
              href="https://wa.me/919920963209?text=Hi%20Shrikant%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-700 transition-colors font-semibold"
            >
              <FaWhatsapp size={24} />
              Chat on WhatsApp
            </a>
          </div>
          {/* Response message */}
          {success && (
            <p
              className={`mt-4 text-center font-semibold ${
                success.includes('✅') ? 'text-green-400' : 'text-red-500'
              }`}
            >
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
