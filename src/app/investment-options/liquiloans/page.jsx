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
    { question: "What exactly is LiquiLoans?", answer: "LiquiLoans is a Peer-to-Peer (P2P) lending platform where your money is lent directly to multiple borrowers through a regulated and technology-driven process. This allows you to earn higher, consistent returns compared to traditional fixed deposits." },
    { question: "Is LiquiLoans safe to invest in?", answer: "Yes, LiquiLoans is an RBI-registered NBFC-P2P platform. Your investments are distributed across multiple high-quality borrowers to minimize risk. Additionally, a trustee and escrow mechanism ensures that money movements remain transparent and secure." },
    { question: "What kind of returns can I expect?", answer: "Returns are generally higher than fixed deposits and are paid monthly. However, returns may vary based on borrower repayments and market conditions. At SK Advizors, we help you align LiquiLoans within your overall portfolio for optimal results." },
    { question: "How do I invest in LiquiLoans through SK Advizors?", answer: "It’s a 100% online process:\n- Create an account on LiquiLoans.\n- Complete quick KYC verification.\n- Choose your investment amount (lump sum or SIP).\n- Track your earnings via the dashboard.\nWe at SK Advizors assist you at every step." },
    { question: "Can I withdraw my money anytime?", answer: "Yes, LiquiLoans offers flexible withdrawals. You can choose to receive monthly interest payouts or reinvest earnings. In some cases, withdrawals may depend on the liquidity available in the platform pool." },
    { question: "What are the risks of investing in LiquiLoans?", answer: "Like any investment, LiquiLoans carries some risks such as borrower defaults and liquidity delays. However, the platform’s risk management, diversification strategy, and RBI regulation significantly reduce these risks. SK Advizors ensures that your exposure matches your risk appetite." },
    { question: "What is the minimum amount required to start?", answer: "LiquiLoans allows you to begin with a relatively low entry amount, making it accessible for retail investors. This allows you to test the platform before scaling your investments." },
    { question: "How are returns taxed?", answer: "Earnings from LiquiLoans are treated as “Income from Other Sources” and are taxed as per your income tax slab. SK Advizors can guide you with tax planning strategies to optimize your returns." },
    { question: "How does LiquiLoans compare to traditional Fixed Deposits?", answer: "• Higher returns than FDs\n• Monthly interest payouts instead of quarterly/annual\n• No account opening charges\n• Flexibility in investment and withdrawal\n• Diversification across borrowers vs. FD with one bank/company" }
];

const featuresList = [
    { title: "RBI Regulated", icon: '✅', detail: "Operates under the oversight of the Reserve Bank of India, ensuring compliance and security." },
    { title: "High Diversification", icon: '🌐', detail: "Capital is automatically spread across multiple borrowers to minimize default risk exposure." },
    { title: "Monthly Payouts", icon: '🗓️', detail: "Provides a steady stream of income paid directly to you every month, unlike annual FD payouts." },
    { title: "Flexible Liquidity", icon: '💧', detail: "Offers the ability to withdraw funds flexibly, depending on the platform's liquidity pool." },
    { title: "Low Entry Barrier", icon: '💰', detail: "Accessible for retail investors, allowing them to start small and scale investments." },
    { title: "Transparent Mechanism", icon: '🔍', detail: "Uses trustee and escrow accounts to ensure all financial movements are clear and secure." },
];

const LiquiloansPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- Theme Configuration (Sky Blue/Cyan) ---
    const primaryColor = 'text-orange-600'; // Standard primary accent color
    const accentColor = 'text-sky-800'; // Sky blue accent (specific to this page)
    const accentBg = 'bg-sky-50';
    const accentBorder = 'border-sky-400';
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
                <title>LiquiLoans – High-Yield P2P Lending | SK Advizors</title>
                <meta name="description" content="Invest in LiquiLoans, India's leading RBI-registered P2P lending platform, for high, stable, and monthly returns. Get expert guidance and risk management from SK Advizors." />
                <meta name="keywords" content="Liquiloans, P2P Lending, Alternative Investment, Fixed Income, RBI Registered, Monthly Returns, Diversification, SK Advizors" />
                <meta property="og:title" content="LiquiLoans - Earn High Monthly Returns | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        LiquiLoans (P2P Lending)
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
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-sky-600">
                        <img
                            src="/images/Liquiloans.webp"
                            alt="Visual representing P2P lending and digital income"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                High Yield, RBI Regulated Income
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="liquiloans-details"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        LiquiLoans – The Smart Alternative to <span className={accentColor}>Fixed Deposits</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                **LiquiLoans** is India's leading Peer-to-Peer (P2P) lending platform, offering investors the chance to earn **higher, monthly, and consistent returns** by lending directly to verified borrowers through an RBI-regulated and tech-enabled platform.
                            </p>
                        </div>

                        {/* Core Features - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-8`}>
                            Key Features & Advantages
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {featuresList.map((item, index) => (
                                <div key={index} className={`p-4 ${accentBg} rounded-lg shadow-sm ${accentBorder} border-t-4 hover:shadow-md transition-shadow duration-300`}>
                                    <span className={`text-2xl ${accentColor}`}>{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Risks Summary */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Understanding and Managing Risks
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                             <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-red-600 mr-2 text-xl">⚠️</span> Credit & Default Risk
                                </h4>
                                <p className="text-sm text-gray-600">
                                    The primary risk is borrower default. This is mitigated by **diversifying your investment** across hundreds of pre-vetted borrowers.
                                </p>
                            </div>
                            <div className="p-5 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-yellow-600 mr-2 text-xl">⏳</span> Liquidity Risk
                                </h4>
                                <p className="text-sm text-gray-600">
                                    While flexible, instant withdrawals depend on cash flow. In some periods, liquidity may be limited.
                                </p>
                            </div>
                        </div>
                        
                        {/* Taxation and SK Advizors Value */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Taxation and Expert Guidance
                        </h3>
                        <ul className="list-none space-y-3 pl-0 mt-4">
                            <li className="flex items-center text-gray-700">
                                <span className="text-orange-500 mr-2 font-bold text-lg">💰</span> **Taxation:** Earnings are taxed as "Income from Other Sources" as per your income slab.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-blue-500 mr-2 font-bold text-lg">🧑‍💼</span> **SK Advizors Role:** We ensure your P2P allocation is appropriate for your risk profile and integrate it safely into your overall portfolio strategy.
                            </li>
                        </ul>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        LiquiLoans – <span className={accentColor}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center ${accentBg} hover:bg-sky-100 transition-colors duration-200`}
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

export default LiquiloansPage;