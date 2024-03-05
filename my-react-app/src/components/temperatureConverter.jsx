import React, { useState } from 'react';
import './TemperatureConverter.css'; // Import CSS file

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsiusResult, setCelsiusResult] = useState('');
  const [fahrenheitResult, setFahrenheitResult] = useState('');

  const convertToCelsius = () => {
    const f = parseFloat(fahrenheit);
    const c = (f - 32) / 1.8;
    setCelsiusResult(`${f} °F is ${c.toFixed(2)} °C`);
  };

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius);
    const f = (c * 1.8) + 32;
    setFahrenheitResult(`${c} °C is ${f.toFixed(2)} °F`);
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      <div className="input-container">
        <label htmlFor="celsiusInput">Celsius:</label>
        <input
          type="text"
          id="celsiusInput"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
        <p>{celsiusResult}</p>
      </div>

      <div className="input-container">
        <label htmlFor="fahrenheitInput">Fahrenheit:</label>
        <input
          type="text"
          id="fahrenheitInput"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        />
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <p>{fahrenheitResult}</p>
      </div>
    </div>
  );
}

export default TemperatureConverter;
