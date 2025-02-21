import React, {useState,useEffect, useRef} from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  let val=useRef(0);
  let btnRef=useRef();
  function handleIncrement(){
    val.current =val.current +1;
    console.log("Value of val :", val.current);
    
    setCount(count + 1);
  }
  function changeColor(){
    btnRef.current.style.backgroundColor="red";
  }

  useEffect(() => {
    console.log("re-render hua");
    
  })
  
  return (
    <>
    <div>useRef</div>

    <button ref={btnRef} onClick={handleIncrement} >Increment</button>
    <br/>
    <br/>
    <button onClick={changeColor}>Change Color of 1st button</button>
    <br/>
    <div>Count : {count}</div>
    </>
  );
}

export default App;
