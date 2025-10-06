import React, { useState, useEffect } from 'react';

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

const CustomGoalCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    goalName = '',
    costToday = 0,
    yearsLeft = 0,
    savedAmount = 0,
    inflationRate = 0,
    rateOfReturn = 0
  } = inputData;

  const [errors, setErrors] = useState({});
  const [costFuture, setCostFuture] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (costToday < 0 || costToday > 20000000) newErrors.costToday = 'Value between 0-20,000,000';
    if (yearsLeft < 0 || yearsLeft > 50) newErrors.yearsLeft = 'Value between 0-50';
    if (savedAmount < 0 || savedAmount > 20000000) newErrors.savedAmount = 'Value between 0-20,000,000';
    if (inflationRate < 0 || inflationRate > 20) newErrors.inflationRate = 'Value between 0-20';
    if (rateOfReturn < 0 || rateOfReturn > 20) newErrors.rateOfReturn = 'Value between 0-20';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setCostFuture(0);
      setMonthlySavings(0);
      return;
    }

    const inflationFactor = 1 + inflationRate / 100;
    const futureCost = costToday * Math.pow(inflationFactor, yearsLeft);
    setCostFuture(futureCost);

    const monthlyReturnRate = rateOfReturn / 100 / 12;
    const totalMonths = yearsLeft * 12;
    const presentValue = savedAmount * Math.pow(1 + rateOfReturn / 100, yearsLeft);

    if (yearsLeft === 0 || totalMonths === 0) {
      setMonthlySavings(0);
      return;
    }

    const numerator = (futureCost - presentValue) * monthlyReturnRate;
    const denominator = Math.pow(1 + monthlyReturnRate, totalMonths) - 1;
    const monthly = numerator / denominator;

    setMonthlySavings(monthly > 0 ? monthly : 0);

  }, [costToday, yearsLeft, savedAmount, inflationRate, rateOfReturn]);

  const inputs = [
    {
      label: "Name your goal?",
      name: "goalName",
      value: goalName,
      type: "text",
      tooltip: "What is the name of your financial goal?",
    },
    {
      label: "If you were to achieve this goal today, how much money would you spend?",
      name: "costToday",
      value: costToday,
      min: 0,
      max: 20000000,
      step: 1000,
      error: errors.costToday,
      tooltip: "Current estimated cost if you achieve the goal today.",
    },
    {
      label: "In how many years from now do you want to fulfil this goal?",
      name: "yearsLeft",
      value: yearsLeft,
      min: 0,
      max: 50,
      step: 1,
      error: errors.yearsLeft,
      tooltip: "Number of years until you want to achieve this goal.",
    },
    {
      label: "How much money can you set aside towards this goal at the moment?",
      name: "savedAmount",
      value: savedAmount,
      min: 0,
      max: 20000000,
      step: 1000,
      error: errors.savedAmount,
      tooltip: "Current savings allocated for the goal.",
    },
    {
      label: "Inflation Rate %",
      name: "inflationRate",
      value: inflationRate,
      min: 0,
      max: 20,
      step: 0.1,
      error: errors.inflationRate,
      tooltip: "Expected yearly inflation rate affecting costs.",
    },
    {
      label: "Rate Of Return %",
      name: "rateOfReturn",
      value: rateOfReturn,
      min: 0,
      max: 20,
      step: 0.1,
      error: errors.rateOfReturn,
      tooltip: "Expected yearly return rate on investments.",
    }
  ];

  if (inputMode === 'input') {
    return (
      <div className={`${WHITE_CARD} ${BORDER_RADIUS} shadow p-6 space-y-8`}>
        {inputs.map(({ label, name, value, min, max, step, error, tooltip, type }) => (
          <div key={name}>
            <label className="flex items-center gap-1 font-semibold text-blue-900 mb-1">
              {label} <Tooltip text={tooltip} />
            </label>
            {type === "text" ? (
              <input
                type="text"
                value={value}
                onChange={e => onInputChange({ ...inputData, [name]: e.target.value })}
                className={`w-full p-2 border ${BORDER_RADIUS} ${inputBorder}`}
                placeholder="Type your goal here"
              />
            ) : (
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
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${ORANGE_BG} ${BORDER_RADIUS} shadow-inner p-6 text-blue-900 font-semibold space-y-4`}>
      <h3 className={`${BLUE} text-xl font-bold mb-4`}>Your Results</h3>
      <div className="grid grid-cols-2 gap-6 text-lg">
        <div>
          <span className="block text-blue-800 font-medium mb-1">Goal Name</span>
          <span>{goalName || '-'}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Years Left</span>
          <span>{yearsLeft}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Cost In Future Terms</span>
          <span>₹ {costFuture.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Existing Investment</span>
          <span>₹ {savedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Monthly Savings From Now</span>
          <span>₹ {monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomGoalCalculator;
