import { useEffect, useState } from "react"
import CompA from "./ComA";

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleInc = () => {
        setCount(count + 1)
    }
    const handleDec = () => {
        setCount(count - 1)
    }

    useEffect(()=> {
        console.log('Every time called...');
    })
    useEffect(()=> {
        console.log('Only One Time Called');
    }, [])
    useEffect(()=> {
        console.log('Update Time Called');
    }, [count])
    return (
        <div>
            <h2>Count : {count}</h2>
            <CompA name={"Increment"} handleClick={handleInc} />
            <CompA name={"Decrement"} handleClick={handleDec} />
        </div>
    )
}

export default Counter;