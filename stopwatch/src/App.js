import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [time,setTime] = useState(0);
  let timeRef = useRef(null);

  function startTimer(){
    timeRef.current = setInterval(()=>{
      setTime(time => time+1)
    }, 1000)
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return (
    <>
      <div> StopWatch APP</div>
      <div>
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>Start</button>
        <br/><br/>

        <button onClick={stopTimer}>Stop</button>
        <br/><br/>

        <button onClick={resetTimer}>Reset</button>
        <br/><br/>
      </div>
    </>
  );
}

export default App;
