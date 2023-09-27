import React, { useState } from "react";

export default function Tax() {
  const [income, setIncome] = useState("");
  let tax;

  const calculateTax = () => {
    const incomeAmount = +income;

    if (incomeAmount <= 18200) {
      tax = 0;
    } else if (incomeAmount <= 37000) {
      tax = (incomeAmount - 18200) * 0.19;
    } else if (incomeAmount <= 90000) {
      tax = 3572 + (incomeAmount - 37000) * 0.325;
    } else if (incomeAmount <= 180000) {
      tax = 20797 + (incomeAmount - 90000) * 0.37;
    } else {
      tax = 54097 + (incomeAmount - 180000) * 0.45;
    }
  };

  const handleOnChange = (e) => {
    setIncome(e.target.value);
  };

  calculateTax(); // Calculate tax on initial render

  return (
    <main>
      <div>
        <h4>Income:</h4>
        <input
          type="number" // Use type="number" for numerical input
          value={income}
          onChange={handleOnChange}
          placeholder="Please input your salary"
        />
      </div>
      <h2>The tax is: {tax.toFixed(2)}</h2>
    </main>
  );
}
