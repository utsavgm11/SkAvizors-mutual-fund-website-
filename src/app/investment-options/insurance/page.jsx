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
    { question: "What is the difference between Life Insurance and Term Insurance?", answer: "Life Insurance: Provides both protection and, in some cases, savings/investment benefits (like money-back or endowment policies).\nTerm Insurance: Pure protection plan that offers a high sum assured at a low premium but has no maturity value." },
    { question: "Why do I need insurance if I already have savings and investments?", answer: "Insurance is not a replacement for savings or investments. It is a risk management tool that ensures your family’s lifestyle, goals, and future remain secure in case of unexpected events. Savings can get exhausted, but insurance provides a guaranteed safety net." },
    { question: "How much Life or Term Insurance coverage should I take?", answer: "A general thumb rule is 10–15 times your annual income or enough to cover: Family’s monthly expenses for at least 10 years. Ongoing loans (home, education, personal, etc.). Future financial goals (children’s education, marriage, retirement for spouse). At SK Advizors, we do a personalized needs analysis to suggest the right coverage amount." },
    { question: "What is not covered under Health Insurance?", answer: "Some common exclusions are:\nPre-existing diseases (during waiting period).\nCosmetic or non-medical treatments.\nSelf-inflicted injuries.\nCertain conditions within the initial 30–90 days of the policy.\nExact exclusions vary by policy and insurer, so we guide you in choosing the most suitable plan." },
    { question: "Can I get tax benefits on Insurance?", answer: "Yes ✅\nLife & Term Insurance premiums: Deduction under Section 80C.\nHealth Insurance premiums: Deduction under Section 80D (up to ₹25,000 for self/family, and an additional ₹25,000–₹50,000 for parents)." },
    { question: "What happens if I stop paying premiums?", answer: "For Term Insurance: The policy lapses, and you lose coverage.\nFor certain Life Insurance plans: The policy may acquire a reduced paid-up value or lapse.\nWe always ensure our clients are guided on premium commitments before recommending a plan." },
    { question: "Should I buy individual health insurance if my employer provides group health coverage?", answer: "Yes. Employer policies often end when you change jobs and may not provide adequate coverage. Having an individual or family health plan ensures continuous and sufficient protection." },
    { question: "How do I decide which insurance policy is right for me?", answer: "That’s where SK Advizors comes in—we analyze your:\nFamily needs.\nCurrent financial situation.\nFuture goals.\nExisting coverage (if any).\nThen, we recommend the most suitable and cost-effective plan for you." },
];

const insuranceTypes = [
    { title: "Life Insurance", icon: "🌱", detail: "The foundation of a financial plan. Ensures your family’s security, settles liabilities, and supports future goals." },
    { title: "Term Insurance", icon: "🛡️", detail: "Pure protection plan offering the highest coverage at the lowest premium. Crucial for income replacement." },
    { title: "Health Insurance", icon: "🏥", detail: "Covers hospitalization and treatments, preventing medical emergencies from exhausting your savings." },
    { title: "Personal Accident & Critical Illness", icon: "💪", detail: "Add-ons for extra protection against loss of income due to disability or high-cost treatments." },
];

const valueProps = [
    { text: "Personalized guidance—not just products.", icon: "🧑‍💼" },
    { text: "Complete review of existing policies to avoid over/under-insurance.", icon: "🔍" },
    { text: "Focus on cost-effective, adequate coverage tailored to your situation.", icon: "🎯" },
    { text: "Transparent advice that always puts your family’s security first.", icon: "🤝" },
];

