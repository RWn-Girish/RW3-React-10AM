import { useCallback, useState } from "react";
import Button from "./Button";
import ExtraComp from "./ExtraCom";

const Callback = ()  => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(count => count + 1)
    }, [])
    const handleDecrement = useCallback(() => {
        // if(count > 0)
            setCount(count => count - 1)
    }, [])
    return (
        <>
        <ExtraComp />
        <h2>Count : { count }</h2>
        {/* <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button> */}

        <Button name="Increment" handleClick={handleIncrement} />
        <Button name="Decrement" handleClick={handleDecrement} />
        </>
    )
}

export default Callback;