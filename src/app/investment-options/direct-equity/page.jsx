// rafce
'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";
import Head from "next/head";

// --- Helper Icon Components (Using Local Images - Assumed to be imported/defined) ---
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
    { question: "What is Direct Equity in the unlisted space?", answer: "Direct equity refers to investing in shares of companies that are not yet listed on stock exchanges such as NSE or BSE. These can include pre-IPO companies, startups, or privately held firms, where investors get early access before listing." },
    { question: "How is investing in unlisted equity different from listed equity?", answer: "Listed equity is traded daily on exchanges with transparent pricing.\nUnlisted equity is traded privately through brokers or secondary markets, where pricing depends on demand and supply." },
    { question: "What are the benefits of investing in unlisted shares?", answer: "Early entry into high-growth companies before IPO.\nPortfolio diversification with low correlation to listed markets.\nOpportunity to invest in startups and SMEs.\nPotential for higher returns if the company grows or gets listed successfully." },
    { question: "What are the major risks involved?", answer: "Valuation challenges – prices are not transparent.\nLiquidity risk – limited buyers and sellers.\nRegulatory risk – trades are outside SEBI’s daily monitoring.\nLock-in period – one year post listing.\nBusiness risk – early-stage companies may fail." },
    { question: "Who should invest in unlisted equity?", answer: "Investors who have:\nA high-risk appetite.\nA long-term horizon.\nThe ability to handle illiquidity.\nInterest in diversifying their portfolio into emerging businesses." },
    { question: "How can I buy unlisted shares?", answer: "You can purchase unlisted shares through:\nSecondary market dealers and specialized brokers.\nPrivate placements from companies.\nPre-IPO offers (through wealth managers)." },
    { question: "What is the minimum investment amount?", answer: "The minimum investment varies from company to company. Some shares are available in small ticket sizes, making them accessible for retail investors, while others may require a larger capital commitment." },
    { question: "What happens when the company goes public?", answer: "If the company lists successfully, you can sell your shares on the stock exchange after the one-year lock-in period.\nListing often results in higher valuations, but there is also a risk of volatility." },
    { question: "Is unlisted equity regulated by SEBI?", answer: "While SEBI regulates listed market activities, unlisted equity trades occur outside daily exchange supervision. However, the issuance of shares by companies still requires compliance with the Companies Act and other regulations." },
    { question: "How much of my portfolio should I allocate to unlisted shares?", answer: "Since unlisted equity is high-risk, high-reward, it is advisable to allocate only a small percentage (5-10%) of your overall portfolio, depending on your risk appetite and financial goals." },
];

const benefitsList = [
    { title: "Early Entry Advantage", icon: '🚀', detail: "Invest in high-growth companies and future market leaders before their IPO." },
    { title: "High Return Potential", icon: '📈', detail: "Capture significant growth often seen in the private market before public listing." },
    { title: "True Diversification", icon: '🔄', detail: "Low correlation with listed market movements helps stabilize your overall portfolio." },
    { title: "Access to Innovation", icon: '💡', detail: "Direct access to innovative startups and fast-growing Small and Medium Enterprises (SMEs)." },
];

const risksList = [
    { title: "Liquidity Constraint", icon: '⏳', detail: "Shares are not traded daily, meaning a longer holding period may be required." },
    { title: "Valuation Complexity", icon: '❓', detail: "Pricing is less transparent and based on private deals, not open market data." },
    { title: "Business Failure Risk", icon: '📉', detail: "Higher risk of failure as these are often early-stage or growth-stage companies." },
    { title: "Lock-in Requirement", icon: '🔒', detail: "Shares are subject to a mandatory one-year lock-in period post-public listing (IPO)." },
];


const DirectEquityPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- UI/Theme Configuration ---
    const primaryColor = 'text-orange-600'; // Using the standard orange accent color for consistency
    const primaryBg = 'bg-orange-50';
    const borderColor = 'border-orange-400';
    const lightGradient = 'from-blue-50 via-white to-gray-50'; // Consistent light background

    // Overriding specific elements to match the requested yellow/dark theme for this page's content.
    const accentHeader = 'text-yellow-800';
    const accentBorder = 'border-yellow-600';
    const accentButtonBg = 'bg-yellow-100 hover:bg-yellow-200';
    const accentButtonText = 'text-yellow-800';


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
            <Head>
                <title>Direct Equity (Unlisted Shares) | SK Advizors</title>
                <meta name="description" content="Gain early access to pre-IPO, startup, and private company shares with SK Advizors. Explore benefits, high-reward potential, and risks of unlisted equity investment." />
                <meta name="keywords" content="Direct Equity, Unlisted Shares, Pre-IPO, Startup Investment, Portfolio Diversification, SK Advizors, High Growth, Valuation" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 1. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        Direct Equity (Unlisted)
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

                {/* 2. Hero Section & Banner Image */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-96 bg-yellow-600">
                        <img
                            src="/images/direct equity.jpg"
                            alt="Visual representing unlisted equity and high-growth investment"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Future Market Leaders, Today
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 3. Main Content Section (Structured into Cards) */}
                <section
                    id="unlisted-equity-details"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        Direct Equity – Your Gateway to the <span className={accentHeader}>Unlisted Market</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Introduction/Key Feature Box */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                Investing in unlisted equity offers a unique opportunity to gain **early access** to high-potential companies before they hit the public market. This is where significant wealth creation often begins, but it requires specialized knowledge and high-risk tolerance.
                            </p>
                        </div>

                        {/* Benefits Section - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentHeader} border-b pb-2 mb-4 mt-8`}>
                            4 Reasons to Consider Unlisted Shares
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {benefitsList.map((item, index) => (
                                <div key={index} className={`p-5 bg-gray-50 rounded-lg shadow-sm border-l-4 ${accentBorder} hover:shadow-md transition-shadow duration-300`}>
                                    <span className={`text-2xl ${accentHeader}`}>{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Risks Section - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentHeader} border-b pb-2 mb-4 mt-10`}>
                            Understanding the Associated Risks
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {risksList.map((item, index) => (
                                <div key={index} className={`p-5 border-l-4 border-red-500 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}>
                                    <span className="text-2xl text-red-600">{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Who Should Invest Summary */}
                        <h3 className={`font-bold text-2xl ${accentHeader} border-b pb-2 mb-4 mt-10`}>
                            Is This Right for Your Portfolio?
                        </h3>
                        <p className="text-gray-800">
                            Unlisted equity is suitable primarily for investors with a **long-term horizon** and a **high-risk appetite** who understand and are comfortable with illiquidity and the inherent complexity of private market valuations. We recommend allocating only a small, strategic percentage (5-10%) of your overall portfolio to this asset class.
                        </p>
                        
                    </article>
                </section>

                {/* 4. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        Direct Equity – <span className={accentHeader}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center ${accentButtonBg} transition-colors duration-200`}
                                    onClick={() => toggleFaq(idx)}
                                    aria-expanded={openFaqs.includes(idx)}
                                    aria-controls={`faq-${idx}-content`}
                                    id={`faq-${idx}-header`}
                                >
                                    <span className={`font-semibold text-base sm:text-lg ${accentButtonText} pr-4`}>{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 ${accentHeader} transform transition-transform duration-300 ${
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

export default DirectEquityPage;