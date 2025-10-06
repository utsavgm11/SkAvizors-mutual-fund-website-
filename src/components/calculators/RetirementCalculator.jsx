import React, { useState, useEffect } from 'react';

const BLUE = "text-blue-600";
const ORANGE_BG = "bg-orange-100";
const WHITE_CARD = "bg-white";
const BORDER_RADIUS = "rounded-lg";

function Tooltip({ text }) {
  return (
    <span className="relative group cursor-help text-blue-600 ml-1">
      ⓘ
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 bg-blue-50 text-blue-900 text-xs rounded shadow px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-medium">
        {text}
      </span>
    </span>
  );
}

const RetirementCalculator = ({
  inputMode,
  inputData = {},
  onInputChange,
  inputBorder = "border-orange-300 focus:border-orange-500",
  accentColor = "text-orange-500"
}) => {
  const {
    currentAge = 30,
    retirementAge = 60,
    lifeExpectancy = 80,
    inflationRate = 0,
    postRetirementInterestRate = 0,
    monthlyExpensesToday = 0,
    savedAmount = 0,
    returnOnExistingInvestments = 0,
    expectedReturnNewInvestment = 0,
  } = inputData;

  const [errors, setErrors] = useState({});

  const [futureMonthlyExpenses, setFutureMonthlyExpenses] = useState(0);
  const [retirementCorpus, setRetirementCorpus] = useState(0);
  const [requiredMonthlySavings, setRequiredMonthlySavings] = useState(0);
  const [fvOfProvisionMade, setFvOfProvisionMade] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (currentAge < 0 || currentAge > 100) newErrors.currentAge = 'Value between 0 - 100';
    if (retirementAge < currentAge || retirementAge > 100) newErrors.retirementAge = 'Must be greater than current age and less than 100';
    if (lifeExpectancy < retirementAge || lifeExpectancy > 120) newErrors.lifeExpectancy = 'Must be greater than retirement age and less than 120';
    if (inflationRate < 0 || inflationRate > 20) newErrors.inflationRate = 'Value between 0 - 20';
    if (postRetirementInterestRate < 0 || postRetirementInterestRate > 20) newErrors.postRetirementInterestRate = 'Value between 0 - 20';
    if (monthlyExpensesToday < 0 || monthlyExpensesToday > 10000000) newErrors.monthlyExpensesToday = 'Value between 0 - 10,000,000';
    if (savedAmount < 0 || savedAmount > 100000000) newErrors.savedAmount = 'Value between 0 - 100,000,000';
    if (returnOnExistingInvestments < 0 || returnOnExistingInvestments > 20) newErrors.returnOnExistingInvestments = 'Value between 0 - 20';
    if (expectedReturnNewInvestment < 0 || expectedReturnNewInvestment > 20) newErrors.expectedReturnNewInvestment = 'Value between 0 - 20';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFutureMonthlyExpenses(0);
      setRetirementCorpus(0);
      setFvOfProvisionMade(0);
      setRequiredMonthlySavings(0);
      return;
    }

    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;

    // Future monthly expenses adjusted for inflation at retirement age
    const futureExpenses = monthlyExpensesToday * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    setFutureMonthlyExpenses(futureExpenses);

    // Calculate future value of existing saved amount till retirement
    const fvSavedAmount = savedAmount * Math.pow(1 + returnOnExistingInvestments / 100, yearsToRetirement);
    setFvOfProvisionMade(fvSavedAmount);

    // Required corpus to fund retirement expenses, treated as annuity discounting future expenses by post-retirement interest rate
    let corpus = 0;
    if (postRetirementInterestRate === inflationRate) {
      // If interest rate equals inflation rate, simple multiplication
      corpus = futureExpenses * 12 * yearsInRetirement;
    } else {
      // Present value of annuity formula adjusted for inflation and interest
      const realRate = (1 + postRetirementInterestRate / 100) / (1 + inflationRate / 100) - 1;
      corpus = (futureExpenses * 12) * (1 - Math.pow(1 + realRate, -yearsInRetirement)) / realRate;
    }
    setRetirementCorpus(corpus);

    // Calculate required SIP monthly saving to build the difference between corpus and fvSavedAmount
    const amountToSave = corpus - fvSavedAmount;

    if (yearsToRetirement === 0) {
      setRequiredMonthlySavings(amountToSave > 0 ? amountToSave : 0);
    } else {
      const monthlyReturnRate = expectedReturnNewInvestment / 100 / 12;
      const totalMonths = yearsToRetirement * 12;

      const numerator = amountToSave * monthlyReturnRate;
      const denominator = Math.pow(1 + monthlyReturnRate, totalMonths) - 1;

      const sip = numerator / denominator;

      setRequiredMonthlySavings(sip > 0 ? sip : 0);
    }
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    inflationRate,
    postRetirementInterestRate,
    monthlyExpensesToday,
    savedAmount,
    returnOnExistingInvestments,
    expectedReturnNewInvestment,
  ]);

  if (inputMode === 'input') {
    return (
      <div className={`${WHITE_CARD} ${BORDER_RADIUS} shadow p-6 space-y-8`}>
        {[
          {
            label: 'What is your current Age?',
            name: 'currentAge',
            value: currentAge,
            min: 0,
            max: 100,
            step: 1,
            error: errors.currentAge,
            tooltip: 'Your current age in years.',
          },
          {
            label: 'At what age do you wish to retire?',
            name: 'retirementAge',
            value: retirementAge,
            min: currentAge,
            max: 100,
            step: 1,
            error: errors.retirementAge,
            tooltip: 'Age at which you plan to retire.',
          },
          {
            label: 'Life expectancy age',
            name: 'lifeExpectancy',
            value: lifeExpectancy,
            min: retirementAge,
            max: 120,
            step: 1,
            error: errors.lifeExpectancy,
            tooltip: 'Estimated age until which you expect to live.',
          },
          {
            label: 'Inflation Rate %',
            name: 'inflationRate',
            value: inflationRate,
            min: 0,
            max: 20,
            step: 0.1,
            error: errors.inflationRate,
            tooltip: 'Expected yearly inflation.',
          },
          {
            label: 'Post retirement interest rate %',
            name: 'postRetirementInterestRate',
            value: postRetirementInterestRate,
            min: 0,
            max: 20,
            step: 0.1,
            error: errors.postRetirementInterestRate,
            tooltip: 'Expected interest rate on retirement corpus.',
          },
          {
            label: 'Monthly amount you think you would require post retirement',
            name: 'monthlyExpensesToday',
            value: monthlyExpensesToday,
            min: 0,
            max: 10000000,
            step: 100,
            error: errors.monthlyExpensesToday,
            tooltip: 'Estimated monthly expenses after retirement (today\'s value).',
          },
          {
            label: 'How much money have you saved for retirement so far?',
            name: 'savedAmount',
            value: savedAmount,
            min: 0,
            max: 100000000,
            step: 1000,
            error: errors.savedAmount,
            tooltip: 'Current retirement savings.',
          },
          {
            label: 'Return on existing investments %',
            name: 'returnOnExistingInvestments',
            value: returnOnExistingInvestments,
            min: 0,
            max: 20,
            step: 0.1,
            error: errors.returnOnExistingInvestments,
            tooltip: 'Expected return on invested savings before retirement.',
          },
          {
            label: 'Expected return on new investment %',
            name: 'expectedReturnNewInvestment',
            value: expectedReturnNewInvestment,
            min: 0,
            max: 20,
            step: 0.1,
            error: errors.expectedReturnNewInvestment,
            tooltip: 'Expected return rate on monthly savings (SIP).',
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
                onChange={(e) => onInputChange({ ...inputData, [name]: Number(e.target.value) })}
                className={`${accentColor} flex-grow`}
              />
              <input
                type="number"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => {
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
          <span className="block text-blue-800 font-medium mb-1">Your Current Age</span>
          <span>{currentAge}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Your Retirement Age</span>
          <span>{retirementAge}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Life Expectancy Age</span>
          <span>{lifeExpectancy}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Monthly Expenses</span>
          <span>₹ {monthlyExpensesToday.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">FV of Provision Made</span>
          <span>₹ {fvOfProvisionMade.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div>
          <span className="block text-blue-800 font-medium mb-1">Required Retirement Corpus</span>
          <span>₹ {retirementCorpus.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
        <div className="col-span-2">
          <span className="block text-blue-800 font-medium mb-1">Required Monthly Savings (SIP)</span>
          <span>₹ {requiredMonthlySavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
