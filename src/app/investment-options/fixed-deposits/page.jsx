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
    { question: "What is a Fixed Deposit (FD)?", answer: "A Fixed Deposit (also called Term Deposit) is an investment where you deposit a lump sum of money with a bank or company for a fixed tenure at a predetermined interest rate. The invested amount earns interest throughout the tenure and is returned along with the principal at maturity." },
    { question: "What types of Fixed Deposits are available?", answer: "Bank Fixed Deposit – Offered by banks, safe but with relatively lower returns.\nCompany Fixed Deposit – Offered by manufacturing companies, NBFCs, and financial institutions. Governed by Section 58A of the Companies Act. These may offer higher interest rates but carry higher risk compared to bank FDs." },
    { question: "What is the minimum and maximum tenure of FD?", answer: "Bank FDs – Ranges from 7 days to 10 years.\nCompany FDs – Usually from 6 months to 5 years." },
    { question: "What are the interest payout options in FD?", answer: "Cumulative FD – Interest is compounded and paid at maturity along with principal.\nNon-Cumulative FD – Interest is paid out monthly, quarterly, half-yearly, or yearly, as per your choice." },
    { question: "What is the minimum amount required to invest in FD?", answer: "The minimum amount varies depending on the bank or company, usually starting from ₹1,000 to ₹10,000." },
    { question: "How is the interest on FD taxed?", answer: "Interest earned on FD is fully taxable as per your income tax slab.\nIf the annual interest exceeds ₹5,000 (Company FD) or ₹40,000 (Bank FD; ₹50,000 for senior citizens), TDS (Tax Deducted at Source) will be applied.\nTo avoid TDS, investors can submit Form 15G (for non-senior citizens) or Form 15H (for senior citizens)." },
    { question: "Can I withdraw my FD before maturity?", answer: "Yes, but it is called premature withdrawal.\nBanks usually charge a penalty (0.5% to 1% lower interest rate).\nSome company FDs may not allow premature withdrawals for a certain lock-in period." },
    { question: "Is FD safe?", answer: "Bank FDs – Safer, as deposits up to ₹5 lakh per bank per depositor are insured by DICGC.\nCompany FDs – Risk depends on the financial health of the company. Always check credit ratings (CRISIL, ICRA, CARE, etc.) before investing." },
    { question: "What happens on maturity of FD?", answer: "On maturity, you can choose to:\nWithdraw the principal + interest to your bank account.\nRenew the FD for another term (principal + interest or principal only)." },
    { question: "Can I take a loan against my FD?", answer: "Yes. Banks and companies provide loan/overdraft against FD (typically up to 75-90% of the FD value). Interest charged is usually 1-2% higher than FD interest rate." },
    { question: "Can I open FD in joint names?", answer: "Yes, you can open FD as:\nPrimary + Joint Holder (Both names on FD).\nIn case of maturity, instructions can be set as Either or Survivor / Jointly / Anyone or Survivor." },
    { question: "Who should invest in FD?", answer: "Conservative investors who prefer guaranteed returns.\nRetirees and senior citizens looking for regular income.\nPeople who want low-risk, stable investment options." }
];

// --- Structured Content for Card Display ---
const featureCards = [
    { title: "Guaranteed Returns", icon: '🔒', detail: "Your return rate is fixed at the time of investment, ensuring predictability regardless of market fluctuations." },
    { title: "Capital Safety", icon: '🛡️', detail: "Bank FDs are insured up to ₹5 lakh by DICGC, providing the highest level of security for conservative investors." },
    { title: "Regular Income Option", icon: '💸', detail: "Choose non-cumulative FDs for monthly, quarterly, or yearly interest payouts, ideal for retirees." },
    { title: "Loan & Liquidity", icon: '🏦', detail: "Easily get a loan or overdraft facility against your FD, offering quick access to capital when needed." },
];

const FixedDepositsPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- Theme Configuration ---
    const primaryColor = 'text-orange-600'; // Primary accent color for headers (Consistent with other pages)
    const accentColor = 'text-amber-800'; // Amber/Brown accent (specific to this page)
    const accentBg = 'bg-amber-100';
    const accentBorder = 'border-amber-400';
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
                <title>Fixed Deposits (FDs) - Guaranteed Returns | SK Advizors</title>
                <meta name="description" content="Secure your savings with Fixed Deposits (FDs). Compare Bank and Company FDs, understand interest payout, taxation, and guarantee on returns with SK Advizors." />
                <meta name="keywords" content="Fixed Deposit, FD, Term Deposit, Guaranteed Returns, Safe Investment, Senior Citizen FD, Company FDs, Tax-Saving FD, DICGC" />
                <meta property="og:title" content="Fixed Deposits (FDs) - Safe Investments | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        Fixed Deposits (FDs)
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
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-amber-600">
                        <img
                            src="/images/fixed deposit.jpg"
                            alt="Visual representing safe fixed deposit investments"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Stability Meets Guaranteed Growth
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="fd-details"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        Fixed Deposits – The Power of <span className={accentColor.replace('text-', 'text-')}>Guaranteed Returns</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                Fixed Deposits are the bedrock of any conservative portfolio, offering **guaranteed returns** and **zero market risk**. We help you maximize returns by comparing top Bank FDs and high-rated Company FDs, optimizing for tax and liquidity needs.
                            </p>
                        </div>

                        {/* Core Features - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-8`}>
                            4 Key Benefits of Fixed Deposits
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {featureCards.map((item, index) => (
                                <div key={index} className={`p-4 ${accentBg} rounded-lg shadow-sm ${accentBorder} border-t-4 hover:shadow-md transition-shadow duration-300`}>
                                    <span className={`text-2xl ${accentColor}`}>{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Types and Safety Summary */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Bank vs. Company FDs: Safety and Returns
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            <div className="p-5 border-l-4 border-green-500 bg-green-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-green-600 mr-2 text-xl">✅</span> Bank FDs (Highest Safety)
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Insured up to ₹5 lakh by DICGC. Lower interest rates but virtually zero credit risk. Ideal for primary emergency funds.
                                </p>
                            </div>
                            <div className="p-5 border-l-4 border-amber-500 bg-amber-50 rounded-lg shadow-md">
                                <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-amber-600 mr-2 text-xl">✨</span> Company FDs (Higher Returns)
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Offer higher interest but rely on the company's financial strength. **Always check credit ratings (CRISIL, ICRA)** before investing.
                                </p>
                            </div>
                        </div>

                        {/* Taxation and Liquidity Summary */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Taxation and Liquidity
                        </h3>
                        <p className="text-gray-800">
                            Interest on FDs is fully taxable as per your income slab. While premature withdrawal is possible, it usually incurs a penalty. Tax-saving FDs offer an 80C deduction but come with a compulsory 5-year lock-in.
                        </p>
                        
                        {/* Who Should Invest */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Who Should Invest?
                        </h3>
                        <ul className="list-none space-y-3 pl-0 mt-4">
                            <li className="flex items-center text-gray-700">
                                <span className="text-blue-500 mr-2 font-bold text-lg">›</span> **Retirees** and senior citizens needing regular, predictable income.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-blue-500 mr-2 font-bold text-lg">›</span> **Conservative investors** prioritizing capital safety over high growth.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-blue-500 mr-2 font-bold text-lg">›</span> Those needing **short-term savings** (3 months to 2 years) for a known expenditure.
                            </li>
                        </ul>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        Fixed Deposits – <span className={accentColor.replace('text-', 'text-')}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center ${accentBg} hover:bg-amber-200 transition-colors duration-200`}
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

export default FixedDepositsPage;