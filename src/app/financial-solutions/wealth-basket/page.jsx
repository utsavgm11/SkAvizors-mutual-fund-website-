// rafce
'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";

// --- Helper Icon Components (Using Local Images - Assumed to be imported/defined elsewhere) ---
// Defining them here as placeholders to show how they integrate, assuming they return an <img> tag.
const IconHome = (props) => (
  <img src="/images/home.svg" alt="Home" className={props.className} draggable={false} />
);
const IconMail = (props) => (
  <img src="/images/contact.svg" alt="Contact" className={props.className} draggable={false} />
);
const IconWhatsApp = (props) => (
  <img src="/images/whatsapp.svg" alt="WhatsApp" className={props.className} draggable={false} />
);

// --- Utility Data Structures ---
const serviceItems = [
    { title: "Investment Portfolio Review & Management", detail: "Regular analysis to ensure balance, risk alignment, and optimal performance." },
    { title: "Risk Profiling & Asset Allocation", detail: "Distributing investments across classes for long-term stability and growth." },
    { title: "Tax Optimization Strategies", detail: "Structuring investments to minimize tax liabilities and maximize post-tax returns." },
    { title: "Estate & Succession Planning", detail: "Securing your family’s financial future and structuring wealth transfer." },
    { title: "Retirement Planning", detail: "Building sustainable income streams for comfort and financial independence in retirement." },
    { title: "Debt & Cash Flow Management", detail: "Managing liabilities effectively to improve liquidity and maintain healthy financial flow." },
    { title: "Exclusive Product Access", detail: "Specialized solutions from PMS/AIF for high-net-worth clients seeking unique opportunities." },
    { title: "Technology-Driven Insights", detail: "Access to research-driven reports, tracking tools, and real-time investment monitoring." },
];

const featureItems = [
    { text: "Personalized strategies aligned with your goals & lifestyle", icon: "⭐" },
    { text: "Comprehensive review of your risk profile & investment portfolio", icon: "📊" },
    { text: "Access to diverse asset classes & exclusive products", icon: "💎" },
    { text: "Regular tracking against model portfolios & benchmarks", icon: "📈" },
    { text: "Integrated tax & estate planning solutions", icon: "🛡️" },
    { text: "Backed by dynamic research & technology platforms", icon: "💻" },
];

const faqs = [
    { question: "What is the difference between wealth management and investment management?", answer: "Investment management mainly focuses on selecting and managing financial products like stocks, mutual funds, or bonds. Wealth management, on the other hand, is a holistic service that covers your entire financial life—including investments, tax planning, estate planning, retirement strategies, and risk management." },
    { question: "Who should consider wealth management services?", answer: "Wealth management is best suited for high-net-worth individuals, families, and business owners who have multiple assets, income sources, and financial goals. If managing your finances feels complex or you want a structured long-term strategy, wealth management is right for you." },
    { question: "How does SK Advizors create a Wealth Basket for me?", answer: "We begin by understanding your financial goals, risk appetite, and current portfolio. Based on this, we design a customized Wealth Basket that includes the right mix of investments, tax strategies, estate planning, and cash flow solutions. It’s a personalized roadmap for your wealth journey." },
    { question: "What products are included in wealth management?", answer: "Our Wealth Basket can include a wide range of products and services such as mutual funds, PMS, AIF, direct equity, bonds, fixed deposits, smallcase, liquiloans, and insurance solutions, depending on your profile and goals." },
    { question: "Is wealth management only for the ultra-rich?", answer: "No. While wealth management traditionally focuses on high-net-worth individuals, anyone with significant assets, business interests, or long-term financial goals can benefit. The earlier you start, the better the results." },
    { question: "How often should my Wealth Basket be reviewed?", answer: "We recommend reviewing your portfolio at least once or twice a year, or whenever there are major life changes (marriage, business expansion, inheritance, retirement, etc.) or significant market shifts. At SK Advizors, we provide regular reviews and updates to keep your plan on track." },
    { question: "What are the benefits of wealth management beyond investments?", answer: "Wealth management provides clarity and peace of mind. Beyond just investments, it ensures: Your wealth grows tax-efficiently; Your family’s financial future is secured through estate planning; Your retirement needs are fully covered; Your risks are managed smartly with insurance and diversification." },
    { question: "How does SK Advizors ensure my wealth is safe?", answer: "We partner only with regulated, credible institutions and apply research-backed strategies. All investments remain in your name with full transparency. Our focus is not only on growing wealth but also on protecting it across generations." },
];

const WealthBasketPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

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
                    Wealth Basket
                </h1>

                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Home Link */}
                    <Link href="/" aria-label="Go to Home" className="group p-2 rounded-full hover:bg-orange-100 transition-all">
                        <IconHome className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-600" />
                    </Link>
                    
                    {/* Contact Button (Modal Trigger) */}
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
                        src="/images/wealth.jpg"
                        alt="Wealth Basket - Holistic Wealth Management"
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                        
                    </div>
                </div>
            </div>

            {/* Main Content Section - Card Style */}
            <section
                id="wealthbasket-solutions"
                className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
            >
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                    Wealth Management – Guided by <span className="text-orange-600">SK Advizors</span>
                </h1>
                <article className="prose max-w-none mx-auto text-gray-700">
                    
                    {/* Key Feature Box - Introduction */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg my-6">
                        <p className="font-semibold text-lg text-blue-800">
                            At SK Advizors, true wealth is more than just money—it’s about security, growth, and peace of mind. Our wealth management service is an integrated strategy covering investments, tax, and legacy planning.
                        </p>
                    </div>

                    {/* Why Wealth Management Matters */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-8">
                        Why Wealth Management Matters
                    </h2>
                    <p>
                        As wealth grows, so does complexity. Managing multiple investments, taxes, debts, and estate considerations can be overwhelming without professional expertise. Our solutions are designed for high-net-worth individuals and families who seek personalized, structured, and sustainable financial strategies. We build a tailored **Wealth Basket** that supports long-term growth while preserving stability.
                    </p>

                    {/* Our Wealth Basket Services - Grid Layout */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
                        Our Wealth Basket Services Include
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {serviceItems.map((item, index) => (
                            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                <div className="flex-shrink-0 w-6 h-6 mr-3 text-blue-600">
                                    <span className="text-blue-500 text-lg">✔</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-0.5">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Features & Benefits of Our Wealth Basket - Card Grid */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
                        Features & Benefits of Our Wealth Basket
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {featureItems.map((item, index) => (
                            <div key={index} className="p-5 border-l-4 border-orange-400 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl">{item.icon}</span> 
                                    {item.text.split('**').map((part, i) => (
                                        i % 2 === 1 ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
                                    ))}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Our Commitment */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">Our Commitment</h2>
                    <p className="text-lg font-medium text-gray-800">
                        At SK Advizors, we go beyond numbers. We focus on building a **long-term relationship of trust**, offering guidance at every stage of your financial journey. Our Wealth Basket is not just about growing assets—it’s about **protecting, preserving, and passing them on with confidence.**
                    </p>
                </article>
            </section>

            {/* FAQ Section - Clean Accordion Style */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                    Wealth Management – <span className="text-orange-600">FAQs</span>
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

export default WealthBasketPage;