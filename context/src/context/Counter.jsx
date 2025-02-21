import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount]=useState(0);    //context ka state
    return(
        <CounterContext.Provider value={{count, setCount, name: "Hiren"}}>
            { props. children}
        </CounterContext.Provider>
    )
}