// rafce
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const options = [
    {
        id: 1,
        title: "Mutual Funds",
        description: "Diversified, professionally managed investments suited for different goals and horizons.",
        image: "/images/mutual funds.jpg",
        link: "/investment-options/mutual-funds",
    },
    {
        id: 2,
        title: "Insurance",
        description: "Financial protection and future security for you and your family.",
        image: "/images/insurance.jpg",
        link: "/investment-options/insurance",
    },
    {
        id: 3,
        title: "PMS / AIF",
        description: "Tailored strategies for investors seeking high-growth or alternative opportunities.",
        image: "/images/pmf.jpg",
        link: "/investment-options/pmf-aif",
    },
    {
        id: 4,
        title: "Direct Equity",
        description: "Ownership in companies for long-term wealth creation.",
        image: "/images/direct equity.jpg",
        link: "/investment-options/direct-equity",
    },
    {
        id: 5,
        title: "Fixed Deposits",
        description: "Secure, guaranteed returns for conservative investors.",
        image: "/images/fixed deposit.jpg",
        link: "/investment-options/fixed-deposits",
    },
    {
        id: 6,
        title: "Bonds",
        description: "Steady income instruments with lower volatility than equities.",
        image: "/images/bonds.webp",
        link: "/investment-options/bonds",
    },
    {
        id: 7,
        title: "Smallcase",
        description: "Curated stock portfolios built around themes and market trends.",
        image: "/images/small case.jpg",
        link: "/investment-options/smallcase",
    },
    {
        id: 8,
        title: "Liquiloans",
        description: "Innovative lending products with attractive fixed returns.",
        image: "/images/liquiloans.webp",
        link: "/investment-options/liquiloans",
    },
];

const fadeUpAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const InvestmentOptions = () => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollStep, setScrollStep] = useState(350); 

    const calculateScrollStep = () => {
        if (scrollRef.current && scrollRef.current.firstElementChild) {
            const card = scrollRef.current.firstElementChild;
            const width = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);
            setScrollStep(width);
            return width;
        }
        return 350; 
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;
        const initialStep = calculateScrollStep();

        const onScroll = () => {
            const currentStep = calculateScrollStep() || initialStep;
            const scrollLeftPos = scrollContainer.scrollLeft;
            const index = Math.round(scrollLeftPos / currentStep);
            setCurrentIndex(index);
        };

        const handleResize = () => {
            calculateScrollStep();
            onScroll();
        };

        scrollContainer.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        onScroll();

        return () => {
            scrollContainer.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const handleDotClick = (idx) => {
        if (scrollRef.current) {
            const step = calculateScrollStep();
            scrollRef.current.scrollTo({ left: idx * step, behavior: 'smooth' });
        }
    };

    return (
        <motion.section
            id="investment-options"
            className="max-w-7xl mx-auto px-6 py-14"
            variants={fadeUpAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-4xl font-extrabold text-orange-600 mb-2 text-center tracking-wide">
                Explore Our Investment Options
            </h2>
            <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                Discover a variety of investment products tailored to your financial goals. Each option is designed with care to maximize your wealth potential.
            </p>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                {options.map(({ id, title, description, image, link }) => (
                    <motion.div
                        key={id}
                        className="group bg-white rounded-lg shadow-sm border border-gray-200 hover:border-orange-400 transition duration-300 transform hover:-translate-y-2 hover:shadow-md flex flex-col h-[400px]"
                        variants={fadeUpAnimation}
                    >
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-48 object-cover rounded-t-lg"
                            draggable={false}
                        />
                        <div className="p-3 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-blue-700 group-hover:text-orange-600 transition-colors mb-3">
                                {title}
                            </h3>
                            <p className="text-gray-700 text-base flex-grow">{description}</p>
                            <div className="mt-4">
                                <Link
                                    href={link}
                                    aria-label={`Read more about ${title}`}
                                    className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:underline hover:text-orange-700 transition"
                                >
                                    Read More
                                    <FaArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile horizontal scroll with nav buttons on top */}
            <div className="md:hidden flex flex-col items-center">
                {/* Navigation Buttons Above Card Area */}
                <div className="flex justify-end items-center w-full px-6 mb-4 space-x-3">
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white rounded-lg shadow-sm hover:bg-orange-100 active:bg-orange-200 text-orange-600"
                    >
                        <FiChevronLeft size={22} />
                    </button>
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white rounded-lg shadow-sm hover:bg-orange-100 active:bg-orange-200 text-orange-600"
                    >
                        <FiChevronRight size={22} />
                    </button>
                </div>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth w-full px-6"
                    style={{ scrollPaddingLeft: '1.5rem' }}
                >
                    {options.map(({ id, title, description, image, link }) => (
                        <motion.div
                            key={id}
                            className="mr-4 min-w-[90vw] max-w-[430px] bg-white rounded-lg shadow-sm border border-gray-200 hover:border-orange-400 snap-start transition duration-300 transform hover:-translate-y-1 hover:shadow-md flex flex-col h-[400px]"
                            variants={fadeUpAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            style={{ flex: "0 0 90vw" }}
                        >
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                className="w-full h-48 object-cover rounded-t-lg"
                                draggable={false}
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed flex-grow">{description}</p>
                                <div className="mt-4">
                                    <Link
                                        href={link}
                                        aria-label={`Read more about ${title}`}
                                        className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:underline hover:text-orange-700 transition"
                                    >
                                        Read More
                                        <FaArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                    {options.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Show card ${idx + 1}`}
                            onClick={() => handleDotClick(idx)}
                            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-orange-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default InvestmentOptions;
