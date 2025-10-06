// rafce
'use client';
import React, { useState, useEffect } from "react";
import ModalForm from "@/components/ModalForm";
import Link from "next/link";

// --- Helper Icon Components (Using Local Images from public/images) ---
// Note: These must be functional components to accept the 'className' prop for sizing and hover effects.

const IconHome = (props) => (
  <img
    src="/images/home.svg" 
    alt="Home"
    // The className passed via props handles sizing (w-6 h-6) and colors (group-hover:text-orange-600)
    className={props.className} 
    draggable={false}
  />
);

const IconMail = (props) => (
  <img
    src="/images/contact.svg" // Using contact.svg as the mail/message icon
    alt="Contact"
    className={props.className}
    draggable={false}
  />
);

const IconWhatsApp = (props) => (
  <img
    src="/images/whatsapp.svg" 
    alt="WhatsApp"
    className={props.className}
    draggable={false}
  />
);

// --- Utility Data for Modern Card/List Display ---

const investmentSteps = [
    { number: 1, title: "Understanding Your Financial Picture", description: "We analyze your cash flow, existing assets, net worth, and goals (short, medium, long-term) to ensure your portfolio reflects your real priorities." },
    { number: 2, title: "Risk Profiling – Knowing You Better", description: "We determine your comfort with risk (Conservative, Balanced, Aggressive) to ensure your portfolio matches your current situation, reviewed regularly." },
    { number: 3, title: "Selecting the Right Products", description: "We recommend regulated, goal-aligned, and tax-efficient products tailored for you, from Mutual Funds to Direct Equity and Bonds." },
    { number: 4, title: "Asset Allocation – Building Balance", description: "We spread your money across different asset classes (equity, debt, etc.) to optimize growth while reducing overall risk." },
    { number: 5, title: "Review and Rebalance", description: "We proactively monitor and adjust your portfolio as your life and market conditions change, keeping you on track for long-term goals." },
];

const productTypes = [
    { title: "Mutual Funds", detail: "Diversified, professionally managed investments for various goals and horizons." },
    { title: "Insurance", detail: "Protecting your family’s financial future and providing secure savings options." },
    { title: "PMS / AIF", detail: "Tailored strategies for high-net-worth investors seeking specialized growth." },
    { title: "Direct Equity", detail: "Ownership in top companies for long-term, high-potential wealth creation." },
    { title: "Fixed Deposits & Bonds", detail: "Secure, guaranteed returns and steady income with lower volatility." },
    { title: "Smallcase & Liquiloans", detail: "Innovative market themes and fixed-return lending products for diversification." },
];


const faqs = [
    { question: "What is an investment portfolio?", answer: "An investment portfolio is a collection of financial assets like mutual funds, insurance, PMS/AIF, direct equity, fixed deposits, bonds, smallcase, and liquiloans that are strategically selected to meet your financial goals while managing risk." },
    { question: "Why do I need a diversified investment portfolio?", answer: "Diversification reduces risk by spreading your investments across different asset classes. At SK Advizors, we ensure your portfolio balances growth, safety, and liquidity, so you’re not dependent on just one type of investment." },
    { question: "How do you decide which investments go into my portfolio?", answer: "We analyze your goals, risk appetite, and time horizon. Based on that, we recommend the right mix of investment options tailored for you—whether you want wealth creation, tax savings, or steady income." },
    { question: "How often should I review my portfolio?", answer: "A portfolio should ideally be reviewed at least once or twice a year, or when there’s a major life or market change. SK Advizors provides regular reviews and updates so your portfolio stays aligned with your goals." },
    { question: "Can I start with a small investment amount?", answer: "Yes, you don’t need a huge sum to begin investing. Options like mutual funds and bonds allow you to start small and gradually grow your portfolio with disciplined investments." },
    { question: "Are my investments safe?", answer: "Your money is always invested through trusted and regulated institutions. At SK Advizors, we focus on transparency and long-term security, ensuring your investments are always in your name." },
    { question: "Do you provide continuous support after I invest?", answer: "Yes, we believe in building strong client relationships. We offer ongoing guidance, portfolio rebalancing, and market insights to make sure your money works effectively for you." },
];


const InvestmentPortfolioPage = () => {
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
                    Investment Portfolio
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
                        src="/images/investment-1.jpg"
                        alt="Investment Portfolio - Building long-term wealth"
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                        
                    </div>
                </div>
            </div>

            {/* Main Content Section - Card Style */}
            <section
                id="financial-solutions"
                className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 my-10 border-t-4 border-orange-500"
            >
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10">
                    Investment Portfolio – Guided by <span className="text-orange-600">SK Advizors</span>
                </h1>
                <article className="prose max-w-none mx-auto text-gray-700">
                    
                    {/* Key Feature Box - Introduction */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg my-6">
                        <p className="font-semibold text-lg text-blue-800">
                            At SK Advizors, investing is not only about chasing returns—it’s about building a **roadmap** that secures your future, aligns with your goals, and grows with you over time. Our focus is to design portfolios that balance growth, safety, and liquidity.
                        </p>
                    </div>

                    {/* Our Process Steps - Card Grid (5 steps, responsive grid) */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-8">
                        Our 5-Step Investment Portfolio Process
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {investmentSteps.map((step, index) => (
                            <div key={index} className="p-5 bg-gray-50 rounded-lg shadow-sm border-t-4 border-blue-400 hover:shadow-md transition-shadow duration-300">
                                <div className="text-2xl font-extrabold text-orange-600 mb-2">{step.number}.</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Detailed Product List (3-column Card Style) */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
                        A Wide Range of Investment Solutions
                    </h2>
                    <p>
                        There is no “one size fits all” in investing. We evaluate products that are regulated, goal-aligned, and efficient in terms of liquidity and taxation. Our offerings include:
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {productTypes.map((item, index) => (
                            <div key={index} className="p-5 border-l-4 border-orange-400 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                                    <span className="text-orange-500 mr-2 text-xl">🚀</span> {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Why Partner with SK Advizors */}
                    <h2 className="font-bold text-2xl text-orange-600 border-b pb-2 mb-4 mt-10">
                        Why Partner with SK Advizors?
                    </h2>
                    <p>When you invest with SK Advizors, you gain more than financial products—you gain a trusted partner. We stand for:</p>
                    <ul className="list-none space-y-3 pl-0 mt-4">
                        <li className="flex items-center text-gray-700">
                            <span className="text-blue-500 mr-2 font-bold text-lg">★</span> **Personalized strategies** crafted for your unique journey.
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="text-blue-500 mr-2 font-bold text-lg">★</span> **Transparency** with no jargon or hidden motives.
                        </li>
                        <li className="flex items-center text-gray-700">
                            <span className="text-blue-500 mr-2 font-bold text-lg">★</span> **Ongoing support** through regular reviews and open communication.
                        </li>
                    </ul>
                    <p className="mt-8 text-lg font-medium text-gray-800">
                        Our mission is to ensure your money works as hard as you do, giving you both growth and peace of mind.
                    </p>

                </article>
            </section>

            {/* FAQ Section - Clean Accordion Style */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-white rounded-2xl shadow-xl mt-10 p-6 sm:p-10 lg:p-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
                    Investment Portfolio – <span className="text-orange-600">FAQs</span>
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
export default InvestmentPortfolioPage;