import { useReducer, useState } from "react";
import { myReducer } from "./reducer";

const CounterComp = () => {

    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(myReducer, 0);

    const handleInc = () => {
        // console.log("Increment");
        dispatch({type: "Increment"})
    }
    const handleDec = () => {
        // console.log("Decrment");
        dispatch({type: "Decrement"})
    }
    const handleReset = () => {
        // console.log("Decrment");
        dispatch({type: "Reset"})
    }
    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default CounterComp;