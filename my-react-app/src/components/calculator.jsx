import React, { useState } from 'react';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const multiply = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    const multiplicationResult = num1 * num2;
    setResult(`The Result Is: ${multiplicationResult}`);
  };

  const divide = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (num2 === 0) {
      setResult("Cannot divide by zero!");
    } else {
      const divisionResult = num1 / num2;
      setResult(`The Result Is: ${divisionResult}`);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <label htmlFor="firstNumber">1st Number:</label>
      <input
        type="text"
        id="firstNumber"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <br />
      <label htmlFor="secondNumber">2nd Number:</label>
      <input
        type="text"
        id="secondNumber"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <br />
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <br />
      <p>{result}</p>
    </div>
  );
}

export default Calculator;
