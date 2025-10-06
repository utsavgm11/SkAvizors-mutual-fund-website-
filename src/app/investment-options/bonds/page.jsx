// rafce
'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";
import Head from "next/head";

// --- Helper Icon Components (Using Local Images - Assuming existence in public/images) ---
// Note: These must be functional components to accept the 'className' prop for styling.
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
    { question: "What is a bond?", answer: "A bond is a fixed-income investment instrument where you lend money to the government, a company, or a financial institution, and in return, you receive regular interest payments (coupon) and the principal amount at maturity." },
    { question: "Who issues bonds?", answer: "Government of India / State Governments (called G-Secs, SDLs).\nPublic Sector Undertakings (PSUs).\nPrivate Companies / Corporates.\nMunicipal Corporations." },
    { question: "How do bonds work?", answer: "You invest a lump sum in a bond.\nThe issuer pays you interest at fixed intervals (monthly/quarterly/half-yearly/annually).\nAt maturity, the face value (principal) is returned to you." },
    { question: "What are the types of bonds available for investment?", answer: "Government Securities (G-Secs) – safest option.\nState Development Loans (SDLs).\nCorporate Bonds / Debentures.\nPSU Bonds.\nTax-Free Bonds.\nPerpetual Bonds.\nSovereign Gold Bonds (SGBs)." },
    { question: "Why should I invest in bonds?", answer: "Provides regular fixed income.\nSafer compared to equities.\nHelps in portfolio diversification.\nSome bonds (like tax-free bonds) provide tax benefits.\nMany bonds are tradeable in the secondary market." },
    { question: "Are bonds safe?", answer: "Government bonds are considered the safest, as they are backed by the government.\nCorporate bonds carry more risk depending on the issuer’s credit rating. Higher returns often come with higher risk." },
    { question: "How is interest paid on bonds?", answer: "Interest (coupon) is paid at fixed intervals – monthly, quarterly, half-yearly, annually, or cumulative at maturity (depending on bond terms)." },
    { question: "Is the interest on bonds taxable?", answer: "Yes. Interest income is taxed as per your income tax slab.\nTax-Free Bonds: The interest earned is exempt from income tax.\nGovernment Bonds (G-Secs, SDLs, SGBs): No TDS is deducted, but income must still be declared in your ITR." },
    { question: "Can I sell bonds before maturity?", answer: "Yes. Most bonds are listed on exchanges and can be sold before maturity at prevailing market prices. However, liquidity may vary." },
    { question: "What are the risks in bond investment?", answer: "Credit Risk – Risk of issuer default (common in low-rated corporate bonds).\nInterest Rate Risk – Bond prices fall when market interest rates rise.\nLiquidity Risk – Some bonds may not have active buyers in the secondary market." },
    { question: "What is the minimum investment required?", answer: "Government bonds are often available in denominations as low as ₹10,000 or even less.\nCorporate bonds may require higher minimum investment, usually ₹10,000 – ₹1,00,000 depending on issuer." },
    { question: "Who should invest in bonds?", answer: "Retirees seeking stable income.\nConservative investors looking for low-risk investments.\nInvestors who want to balance equity risk with fixed income.\nThose looking for long-term safe investments like tax-free or government bonds." },
];

const BondsPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

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

    // --- Modernized Theme Colors (Mapping old hex/custom colors to a consistent theme) ---
    const primaryColor = 'text-orange-600'; // Used for main accent color (replacing [#6454A3] for consistency)
    const primaryBg = 'bg-orange-50';
    const borderColor = 'border-orange-400';
    const accentShadow = 'shadow-orange-200';
    const lightGradient = 'from-blue-50 via-white to-gray-50'; // Consistent background

    // --- Content Points for Card Display ---
    const benefitsList = [
        { title: "Stable Income", icon: '💰', detail: "Provides regular fixed income via predictable coupon payments." },
        { title: "Capital Safety", icon: '🛡️', detail: "Safer than equities, especially with government and high-rated corporate bonds." },
        { title: "Diversification", icon: '📊', detail: "Balances portfolio risk and reduces reliance on volatile equity markets." },
        { title: "Tax Efficiency", icon: '✅', detail: "Options like tax-free bonds offer tax exemption on interest income." },
    ];
    
    const typesList = [
        { title: "Government Bonds (G-Secs)", detail: "The safest option, backed by the central and state governments." },
        { title: "Corporate Bonds", detail: "Issued by companies; higher risk/return based on the issuer's credit rating." },
        { title: "Tax-Free Bonds", detail: "Interest income is exempt from income tax, ideal for high-tax brackets." },
        { title: "Sovereign Gold Bonds (SGBs)", detail: "Government-backed investment in gold, offering a mix of safety and growth." },
    ];


    return (
        <>
            {/* 1. SEO Optimization using Head */}
            <Head>
                <title>Bonds - Fixed Income Investments | SK Advizors</title>
                <meta
                    name="description"
                    content="Secure your financial future with stable bond investments. Explore G-Secs, Corporate, and Tax-Free Bonds for fixed income and portfolio diversification with SK Advizors."
                />
                <meta name="keywords" content="Bonds, Government Bonds, Corporate Bonds, Fixed Income, Investment, SK Advizors, Tax-Free Bonds, Portfolio Diversification" />
                <meta property="og:title" content="Bonds - Reliable Fixed Income | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        Bonds - Fixed Income
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
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-blue-500">
                        <img
                            src="/images/bonds.webp"
                            alt="Visual representing bond investments and fixed returns"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Secure Your Income Stream
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="bond-details"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        Bonds – The Foundation of a <span className={primaryColor.replace('text-', 'text-')}>Stable Portfolio</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                Bonds are essential for **capital preservation** and **generating reliable fixed income**. At SK Advizors, we guide you through the diverse landscape of fixed-income instruments, ensuring your portfolio has the right balance of safety and steady returns.
                            </p>
                        </div>

                        {/* Benefits List - Card Grid */}
                        <h3 className={`font-bold text-2xl ${primaryColor} border-b pb-2 mb-4 mt-8`}>
                            Why Bonds are Crucial for Your Financial Health
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {benefitsList.map((item, index) => (
                                <div key={index} className={`p-4 ${primaryBg} rounded-lg shadow-sm ${borderColor} border-t-4 hover:shadow-md transition-shadow duration-300`}>
                                    <span className="text-2xl">{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Types of Bonds - List with Details */}
                        <h3 className={`font-bold text-2xl ${primaryColor} border-b pb-2 mb-4 mt-10`}>
                            Explore Available Bond Options
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            {typesList.map((item, index) => (
                                <div key={index} className="p-5 border-l-4 border-blue-400 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                        <span className="text-blue-500 mr-2 text-xl">◉</span> {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Risks Summary */}
                        <h3 className={`font-bold text-2xl ${primaryColor} border-b pb-2 mb-4 mt-10`}>
                            Understanding Bond Risks
                        </h3>
                        <p className="text-gray-800">
                            While generally safer than equities, bonds carry **Credit Risk** (issuer default), **Interest Rate Risk** (price volatility due to market changes), and **Liquidity Risk**. We assess your risk tolerance to recommend highly-rated and suitable bonds.
                        </p>
                        
                        {/* Who Should Invest */}
                        <h3 className={`font-bold text-2xl ${primaryColor} border-b pb-2 mb-4 mt-10`}>
                            Who Should Invest in Bonds?
                        </h3>
                        <ul className="list-none space-y-3 pl-0 mt-4">
                            <li className="flex items-center text-gray-700">
                                <span className="text-orange-500 mr-2 font-bold text-lg">›</span> **Retirees** seeking stable, predictable income.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-orange-500 mr-2 font-bold text-lg">›</span> **Conservative investors** prioritizing capital preservation.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-orange-500 mr-2 font-bold text-lg">›</span> Anyone aiming for **portfolio balance** by blending equity growth with fixed-income stability.
                            </li>
                        </ul>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        Bonds – <span className={primaryColor.replace('text-', 'text-')}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center bg-gray-50 hover:${primaryBg} transition-colors duration-200`}
                                    onClick={() => toggleFaq(idx)}
                                    aria-expanded={openFaqs.includes(idx)}
                                    aria-controls={`faq-${idx}-content`}
                                    id={`faq-${idx}-header`}
                                >
                                    <span className="font-semibold text-base sm:text-lg text-gray-800 pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 ${primaryColor} transform transition-transform duration-300 ${
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

export default BondsPage;