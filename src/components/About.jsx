'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets, infoList } from '@/data/assets';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardHoverVariants = {
  rest: {
    backgroundColor: "#ffffff",
    color: "#1f2937",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  hover: {
    background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
    color: "#ffffff",
    boxShadow: "0 8px 20px rgba(255, 126, 95, 0.6)",
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const About = () => {
  return (
    <section
      id="about-us"
      className="relative min-h-[700px] px-4 py-14 md:py-28 bg-gradient-to-br from-blue-100 via-white to-orange-100 flex flex-col justify-center"
    >
      {/* Centered Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-12 text-center"
      >
        About Us
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12 md:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* LEFT: Portrait Image */}
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-[40%] md:flex md:justify-center md:h-full"
        >
          <Image
            src={assets.user_image}
            alt="Portfolio portrait"
            width={384}
            height={526}
            className="rounded-3xl object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT: Single paragraph + info cards */}
        <motion.div
          variants={fadeInUp}
          className="md:w-[80%] flex flex-col justify-between bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-lg"
          style={{ minHeight: 526 }} // same height as image for balanced layout
        >
          <motion.p
            variants={fadeInUp}
            className="text-neutral-700 text-lg font-medium leading-relaxed mb-10"
          >
            Empowering Financial Growth with Trust, Strategy, and Results. At S K Advizors, financial advice is about building trust and enabling confident steps toward financial goals. Founded by <span className="font-semibold text-orange-600">Shrikant Krishna</span> in 2018, we’ve grown to manage <span className="text-blue-700 font-bold">300+ clients</span> and more than <span className="font-bold text-orange-600">1000 active mutual fund folios</span>. Our mission is to deliver unbiased, strategic financial guidance — helping clients build and protect long-term wealth with personalized, practical solutions. Together, we’ll grow your wealth with clarity, trust, and results.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-full"
          >
            {infoList.map(({ icon, title, description }, idx) => (
              <motion.div
                key={idx}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHoverVariants}
                className="shadow-md rounded-lg p-4 flex flex-col items-center text-center max-w-[180px] mx-auto cursor-pointer text-neutral-900"
              >
                <Image src={icon} alt={title} width={28} height={28} className="mb-2" />
                <h4 className="text-md font-semibold mb-2">{title}</h4>
                <p className="text-xs">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
