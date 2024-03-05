import './App.css';
import DateTimeDisplay from "./components/dateTimeDisplay";
import GuessNumber from './components/guessNumber';
import Calculator from './components/calculator';
import TemperatureConverter from './components/temperatureConverter';
import SameDigitsChecker from './components/digitsChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <DateTimeDisplay/>
        <GuessNumber/>
        <Calculator/>
        <TemperatureConverter/>
        <SameDigitsChecker/>
      </p>
      </header>
    </div>
  )
}
export default App;