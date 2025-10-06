'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";

// --- Helper Icon Components ---
// Note: Keeping these outside the main component to follow clean React practices.
// --- Helper Icon Components (Using Local Images) ---

const IconHome = (props) => (
  <img
    src="/images/home.svg" // <-- Assuming file is named 'home.svg'
    alt="Home"
    // Use the className passed via props to maintain styling (w-6 h-6 etc.)
    className={props.className} 
    draggable={false}
  />
);

const IconMail = (props) => (
  <img
    src="/images/mail.svg" // <-- Assuming file is named 'mail.svg'
    alt="Contact"
    className={props.className}
    draggable={false}
  />
);

const IconWhatsApp = (props) => (
  <img
    src="/images/whatsapp.svg" // <-- Assuming file is named 'whatsapp.svg'
    alt="WhatsApp"
    className={props.className}
    draggable={false}
  />
);
const IconShield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconTarget = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconSettings = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 0 0 0-16M12 4a8 8 0 0 1 0 16m0-16v16m-2-8h4m-6 2l1.5-1.5m3 3l1.5-1.5m-6-3L9.5 8.5m3 3L13.5 12.5"/></svg>
);
const IconScale = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z"/><path d="M12 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z"/><path d="M12 2L12 22"/></svg>
);

// --- Data Definitions ---
const faqs = [
  { question: "Why do I need insurance if I already have savings and investments?", answer: "Savings and investments help you build wealth, but insurance protects that wealth in case of unexpected events. Without proper coverage, a medical emergency, accident, or loss of income can wipe out years of savings. Insurance ensures your financial goals remain intact even during tough times." },
  { question: "How do I know how much life insurance I need?", answer: "The required coverage depends on your income, family’s expenses, outstanding loans, and future goals (like children’s education). At SK Advizors, we calculate this for you through a personalized risk and needs analysis, ensuring you are neither under-insured nor over-insured." },
  { question: "What’s the difference between life insurance and health insurance?", answer: "Life Insurance provides financial security to your family if something happens to you. Health Insurance covers hospitalization and medical expenses, ensuring you don’t drain your savings for treatments. Both are equally important as part of a well-rounded protection plan." },
  { question: "I already have an insurance policy. Do I still need a review?", answer: "Yes. Policies taken years ago may no longer match your current needs, lifestyle, or income. At SK Advizors, we review your existing policies and suggest adjustments, upgrades, or consolidations to keep your coverage relevant and cost-effective." },
  { question: "Is insurance an investment?", answer: "Insurance should primarily be seen as a risk management tool, not an investment. While certain plans may have investment features, the main purpose of insurance is protection. We recommend looking at insurance for security and using other products for wealth creation." },
  { question: "What happens if I’m over-insured?", answer: "Being over-insured means you’re paying higher premiums than necessary. This can reduce your disposable income and prevent you from investing in better opportunities. At SK Advizors, we make sure your coverage is balanced and efficient." },
  { question: "Can I combine different types of insurance?", answer: "Yes, in fact, a combination of policies works best. For example, life + health + accident + critical illness cover ensures all-round protection. We help you design a customized mix based on your risks, responsibilities, and budget." },
];

const approachItems = [
  { text: "Assess your current risks and financial responsibilities", icon: IconShield },
  { text: "Review your existing policies to avoid being over-insured or under-insured", icon: IconScale },
  { text: "Recommend cost-effective and need-based insurance plans", icon: IconTarget },
  { text: "Align insurance coverage with your overall financial and wealth-building strategy", icon: IconSettings },
];

const solutionItems = [
  { title: "Life Insurance", description: "Ensures your family’s financial security in your absence." },
  { title: "Health Insurance", description: "Covers medical expenses, protecting your savings from hospital bills." },
  { title: "Personal Accident", description: "Provides financial support in case of accidental disability or loss of income." },
  { title: "Critical Illness", description: "Protects against the high cost of treating life-threatening illnesses." },
  { title: "Travel Insurance", description: "Safeguards you from risks like medical emergencies, trip cancellations, or loss of baggage during travel." },
];

