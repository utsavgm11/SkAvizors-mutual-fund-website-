'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
};

const Hero = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center"
      aria-label="Hero Section - financial advisory and investment solutions"
    >
      <img
        src="/images/hero.jpg"
        alt="Financial advisory growth and investment charts"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-50"
        loading="eager"
        priority="true"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-orange-500 mb-2"
          variants={itemVariants}
        >
          Your Trusted Partner
        </motion.h1>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-orange-500 mb-6"
          variants={itemVariants}
        >
          in Financial Growth
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md text-white mb-10"
          variants={itemVariants}
        >
          Empowering you with expert advice and tailored investment solutions to secure your financial future.
        </motion.p>
        <motion.nav
          aria-label="Hero Call to Actions"
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('calculators')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-orange-500 transition transform duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('financial-solutions')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold shadow hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-orange-300 transition transform duration-300"
          >
            Explore Services
          </motion.button>
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default Hero;
