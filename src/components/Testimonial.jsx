'use client';

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "/images/testimonials-1.jpeg",
    name: "Ghanshyam Singh",
    role: "Regional Key Account Manager Maharashtra & Ahmedabad",
    text:
      "Shrikant is not only a good financial adviser but also a wonderful human being. His vision is long-term, just like a mutual fund—steady, consistent, and growth-oriented.",
  },
  {
    img: "/images/testimonials-2.png",
    name: "Neeraj Mondia",
    role: "AGM Pan India Datacentre Operations Tata Projects",
    text:
      "I highly value Shrikant’s professionalism, commitment, and customer-first approach, and I strongly recommend him to anyone seeking expert guidance in investments and financial planning.",
  },
  {
    img: "/images/testimonials-3.png",
    name: "Soundarya K",
    role: "Business Analyst",
    text:
      "Excellent support and guidance on sip clear communication and smooth process always available for guidance ,Bangalore",
  },
  {
    img: "/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Web Consultant",
    text:
      "Integrating Tableau with the website was seamless. The result is a professional, responsive platform that presents complex data beautifully.",
  },
  {
    img: "/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    role: "Home Improvement Expert",
    text:
      "From data analysis to visual storytelling, everything was on point. The story section clearly communicates how renovation impacts property value.",
  },
];

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section  id="testimonials"
    className="relative bg-white py-20 overflow-hidden">
      {/* Heading and subheading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-3">Testimonials</h2>
        <p className="text-gray-600 text-lg">
          See what our clients have to say about our services and their experience.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={-60}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: -60,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pt-6 pb-12"
          aria-label="Testimonials Slider"
        >
          {testimonials.map(({ img, name, role, text }, idx) => {
            const isActive = idx === activeIndex;
            return (
              <SwiperSlide
                key={idx}
                className="flex justify-center"
                style={{ zIndex: isActive ? 20 : 10 }}
              >
                <div
                  className={`flex flex-col items-center justify-center w-[500px] min-h-[380px] px-5 max-w-full text-center rounded-xl shadow-lg transition-all duration-500
                    ${isActive
                      ? "bg-orange-100 text-gray-900 scale-110 shadow-2xl"
                      : "bg-gray-200/80 text-gray-400 scale-90 opacity-60 backdrop-blur-sm"
                    }`}
                  style={{
                    boxShadow: isActive
                      ? "0 8px 32px rgba(255,186,73,0.25)"
                      : "0 2px 8px rgba(180,180,180,0.08)"
                  }}
                >
                  <img
                    src={img}
                    alt={`${name} photo`}
                    loading="lazy"
                    className="w-20 h-20 mb-4 rounded-full object-cover"
                  />
                  <h3 className={`text-lg font-semibold mb-1 ${isActive ? "text-orange-600" : "text-gray-500"}`}>
                    {name}
                  </h3>
                  {role && (
                    <h4 className={`text-xs mb-2 font-medium ${isActive ? "text-gray-600" : "text-gray-400"}`}>
                      {role}
                    </h4>
                  )}
                  <p className={`${isActive ? "text-gray-800 italic" : "text-gray-500 italic"}`}>“{text}”</p>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination mt-8 text-center" aria-label="Testimonials pagination" />
        </Swiper>

        {/* Custom navigation buttons outside Swiper */}
        <button
          className="custom-swiper-prev absolute top-1/2 left-0 -translate-y-1/2 p-2 text-orange-500 hover:text-orange-600 focus:outline-none z-30"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={32} />
        </button>
        <button
          className="custom-swiper-next absolute top-1/2 right-0 -translate-y-1/2 p-2 text-orange-500 hover:text-orange-600 focus:outline-none z-30"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsPage;
