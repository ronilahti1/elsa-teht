import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedDate = `${currentDateTime.getDate()}.${currentDateTime.getMonth() + 1}.${currentDateTime.getFullYear()}`;
  const formattedTime = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;

  return (
    <div>
      <p>Päivämäärä: {formattedDate}</p>
      <p>Aika nyt: {formattedTime}</p>
    </div>
  );
}

export default DateTimeDisplay;
