import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const BLUE = "text-blue-600";
const ORANGE_BG = "bg-orange-100";
const WHITE_CARD = "bg-white";
const BORDER_RADIUS = "rounded-lg";

function Tooltip({ text }) {
  return (
    <span className="relative group cursor-help text-blue-600 ml-1">
      ⓘ
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-blue-50 text-blue-900 text-xs rounded shadow px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-medium">
        {text}
      </span>
    </span>
  );
}

const SIPCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    investmentAmount = 0,
    expectedInterestRate = 0,
    durationYears = 0,
  } = inputData;

  const [errors, setErrors] = useState({});
  const [sipAmount, setSipAmount] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (investmentAmount < 0 || investmentAmount > 10000000)
      newErrors.investmentAmount = 'Value between 0-10,000,000';
    if (expectedInterestRate < 0 || expectedInterestRate > 20)
      newErrors.expectedInterestRate = 'Value between 0-20';
    if (durationYears < 0 || durationYears > 50)
      newErrors.durationYears = 'Value between 0-50';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSipAmount(0);
      setFutureValue(0);
      setEarnings(0);
      return;
    }

    if (durationYears === 0) {
      setSipAmount(0);
      setFutureValue(0);
      setEarnings(0);
      return;
    }

    // SIP calculation logic:
    // futureValue = P * [((1 + r)^n - 1) / r] * (1 + r)
    // where P = monthly investment, r = monthly interest rate, n = total months
    // Rearranged to find P (monthly SIP):
    // P = investmentAmount / (n) monthly contributions
    // But user input is total investmentAmount (one-time?), to get SIP monthly:
    // For this implementation assume the investmentAmount is total invested amount (monthly * n)
    // We calculate monthly SIP = investmentAmount / totalMonths
    // Calculate future value based on monthly SIP instead

    const monthlyInterestRate = expectedInterestRate / 100 / 12;
    const totalMonths = durationYears * 12;

    // Monthly SIP amount = investmentAmount / totalMonths
    const monthlySIP = investmentAmount / totalMonths;

    // Future Value of SIP (compound interest)
    const fv = monthlySIP * ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate);

    setSipAmount(monthlySIP);
    setFutureValue(fv);
    setEarnings(fv - investmentAmount);

  }, [investmentAmount, expectedInterestRate, durationYears]);

  // Prepare donut chart data
  const chartData = {
    labels: ['Invested Amount', 'Your Earnings'],
    datasets: [
      {
        data: [investmentAmount, earnings > 0 ? earnings : 0],
        backgroundColor: ['#fb923c', '#2563eb'], // Orange and Blue colors
        hoverBackgroundColor: ['#f97316', '#1e40af'],
      }
    ],
  };

  if (inputMode === 'input') {
    return (
      <div className={`${WHITE_CARD} ${BORDER_RADIUS} shadow p-6 space-y-8`}>
        {[
          {
            label: "Investment Amount (Rs.)",
            name: "investmentAmount",
            value: investmentAmount,
            min: 0,
            max: 10000000,
            step: 1000,
            error: errors.investmentAmount,
            tooltip: "Total investment you plan to invest over the duration.",
          },
          {
            label: "Expected Interest Rate (%)",
            name: "expectedInterestRate",
            value: expectedInterestRate,
            min: 0,
            max: 20,
            step: 0.1,
            error: errors.expectedInterestRate,
            tooltip: "Expected yearly return rate on your investments.",
          },
          {
            label: "Duration (years)",
            name: "durationYears",
            value: durationYears,
            min: 0,
            max: 50,
            step: 1,
            error: errors.durationYears,
            tooltip: "Duration for your SIP investment in years.",
          }
        ].map(({ label, name, value, min, max, step, error, tooltip }) => (
          <div key={name}>
            <label className="flex items-center gap-1 font-semibold text-blue-900 mb-1">
              {label} <Tooltip text={tooltip} />
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={e => onInputChange({ ...inputData, [name]: Number(e.target.value) })}
                className={`${accentColor} flex-grow`}
              />
              <input
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={e => {
                  let val = Number(e.target.value);
                  if (val < min) val = min;
                  else if (val > max) val = max;
                  onInputChange({ ...inputData, [name]: val });
                }}
                className={`w-24 p-2 border ${BORDER_RADIUS} ${inputBorder} ${error ? 'border-red-400' : ''}`}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${ORANGE_BG} ${BORDER_RADIUS} shadow-inner p-6 text-blue-900 font-semibold space-y-6`}>
      <h3 className={`${BLUE} text-xl font-bold`}>Your Results</h3>
      <div className="grid grid-cols-2 gap-6 text-lg">
        <div>
          <span className="block text-blue-800 font-medium mb-1">SIP Amount</span>
          <span>₹ {sipAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Expected Interest Rate</span>
          <span>{expectedInterestRate.toFixed(2)}%</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Duration</span>
          <span>{durationYears} years</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Your Investment</span>
          <span>₹ {investmentAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Your Earnings</span>
          <span>₹ {earnings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          {/* Empty cell for grid alignment */}
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default SIPCalculator;
