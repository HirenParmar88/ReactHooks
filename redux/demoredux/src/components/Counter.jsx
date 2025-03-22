import React from "react";
import { useSelector } from "react-redux";

function Counter(){
    const count = useSelector(state => state);
    console.log("Value :",count);
    return(
        <>
        <div>
            <h3>{count}</h3>
        </div>
        </>
    )
}
export default Counter;