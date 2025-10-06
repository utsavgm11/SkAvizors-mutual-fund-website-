'use client'
import React, { useState, useRef } from 'react';
import {
  FaGraduationCap, FaRing, FaHome, FaCar, FaPlane, FaWheelchair,
  FaCalculator, FaBullseye, FaDownload, FaShareAlt,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import html2canvas from 'html2canvas';

import ChildEducationCalculator from './calculators/ChildEducationCalculator';
import ChildWeddingCalculator from './calculators/ChildWeddingCalculator';
import DreamHomeCalculator from './calculators/DreamHomeCalculator';
import DreamCarCalculator from './calculators/DreamCarCalculator';
import DreamVacationCalculator from './calculators/DreamVacationCalculator';
import RetirementCalculator from './calculators/RetirementCalculator';
import SipCalculator from './calculators/SipCalculator';
import CustomGoalCalculator from './calculators/CustomGoalCalculator';


const pastelOrangeBg = 'bg-orange-50';
const pastelOrangeButton = 'bg-orange-400 hover:bg-orange-500 text-white';
const pastelOrangeAccent = 'text-orange-500';
const accentBlueText = 'text-blue-800';


const calculators = [
  { id: 'childEducation', label: 'Child Education', icon: <FaGraduationCap />, component: ChildEducationCalculator },
  { id: 'childWedding', label: 'Child Wedding', icon: <FaRing />, component: ChildWeddingCalculator },
  { id: 'dreamHome', label: 'Dream Home', icon: <FaHome />, component: DreamHomeCalculator },
  { id: 'dreamCar', label: 'Dream Car', icon: <FaCar />, component: DreamCarCalculator },
  { id: 'dreamVacation', label: 'Dream Vacation', icon: <FaPlane />, component: DreamVacationCalculator },
  { id: 'retirement', label: 'Retirement', icon: <FaWheelchair />, component: RetirementCalculator },
  { id: 'sip', label: 'SIP', icon: <FaCalculator />, component: SipCalculator },
  { id: 'customGoal', label: 'Custom Goal', icon: <FaBullseye />, component: CustomGoalCalculator },
];


export default function CalculatorSection() {
  const [activeTab, setActiveTab] = useState(calculators[0].id);
  const [inputData, setInputData] = useState({});
  const tabScroller = useRef();
  const calculatorRef = useRef();

  const scrollTabs = (dir) => {
    if (tabScroller.current) {
      tabScroller.current.scrollBy({ left: dir * 150, behavior: 'smooth' });
    }
  };

  const handleDownload = async () => {
    if (calculatorRef.current) {
      const canvas = await html2canvas(calculatorRef.current);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `calculator-result-${activeTab}.png`;
      link.click();
    }
  };

  const handleShare = async () => {
    if (!navigator.canShare) {
      alert('Your browser does not support sharing files.');
      return;
    }

    if (calculatorRef.current) {
      const canvas = await html2canvas(calculatorRef.current);
      canvas.toBlob(blob => {
        const file = new File([blob], `calculator-result-${activeTab}.png`, { type: 'image/png' });

        if (navigator.canShare({ files: [file] })) {
          navigator.share({
            files: [file],
            title: 'Calculator Result',
            text: `Check out my ${calculators.find(c => c.id === activeTab)?.label} calculator result!`,
          }).catch(() => alert('Sharing was cancelled or failed.'));
        } else {
          const waMsg = encodeURIComponent(
            `Check out my ${calculators.find(c => c.id === activeTab)?.label} calculator result!`
          );
          window.open(`https://wa.me/?text=${waMsg}`, '_blank');
        }
      });
    }
  };

  const ActiveCalculator = calculators.find(c => c.id === activeTab)?.component;

  return (
    <section ref={calculatorRef} id="calculators" className="max-w-7xl mx-auto p-4">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-3">Plan Your Dreams</h1>
        <p className="text-gray-600">Plan your financial goals with our easy-to-use calculators.</p>
      </div>

      {/* Tabs Section */}
      <div className="mb-8">
        {/* Mobile Tabs - Horizontal Scroll with Arrows */}
        <div className="flex items-center md:hidden relative">
          <button
            className="p-2 text-orange-400"
            onClick={() => scrollTabs(-1)}
            aria-label="Scroll tabs left"
          >
            <FaChevronLeft size={24} />
          </button>
          <div
            ref={tabScroller}
            className="flex gap-2 overflow-x-auto scrollbar-hide flex-grow px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {calculators.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`min-w-[110px] flex flex-col items-center justify-center gap-1 border rounded-lg p-3 cursor-pointer scrollSnapAlign transition
                  ${activeTab === id
                    ? 'bg-orange-100 border-orange-400 text-orange-500'
                    : 'border-gray-300 text-gray-600 hover:bg-orange-50'
                  }`}
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
          <button
            className="p-2 text-orange-400"
            onClick={() => scrollTabs(1)}
            aria-label="Scroll tabs right"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Desktop Tabs - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-8 gap-4">
          {calculators.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center justify-center gap-2 border rounded p-4 cursor-pointer transition
                ${activeTab === id
                  ? 'bg-orange-100 border-orange-400 text-orange-500'
                  : 'border-gray-300 text-gray-700 hover:bg-orange-50'
                }`}
            >
              <span className="text-3xl">{icon}</span>
              <span className="text-center font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Container */}
      {ActiveCalculator && (
        <div className={`${pastelOrangeBg} rounded-2xl shadow-md px-4 py-6 flex flex-col gap-5 md:flex-row md:p-8`}>
          {/* Output - Top on mobile, Left on desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-none mb-2">
            <ActiveCalculator
              inputMode="output"
              inputData={inputData}
              accentColor={pastelOrangeAccent}
            />
          </div>
          {/* Input - Bottom on mobile, Right on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-none">
            <ActiveCalculator
              inputMode="input"
              inputData={inputData}
              onInputChange={setInputData}
              inputBorder="border-orange-300 focus:border-orange-500"
              accentColor={pastelOrangeAccent}
            />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          type="button"
          className="ml-6 gap-2 px-6 py-3 items-center flex bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 transition font-semibold flex-shrink-0"
          onClick={handleDownload}
        >
          <FaDownload /> Download Result
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 rounded-xl shadow transition bg-white text-orange-500 hover:bg-orange-200 border border-orange-300"
          onClick={handleShare}
        >
          <FaShareAlt /> Share
        </button>
      </div>
    </section>
  );
}
