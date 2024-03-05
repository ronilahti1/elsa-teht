import React, { useState } from 'react';

function SameDigitsChecker() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkSameDigits = () => {
    const numString = number.toString();
    const firstDigit = numString[0];
    const allDigitsSame = numString.split('').every(digit => digit === firstDigit);

    if (allDigitsSame) {
      setResult(`All digits of ${number} are the same.`);
    } else {
      setResult(`Not all digits of ${number} are the same.`);
    }
  };

  return (
    <div>
      <h2>Same Digits Checker</h2>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={checkSameDigits}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default SameDigitsChecker;
