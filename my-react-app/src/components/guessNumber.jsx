import React, { useState } from 'react';

function GuessNumber() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  // Arpoo satunnaisen kokonaisluvunväliltä 1-10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
      setMessage('Arvausluku tulee olla väliltä 1-10.');
    } else if (guessNumber === randomNumber) {
      setMessage('Hyvä työ!');
    } else {
      setMessage(`Ei täsmää. Numero oli ${randomNumber}.`);
    }
  };

  return (
    <div>
      <p>Arvaa luku väliltä 1 ja 10:</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Arvaa</button>
      <p>{message}</p>
    </div>
  );
}

export default GuessNumber;
