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
    { question: "Are mutual funds safe to invest in?", answer: "Mutual funds are regulated by SEBI (Securities and Exchange Board of India) and managed by professional fund managers. While they carry market-linked risks, choosing the right category based on your goals and risk profile makes them a safe and disciplined way to grow wealth." },
    { question: "Which is better—SIP or lump sum investment?", answer: "Both have their benefits:\nSIP (Systematic Investment Plan): Best for beginners and salaried individuals. It allows you to invest small amounts regularly and benefits from rupee cost averaging.\nLump Sum: Ideal when you have a large amount to invest and want to put it to work immediately.\nAt SK Advizors, we guide you on the right approach depending on market conditions and your goals." },
    { question: "Can I withdraw money from mutual funds anytime?", answer: "Yes, most mutual funds offer high liquidity—you can redeem your investment anytime. However, some schemes may have exit loads (small charges if withdrawn before a set period) and tax implications. We help you plan withdrawals in the most cost-effective and tax-efficient way." },
    { question: "Do I need a Demat account to invest in mutual funds?", answer: "No. You only need to be KYC compliant with a valid bank account. At SK Advizors, we simplify the process and help you invest online without the need for a demat account." },
    { question: "How are mutual funds taxed?", answer: "Equity Funds (≥65% in equity):\nSold within 1 year → 15% tax on gains.\nSold after 1 year → 10% tax on gains above ₹1 lakh.\nDebt Funds (<65% in equity):\nSold within 3 years → Taxed as per your income tax slab.\nHeld for 3+ years → 20% tax with indexation (inflation-adjusted)." },
    { question: "How do I know which mutual fund is right for me?", answer: "The right fund depends on your goals, time horizon, and risk appetite. For example:\nShort-term needs → Debt or liquid funds.\nLong-term wealth creation → Equity funds or hybrid funds.\nAt SK Advizors, we design a personalized mutual fund strategy that suits your lifestyle and financial objectives." },
    { question: "What are the different types of mutual funds I can invest in?", answer: "Equity Funds – For long-term growth.\nDebt Funds – For safety and stability.\nHybrid Funds – Mix of equity + debt.\nMulti-Asset Funds – Invest in multiple asset classes.\nThematic Funds – Focused on specific sectors/themes." },
];

const benefitsList = [
    { text: "Professional Management – Experts manage the portfolio, saving you from constant monitoring.", icon: "🧑‍💼" },
    { text: "Diversification – Your money is spread across multiple securities, reducing overall risk.", icon: "🌐" },
    { text: "Flexibility – Options for equity, debt, hybrid, or multi-asset funds based on your needs.", icon: "🔄" },
    { text: "Liquidity – Easy to buy and sell with transparent pricing.", icon: "💧" },
    { text: "Low Entry Barrier – Start investing with small amounts.", icon: "💰" },
];

const approachList = [
    { text: "Goal-Based Investing – We match funds to your goals (retirement, education, wealth creation).", icon: "🎯" },
    { text: "Risk Profiling – Investments are chosen based on your comfort with risk and time horizon.", icon: "📈" },
    { text: "Portfolio Review – Regular monitoring and rebalancing to keep your portfolio on track.", icon: "🔍" },
    { text: "Full Transparency – You always remain in control with clear reporting and access.", icon: "🤝" },
];


const MutualFundPlanningPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- Theme Configuration ---
    const primaryColor = 'text-orange-600'; // Standard primary accent color
    const accentColor = 'text-green-700'; // Green accent (specific to this page)
    const accentBg = 'bg-green-50';
    const accentBorder = 'border-green-400';
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
                <title>Mutual Fund Planning - SIP, SWP, Lump Sum | SK Advizors</title>
                <meta name="description" content="Start your wealth journey with mutual funds. SK Advizors provides personalized SIP/lump sum planning, risk profiling, tax guidance, and fund selection for long-term growth." />
                <meta name="keywords" content="Mutual Funds, SIP, SWP, Debt Funds, Equity Funds, Hybrid Funds, Portfolio Planning, Tax on Mutual Funds, Wealth Creation, SEBI" />
                <meta property="og:title" content="Mutual Fund Planning - Disciplined Wealth Growth | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        Mutual Fund Planning
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
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-green-600">
                        <img
                            src="/images/mutual funds.jpg"
                            alt="Visual representing diversified mutual fund investment"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Disciplined Wealth Growth
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="mutual-fund-planning"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        Mutual Funds – Your Path to <span className={accentColor}>Diversified Investing</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                At SK Advizors, we believe that **mutual funds** are the most effective way for individuals to grow wealth in a disciplined, transparent, and diversified manner, pooling money for professionally managed investments.
                            </p>
                        </div>
                        
                        {/* Why Choose Mutual Funds - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-8`}>
                            6 Core Benefits of Mutual Funds
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {benefitsList.map((item, index) => (
                                <div key={index} className={`p-4 ${accentBg} rounded-lg shadow-sm ${accentBorder} border-t-4 hover:shadow-md transition-shadow duration-300`}>
                                    <span className={`text-2xl ${accentColor}`}>{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.text.split(' – ')[0]}</h4>
                                    <p className="text-sm text-gray-600">{item.text.split(' – ')[1]}</p>
                                </div>
                            ))}
                        </div>

                        {/* Taxation Section - Structured Box */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Understanding Mutual Fund Taxation
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div className="p-5 border-l-4 border-green-500 bg-green-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-green-600 mr-2 text-xl">💹</span> Equity Fund Tax Rules
                                </h4>
                                <p className="text-sm text-gray-700">
                                    **Short-Term (Held &lt; 1 year):** 15% tax on gains.
                                    <br />
                                    **Long-Term (Held &gt; 1 year):** 10% tax on gains above ₹1 lakh per year.
                                </p>
                            </div>
                            <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-blue-600 mr-2 text-xl">📘</span> Debt Fund Tax Rules
                                </h4>
                                <p className="text-sm text-gray-700">
                                    **Short-Term (Held &lt; 3 years):** Taxed as per your income tax slab.
                                    <br />
                                    **Long-Term (Held &gt; 3 years):** 20% tax with the benefit of **indexation** (inflation-adjusted).
                                </p>
                            </div>
                        </div>

                        {/* Our Approach - List with Icons/Cards */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Our Approach to Mutual Fund Planning
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            {approachList.map((item, index) => (
                                <div key={index} className="p-5 border-l-4 border-orange-400 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                        <span className="text-orange-500 mr-2 text-xl">{item.icon}</span> {item.text}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Key Concepts: SIP, SWP, and STP
                        </h3>
                        <p>
                            **Multiple Ways to Invest:**
                            <br />
                            **SIP (Systematic Investment Plan):** Invest small amounts regularly to benefit from **rupee cost averaging** and long-term wealth creation. 
                            <br />
                            **SWP (Systematic Withdrawal Plan):** Ideal if you want regular withdrawals. Fixed amounts are credited to your account at set intervals. 
                            <br />
                            **STP (Systematic Transfer Plan):** A smart way to reduce risk in volatile markets—your lump sum is first invested in a liquid fund and then gradually shifted to equity.
                        </p>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        Mutual Funds – <span className={accentColor}>FAQs</span>
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

export default MutualFundPlanningPage;