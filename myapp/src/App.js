import "./App.css";
import { useReducer } from "react";

function reducer(state,action){
  console.log(state,action);
  switch(action.type){
    case "increment":
      return{...state, count:state.count + 1};
    case "decrement":
      return{...state, count:state.count - 1};
    default:
      return "Unauthorized command";
  }
}
const initialState={count:0};

function App() {
  const [state, dispatch]=useReducer(reducer, initialState);
  function handleIncrement(){
    dispatch({type:"increment"})
  }
  function handleDecrement(){
    dispatch({type:'decrement'})
  }

  return (
    <div className="App">
      <h1>useReducer demo</h1>
      <h3>Count : {state.count}</h3>
      <button
      onClick={handleIncrement}
        style={{
          backgroundColor: "green",
          padding: 12,
          fontSize: 18,
          color: "#fff",
          fontWeight: "bold",
          margin: 20,
          borderRadius: 8,
        }}
      >
        Increment
      </button>
      <button
      onClick={handleDecrement}
        style={{
          backgroundColor: "red",
          padding: 12,
          fontSize: 18,
          color: "#fff",
          fontWeight: "bold",
          margin: 20,
          borderRadius: 8,
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
