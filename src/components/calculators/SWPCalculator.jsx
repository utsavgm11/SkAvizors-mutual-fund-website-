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

const SWPCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    investmentAmount = 0, // Total initial investment
    withdrawalAmount = 0, // Monthly withdrawal
    expectedInterestRate = 0, // Return per annum
    durationYears = 0, // Time period
  } = inputData;

  const [errors, setErrors] = useState({});
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (investmentAmount < 0 || investmentAmount > 10000000)
      newErrors.investmentAmount = 'Value between 0-10,000,000';
    if (withdrawalAmount < 0 || withdrawalAmount > 500000)
      newErrors.withdrawalAmount = 'Value between 0-500,000';
    if (expectedInterestRate < 0 || expectedInterestRate > 30)
      newErrors.expectedInterestRate = 'Value between 0-30';
    if (durationYears < 0 || durationYears > 50)
      newErrors.durationYears = 'Value between 0-50';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0 || durationYears === 0 || investmentAmount === 0) {
      setTotalWithdrawn(0);
      setFinalValue(0);
      return;
    }

    // SWP Calculation Logic
    const P = investmentAmount;
    const W = withdrawalAmount;
    const i = expectedInterestRate / 100 / 12; // Monthly interest
    const n = durationYears * 12; // Total months

    // Remaining Balance Formula: 
    // FV = P(1+i)^n - W[((1+i)^n - 1) / i]
    const fv = (P * Math.pow(1 + i, n)) - (W * (Math.pow(1 + i, n) - 1) / i);
    const withdrawn = W * n;

    setTotalWithdrawn(withdrawn);
    setFinalValue(fv > 0 ? fv : 0); // Balance cannot be negative

  }, [investmentAmount, withdrawalAmount, expectedInterestRate, durationYears]);

  const chartData = {
    labels: ['Total Withdrawal', 'Final Value'],
    datasets: [
      {
        data: [totalWithdrawn, finalValue > 0 ? finalValue : 0],
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
            step: 10000,
            error: errors.investmentAmount,
            tooltip: "The total amount you are investing initially.",
          },
          {
            label: "Withdrawal Per Month (Rs.)",
            name: "withdrawalAmount",
            value: withdrawalAmount,
            min: 0,
            max: 500000,
            step: 500,
            error: errors.withdrawalAmount,
            tooltip: "The amount you wish to withdraw every month.",
          },
          {
            label: "Expected Return Rate (%)",
            name: "expectedInterestRate",
            value: expectedInterestRate,
            min: 0,
            max: 30,
            step: 0.1,
            error: errors.expectedInterestRate,
            tooltip: "Expected annual return rate on the remaining balance.",
          },
          {
            label: "Time Period (years)",
            name: "durationYears",
            value: durationYears,
            min: 0,
            max: 50,
            step: 1,
            error: errors.durationYears,
            tooltip: "The duration for which you want to withdraw money.",
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
          <span>₹ {investmentAmount.toLocaleString()}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Total Withdrawal</span>
          <span className="text-orange-600">₹ {totalWithdrawn.toLocaleString()}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Duration</span>
          <span>{durationYears} years</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Final Value</span>
          <span className="text-blue-600">₹ {Math.round(finalValue).toLocaleString()}</span>
        </div>
        <div className="col-span-2">
          <p className="text-sm font-normal italic text-blue-700">
            *This is the estimated balance left in your account after all withdrawals.
          </p>
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default SWPCalculator;