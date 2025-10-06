// rafce
'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";
import Head from "next/head";

// --- Helper Icon Components (Using Local Images - Assumed to be imported/defined) ---
const IconHome = (props) => (
  <img src="/images/home.svg" alt="Home Icon" className={props.className} draggable={false} />
);
const IconMail = (props) => (
  <img src="/images/contact.svg" alt="Contact Icon" className={props.className} draggable={false} />
);
const IconWhatsApp = (props) => (
  <img src="/images/whatsapp.svg" alt="WhatsApp Icon" className={props.className} draggable={false} />
);

// --- Data Definitions ---
const faqs = [
    { question: "What is the minimum investment required for PMS and AIF?", answer: "PMS: ₹50 lakhs (as per SEBI regulation).\nAIF: ₹1 crore (as per SEBI regulation)." },
    { question: "Who should invest in PMS?", answer: "Investors with high net worth who want personalized portfolio management, direct stock ownership, and higher return potential compared to mutual funds." },
    { question: "Who should invest in AIF?", answer: "Sophisticated investors looking to diversify into private equity, venture capital, hedge funds, and structured products for higher long-term growth potential." },
    { question: "What are the risks in PMS and AIF?", answer: "Both involve market risks, as they are linked to equity, debt, or alternative assets. PMS usually has concentrated portfolios, while AIFs may involve illiquidity risk due to lock-in periods." },
    { question: "Are PMS and AIF investments liquid?", answer: "PMS: More liquid compared to AIF, but depends on underlying stocks.\nAIF: Usually have a lock-in period of 3–7 years (depending on category and scheme)." },
    { question: "How are PMS and AIF taxed?", answer: "PMS: Tax liability is similar to holding shares directly (short-term and long-term capital gains).\nAIF: Taxation depends on category – in some cases, profits are taxed at the fund level; in others, taxation is passed to investors." },
    { question: "What is the main difference between PMS, AIF, and Mutual Funds?", answer: "Mutual Funds: Pooled, low minimum investment, diversified.\nPMS: Personalized, concentrated, requires high minimum investment.\nAIF: Alternative strategies (private equity, hedge funds, etc.), highest minimum investment, targeted to sophisticated investors." },
    { question: "Why should I choose SK Advizors for PMS & AIF?", answer: "Because we don’t just offer products, we build relationships. At SK Advizors, you get:\nAccess to expert fund managers.\nTransparent reporting.\nA wide basket of investment options.\nA client-first approach where your growth is our growth." },
];

const pmsFeatures = [
    { text: "Expert Management: Managed by professional fund managers with deep research expertise.", icon: "🧑‍💼" },
    { text: "Risk Management: Disciplined strategies and constant monitoring.", icon: "🛡️" },
    { text: "Transparency: Regular statements & online access.", icon: "🔍" },
    { text: "Personalization: Tailored portfolios & direct access to managers.", icon: "🎯" },
];

const pmsBenefits = [
    "Focused portfolio of 15–20 carefully selected stocks.",
    "Higher return potential via concentrated holdings.",
    "Strategies for growth, balance, or conservatism.",
    "Transparent fees and clear cost breakdown.",
    "Active management and personal service.",
];

const aifCategories = [
    { title: "Category I AIF", detail: "Invests in sectors beneficial to the economy (e.g., Venture Capital, Angel Funds, Infrastructure).", color: "text-blue-600" },
    { title: "Category II AIF", detail: "Invests primarily in equity and/or debt securities (e.g., Private Equity Funds, Debt Funds).", color: "text-orange-600" },
    { title: "Category III AIF", detail: "Uses advanced, often short-term strategies (e.g., Hedge Funds, PIPE Funds).", color: "text-red-600" },
];

const skAdvizorsValue = [
    "Access to expert fund managers and research-driven strategies.",
    "Tailored Solutions: Design portfolios per your risk and goals.",
    "Full Transparency: Regular updates, clear reporting, open communication.",
    "Wide Investment Options: MF, Insurance, PMS/AIF, Equity, FDs, Bonds, Smallcase, Liquiloans.",
    "Client-First Approach: We grow only when you grow.",
];

const PMSAIFPlanningPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- Theme Configuration (Green Accent) ---
    const primaryColor = 'text-orange-600'; // Standard primary accent color
    const accentColor = 'text-green-800'; // Green accent (specific to this page)
    const accentBg = 'bg-green-50';
    const accentBorder = 'border-green-700';
    const lightGradient = 'from-blue-50 via-white to-gray-50'; // Consistent light background

    useEffect(() => {
        const timer = setTimeout(() => setModalOpen(true), 15000);
        return () => clearTimeout(timer);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaqs((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            {/* 1. SEO Optimization using Head */}
            <Head>
                <title>Portfolio Management Services & AIF | SK Advizors</title>
                <meta name="description" content="Discover tailored Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) with SK Advizors. Learn about minimum investment, risks, strategies, and benefits for high net worth and sophisticated investors." />
                <meta name="keywords" content="Portfolio Management Services, PMS, Alternative Investment Funds, AIF, SK Advizors, High Net Worth, Investment Planning, Wealth Management, Private Equity, Hedge Funds, Mutual Funds" />
                <meta property="og:title" content="PMS & AIF - Customized Solutions for HNIs | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        PMS & AIF Planning
                    </h1>

                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <Link href="/" aria-label="Go to Home" className="group p-2 rounded-full hover:bg-orange-100 transition-all">
                            <IconHome className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-600" />
                        </Link>
                        <button onClick={() => setModalOpen(true)} aria-label="Contact Us" className="p-2 rounded-full hover:bg-orange-100 transition-all focus:ring-2 focus:ring-orange-500 focus:outline-none group">
                            <IconMail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-600" />
                        </button>
                        <a href="https://wa.me/919920963209?text=Hi%20Shrikant%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full hover:bg-orange-100 transition-all group">
                            <IconWhatsApp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 transition-transform duration-200 group-hover:scale-110" />
                        </a>
                    </div>
                </header>

                {/* 3. Hero Section & Banner Image */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-green-900">
                        <img
                            src="/images/pmf.jpg"
                            alt="Visual representing high net worth investment strategies and wealth management"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Tailored Strategies for High Net Worth
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="pms-aif-planning"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        PMS & AIF – <span className={accentColor}>Customized Wealth Solutions</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                PMS (Portfolio Management Services) and AIF (Alternative Investment Funds) are **sophisticated, specialized investment vehicles** designed for high-net-worth investors seeking targeted strategies and higher return potential than traditional mutual funds.
                            </p>
                        </div>

                        {/* PMS Section */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-8`}>
                            Portfolio Management Services (PMS)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">PMS Key Features (Min. Investment: ₹50 Lakhs)</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                    {pmsFeatures.map((item, index) => (
                                        <li key={index}><span className="font-semibold text-green-700">{item.text.split(':')[0]}</span>: {item.text.split(':')[1]}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">Benefits & Flexibility</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                    {pmsBenefits.map((item, index) => (
                                        <li key={index}><span className="text-green-700">★</span> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AIF Section */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Alternative Investment Funds (AIF)
                        </h3>
                        <p className="text-gray-800">
                            AIFs are SEBI-regulated private investment vehicles (Min. Investment: **₹1 Crore**) for **sophisticated investors** seeking strategies outside conventional equity and debt markets, such as private equity and hedge funds.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            {aifCategories.map((item, index) => (
                                <div key={index} className={`p-5 border-l-4 border-green-400 bg-green-50 rounded-lg shadow-md`}>
                                    <h4 className={`text-lg font-bold ${item.color} mb-1 flex items-center`}>
                                        <span className="mr-2 text-xl">🎯</span> {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.detail}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* SK Advizors Value */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Why SK Advizors for Your PMS & AIF Portfolio?
                        </h3>
                        <ul className="list-none space-y-3 pl-0 mt-4">
                            {skAdvizorsValue.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="text-orange-500 mr-2 font-bold text-lg">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        PMS & AIF – <span className={accentColor}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center ${accentBg} hover:bg-green-100 transition-colors duration-200`}
                                    onClick={() => toggleFaq(idx)}
                                    aria-expanded={openFaqs.includes(idx)}
                                    aria-controls={`faq-${idx}-content`}
                                    id={`faq-${idx}-header`}
                                >
                                    <span className={`font-semibold text-base sm:text-lg ${accentColor} pr-4`}>{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 ${accentColor} transform transition-transform duration-300 ${
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
                                    {/* Handle multi-line answers in FAQs */}
                                    {faq.answer.split('\n').map((line, lineIdx) => (
                                        <p key={lineIdx} className="text-sm sm:text-base leading-relaxed mb-1 last:mb-0">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modal Form */}
                <ModalForm isOpen={modalOpen} onClose={handleModalClose} />
            </main>
        </>
    );
};

export default PMSAIFPlanningPage;