const InsurancePlanningPage = () => {
    const [openFaqs, setOpenFaqs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // --- Theme Configuration ---
    const primaryColor = 'text-orange-600'; // Standard primary accent color
    const accentColor = 'text-blue-800'; // Blue accent (specific to this page)
    const accentBg = 'bg-blue-50';
    const accentBorder = 'border-blue-400';
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
                <title>Insurance Planning - Life, Term, Health | SK Advizors</title>
                <meta name="description" content="Secure your family's financial future with personalized Life, Term, and Health Insurance solutions. SK Advizors provides needs analysis, policy review, and tax optimization guidance." />
                <meta name="keywords" content="Insurance Planning, Life Insurance, Term Insurance, Health Insurance, SK Advizors, Risk Management, Coverage, Tax Benefits, Section 80C, Section 80D" />
                <meta property="og:title" content="Insurance Planning - Complete Financial Security | SK Advizors" />
            </Head>

            <main className={`min-h-screen bg-gradient-to-br ${lightGradient} pt-16 font-sans`}>

                {/* 2. Consistent Sticky Header */}
                <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 
                    bg-white/90 backdrop-blur-md rounded-b-xl shadow-lg fixed top-0 left-0 right-0 z-40 transition-all duration-300">
                    
                    <h1 className={`text-xl sm:text-3xl font-bold ${primaryColor} hover:text-orange-700`}>
                        Insurance Planning
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
                    <div className="relative overflow-hidden rounded-xl shadow-2xl h-48 sm:h-64 lg:h-80 bg-blue-600">
                        <img
                            src="/images/insurance1.jpg"
                            alt="Visual representing Life and Health Insurance coverage and protection"
                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
                                Your Shield Against Uncertainty
                            </h2>
                        </div>
                    </div>
                </div>

                {/* 4. Main Content Section (Grid & Card Layout) */}
                <section
                    id="insurance-details"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
                >
                    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                        Insurance Planning – Essential for <span className={accentColor}>Financial Security</span>
                    </h2>
                    <article className="prose max-w-none mx-auto text-gray-700">
                        
                        {/* Key Feature Box - Introduction */}
                        <div className={`bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg mb-8`}>
                            <p className="font-semibold text-lg text-blue-800">
                                Insurance is the **risk management foundation** of your financial plan. It ensures that regardless of life's unexpected events (illness, disability, or death), your family's lifestyle and financial goals remain completely protected.
                            </p>
                        </div>

                        {/* Insurance Types - Card Grid */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-8`}>
                            The Four Pillars of Protection
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {insuranceTypes.map((item, index) => (
                                <div key={index} className={`p-4 ${accentBg} rounded-lg shadow-sm ${accentBorder} border-t-4 hover:shadow-md transition-shadow duration-300`}>
                                    <span className={`text-2xl ${accentColor}`}>{item.icon}</span>
                                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Why Choose SK Advizors - List with Icons/Cards */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Why SK Advizors for Your Insurance Needs?
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            {valueProps.map((item, index) => (
                                <div key={index} className="p-5 border-l-4 border-orange-400 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                        <span className="text-orange-500 mr-2 text-xl">{item.icon}</span> {item.text}
                                    </h4>
                                </div>
                            ))}
                        </div>
                        
                        {/* Tax Benefit Summary */}
                        <h3 className={`font-bold text-2xl ${accentColor} border-b pb-2 mb-4 mt-10`}>
                            Tax Benefits: Investing in Security
                        </h3>
                        <ul className="list-none space-y-3 pl-0 mt-4">
                            <li className="flex items-center text-gray-700">
                                <span className="text-green-500 mr-2 font-bold text-lg">›</span> **Section 80C**: Life & Term premiums qualify for tax deduction.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-green-500 mr-2 font-bold text-lg">›</span> **Section 80D**: Health Insurance premiums offer deductions for self, family, and parents.
                            </li>
                        </ul>
                        
                    </article>
                </section>

                {/* 5. FAQ Section (Consistent Accordion Style) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                        Insurance Planning – <span className={accentColor}>FAQs</span>
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    className={`w-full px-5 py-4 text-left focus:outline-none flex justify-between items-center ${accentBg} hover:bg-blue-100 transition-colors duration-200`}
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

export default InsurancePlanningPage;