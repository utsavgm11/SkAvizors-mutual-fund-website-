import React from "react";

const solutions = [
  {
    title: "Investment Portfolio",
    description: "Goal-oriented strategies for lasting growth and security.",
    icon: "/images/investment-portfolio.svg",
    link: "/financial-solutions/investment-portfolio",
  },
  {
    title: "Wealth Basket",
    description: "Diversified plans to build, manage, and protect assets.",
    icon: "/images/wealth-basket.svg",
    link: "/financial-solutions/wealth-basket",
  },
  {
    title: "Insurance Planning",
    description: "Comprehensive coverage to safeguard your future.",
    icon: "/images/insurance.svg",
    link: "/financial-solutions/insurance",
  },
];

const FinancialSolutions = () => {
  return (
    <section id="financial-solutions" className="py-12 px-4 md:px-0 bg-white">
      {/* Section intro */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-3">
          Discover Our Financial Solutions
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Personalized expertise, optimized for your financial growth, security,
          and peace of mind.
        </p>
      </div>

      {/* Grid of solution cards */}
      <div className="max-w-5xl mx-auto grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((sol) => (
          <a
            href={sol.link}
            key={sol.title}
            className="group bg-white border border-orange-100 shadow-md rounded-2xl p-7 flex flex-col items-center text-center hover:border-orange-300 cursor-pointer transition-colors duration-200"
          >
            <img
              src={sol.icon}
              alt={`${sol.title} Icon`}
              className="h-14 w-14 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="font-bold text-lg md:text-xl text-blue-700 mb-2 group-hover:text-orange-600 transition-colors">
              {sol.title}
            </h3>
            <p className="text-gray-500 mb-4">{sol.description}</p>
            <span className="ml-6 px-5 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 transition font-semibold flex-shrink-0">
            Explore
            </span>

          </a>
        ))}
      </div>
    </section>
  );
};

export default FinancialSolutions;
