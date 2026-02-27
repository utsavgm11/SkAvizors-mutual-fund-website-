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

const LumpsumCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    investmentAmount = 0, // Total one-time investment
    expectedInterestRate = 0,
    durationYears = 0,
  } = inputData;

  const [errors, setErrors] = useState({});
  const [futureValue, setFutureValue] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (investmentAmount < 0 || investmentAmount > 10000000)
      newErrors.investmentAmount = 'Value between 0-10,000,000';
    if (expectedInterestRate < 0 || expectedInterestRate > 30)
      newErrors.expectedInterestRate = 'Value between 0-30';
    if (durationYears < 0 || durationYears > 50)
      newErrors.durationYears = 'Value between 0-50';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0 || durationYears === 0 || investmentAmount === 0) {
      setFutureValue(0);
      setEarnings(0);
      return;
    }

    // Lumpsum Calculation Logic: FV = P * (1 + r)^n
    const P = investmentAmount;
    const r = expectedInterestRate / 100; // Annual rate
    const n = durationYears;

    const fv = P * Math.pow((1 + r), n);

    setFutureValue(fv);
    setEarnings(fv - P);

  }, [investmentAmount, expectedInterestRate, durationYears]);

  const chartData = {
    labels: ['Invested Amount', 'Your Earnings'],
    datasets: [
      {
        data: [investmentAmount, earnings > 0 ? earnings : 0],
        backgroundColor: ['#fb923c', '#2563eb'],
        hoverBackgroundColor: ['#f97316', '#1e40af'],
      }
    ],
  };

  if (inputMode === 'input') {
    return (
      <div className={`${WHITE_CARD} ${BORDER_RADIUS} shadow p-6 space-y-8`}>
        {[
          {
            label: "Total Investment (Rs.)",
            name: "investmentAmount",
            value: investmentAmount,
            min: 0,
            max: 10000000,
            step: 5000,
            error: errors.investmentAmount,
            tooltip: "The total one-time amount you want to invest.",
          },
          {
            label: "Expected Interest Rate (%)",
            name: "expectedInterestRate",
            value: expectedInterestRate,
            min: 0,
            max: 30,
            step: 0.1,
            error: errors.expectedInterestRate,
            tooltip: "Expected annual return rate on your investment.",
          },
          {
            label: "Duration (years)",
            name: "durationYears",
            value: durationYears,
            min: 0,
            max: 50,
            step: 1,
            error: errors.durationYears,
            tooltip: "Duration for which you will stay invested.",
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
          <span className="block text-blue-800 font-medium mb-1">Total Investment</span>
          <span>₹ {investmentAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Expected Return</span>
          <span>{expectedInterestRate.toFixed(1)}%</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Duration</span>
          <span>{durationYears} years</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Your Earnings</span>
          <span className="text-blue-600">₹ {earnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
        <div className="col-span-2">
          <span className="block text-blue-800 font-medium mb-1">Total Value</span>
          <span className="text-xl">₹ {futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default LumpsumCalculator;