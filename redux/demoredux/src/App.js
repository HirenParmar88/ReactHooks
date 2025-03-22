import "./App.css";
import Counter from "./components/Counter"; //components
import { useDispatch } from "react-redux";

function App() {
  //handler function
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);
  return (
    <>
      <div className="App">
        <h2>Redux demo App</h2>
      </div>
      <div className="App">
        <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
      </div>
      <div className="App">
        <Counter />
      </div>
      <div className="App">
        <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;