// --- InsurancePlanningPage Component (rafce) ---
const InsurancePlanningPage = () => {
  const [openFaqs, setOpenFaqs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto-open modal logic
  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16 font-sans">
      
      {/* Header - Sticky, Modern, Translucent */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
        bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        <h1 className="text-xl sm:text-3xl font-bold text-orange-600 hover:text-orange-700">
          Insurance Planning
        </h1>
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Home Link */}
          <Link href="/" aria-label="Go to Home" className="group p-2 rounded-full hover:bg-orange-100 transition-all">
            <IconHome className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-600" />
          </Link>
          {/* Contact Button */}
          <button
            onClick={() => setModalOpen(true)}
            aria-label="Contact Us"
            className="p-2 rounded-full hover:bg-orange-100 transition-all focus:ring-2 focus:ring-orange-500 focus:outline-none group"
          >
            <IconMail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-600" />
          </button>
          {/* WhatsApp Link */}
          <a
            href="https://wa.me/919920963209?text=Hi%20Shrikant%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full hover:bg-orange-100 transition-all group"
          >
            <IconWhatsApp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>
      </header>

      {/* Hero Section & Banner Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-96 bg-blue-500">
          <img
            src="/images/Insurance1.jpg"
            alt="Insurance Planning - Protecting your financial future"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
           
          </div>
        </div>
      </div>

      {/* Main Content Section - Card Style */}
      <section
        id="insurance-solutions"
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
          Insurance Planning – Guided by <span className="text-orange-600">SK Advizors</span>
        </h1>
        <article className="prose max-w-none mx-auto text-gray-700">
          {/* Key Feature Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg my-6">
            <p className="font-semibold text-lg text-blue-800">
              At SK Advizors, we believe that insurance is not just about policies—it’s about protecting your loved ones and securing your financial future. It acts as a safety net, ensuring your family and wealth remain protected.
            </p>
          </div>

          {/* Why Insurance Matters */}
          <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-8">
            Why Insurance Planning Matters
          </h2>
          <p>
            Insurance is often misunderstood as just another investment product. In reality, it is a risk management tool—a way to transfer financial risk from you to the insurer. Without adequate coverage, unexpected events like disability, illness, or premature death can cause long-term financial stress. With proper planning, you can ensure that your family’s standard of living and your financial goals remain secure, even in difficult times.
          </p>

          {/* Our Approach - Grid Layout */}
          <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
            Our Approach to Insurance Planning
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {approachItems.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 h-8 mr-4 text-blue-600">
                  <item.icon />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Types of Insurance Solutions - List/Card Layout */}
          <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
            Types of Insurance Solutions We Recommend
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {solutionItems.map((item, index) => (
              <div key={index} className="p-5 border-l-4 border-orange-400 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                  <span className="text-orange-500 mr-2 text-xl">✔</span> {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cost of Under/Over Insured */}
          <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
            The Cost of Being Under or Over Insured
          </h2>
          <p>
            Having too little insurance leaves you vulnerable, while too much insurance can strain your finances unnecessarily. At SK Advizors, we carefully analyze your policies and make sure your coverage is adequate, balanced, and cost-efficient, so you only pay for what you truly need.
          </p>

          {/* Peace of Mind */}
          <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
            Peace of Mind Through Planning
          </h2>
          <ul className="list-none space-y-3 pl-0">
              <li className="flex items-center text-gray-700">
                  <span className="text-blue-500 mr-2 font-bold text-lg">★</span> Protection for your family’s future
              </li>
              <li className="flex items-center text-gray-700">
                  <span className="text-blue-500 mr-2 font-bold text-lg">★</span> A shield against loss of income or medical emergencies
              </li>
              <li className="flex items-center text-gray-700">
                  <span className="text-blue-500 mr-2 font-bold text-lg">★</span> Confidence that your financial goals remain on track
              </li>
              <li className="flex items-center text-gray-700">
                  <span className="text-blue-500 mr-2 font-bold text-lg">★</span> The peace of mind that comes with being prepared
              </li>
          </ul>
          <p className="mt-8 text-lg font-medium text-gray-800">
            At SK Advizors, we don’t just sell policies—we partner with you to build a secure financial foundation for every stage of life.
          </p>
        </article>
      </section>

      {/* FAQ Section - Clean Accordion Style */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Insurance Planning – <span className="text-orange-600">FAQs</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-orange-50 transition-colors duration-200"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openFaqs.includes(idx)}
                aria-controls={`faq-${idx}-content`}
                id={`faq-${idx}-header`}
              >
                <span className="font-semibold text-base sm:text-lg text-gray-800 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-orange-600 transform transition-transform duration-300 ${
                    openFaqs.includes(idx) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                id={`faq-${idx}-content`}
                role="region"
                aria-labelledby={`faq-${idx}-header`}
                className={`px-5 text-gray-600 overflow-hidden transition-all duration-500 ${
                  openFaqs.includes(idx) ? "py-4 max-h-96 bg-white opacity-100" : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Form */}
      <ModalForm isOpen={modalOpen} onClose={handleModalClose} />
    </main>
  );
};

export default InsurancePlanningPage;