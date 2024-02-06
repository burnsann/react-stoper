import FormattedTime from "./Components/FormattedTime/FormattedTime";
import { useState, useEffect } from "react";

const App = () => {

  const [stopwatch, setStopwatch] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if(!timer) {
      setTimer(setInterval(() => {
        setStopwatch((prevValue) => prevValue + 1);
      }, 1))
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setStopwatch(0);
  };

  useEffect(() => {
    // code that runs once at the start ??
    return () => {
      // code that runs once at the end
      if(timer) clearInterval(timer);
    };
  }, []);


  return (
    <div className="container">
      <FormattedTime stopwatch={stopwatch} />
      <button className="button" onClick={startTimer}>Start</button>
      <button className="button" onClick={stopTimer}>Stop</button>
      <button className="button" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default App;

