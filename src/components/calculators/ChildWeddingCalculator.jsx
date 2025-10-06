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

const ChildWeddingCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    yearsUntilWedding = 0,
    currentCost = 0,
    savedAmount = 0,
    inflationRate = 0,
    rateOfReturn = 0,
  } = inputData;

  const [errors, setErrors] = useState({});
  const [futureCost, setFutureCost] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (yearsUntilWedding < 0 || yearsUntilWedding > 30) newErrors.yearsUntilWedding = 'Value between 0-30';
    if (currentCost < 0 || currentCost > 20000000) newErrors.currentCost = 'Value between 0-20,000,000';
    if (savedAmount < 0 || savedAmount > 20000000) newErrors.savedAmount = 'Value between 0-20,000,000';
    if (inflationRate < 0 || inflationRate > 20) newErrors.inflationRate = 'Value between 0-20';
    if (rateOfReturn < 0 || rateOfReturn > 20) newErrors.rateOfReturn = 'Value between 0-20';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFutureCost(0);
      setMonthlySavings(0);
      return;
    }

    const inflationFactor = 1 + inflationRate / 100;
    const future = currentCost * Math.pow(inflationFactor, yearsUntilWedding);
    setFutureCost(future);

    const monthlyReturnRate = rateOfReturn / 100 / 12;
    const totalMonths = yearsUntilWedding * 12;
    // Assuming savedAmount is initial investment growing at rateOfReturn
    const presentValue = savedAmount * Math.pow(1 + rateOfReturn / 100, yearsUntilWedding);
    const futureValue = future;

    if (yearsUntilWedding === 0 || totalMonths === 0) {
      setMonthlySavings(0);
    } else {
      const numerator = (futureValue - presentValue) * monthlyReturnRate;
      const denominator = Math.pow(1 + monthlyReturnRate, totalMonths) - 1;
      const monthly = numerator / denominator;
      setMonthlySavings(monthly > 0 ? monthly : 0);
    }
  }, [yearsUntilWedding, currentCost, savedAmount, inflationRate, rateOfReturn]);

  if (inputMode === 'input') {
    return (
      <div className={`${WHITE_CARD} ${BORDER_RADIUS} shadow p-6 space-y-8`}>
        {[
          {
            label: "In how many years from now do you think your child will get married?",
            name: "yearsUntilWedding",
            value: yearsUntilWedding,
            min: 0,
            max: 30,
            step: 1,
            error: errors.yearsUntilWedding,
            tooltip: "Estimate in years before your child's wedding.",
          },
          {
            label: "If the wedding were to happen today, how much do you think it would cost?",
            name: "currentCost",
            value: currentCost,
            min: 0,
            max: 20000000,
            step: 10000,
            error: errors.currentCost,
            tooltip: "Current estimated cost of the wedding.",
          },
          {
            label: "How much money can you set aside for your child’s wedding at the moment?",
            name: "savedAmount",
            value: savedAmount,
            min: 0,
            max: 20000000,
            step: 1000,
            error: errors.savedAmount,
            tooltip: "Current savings for the wedding goal.",
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
            tooltip: "Expected yearly return rate on your investments.",
          },
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
                className={`w-20 p-2 border ${BORDER_RADIUS} ${inputBorder} ${error ? 'border-red-400' : ''}`}
              />
            </div>
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
          <span className="block text-blue-800 font-medium mb-1">Years Left</span>
          <span>{yearsUntilWedding}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Cost in Future Terms</span>
          <span>₹ {futureCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Existing Investment</span>
          <span>₹ {savedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Monthly Savings Needed</span>
          <span>₹ {monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
};

export default ChildWeddingCalculator;
