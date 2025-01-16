import { useState } from "react"
import CompA from "./ComA";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleInc = () => {
        setCount(count + 1)
    }
    const handleDec = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <CompA name={"Increment"} handleClick={handleInc} />
            <CompA name={"Decrement"} handleClick={handleDec} />
        </div>
    )
}

export default Counter;