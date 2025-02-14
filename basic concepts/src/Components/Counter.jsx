import { useEffect, useState } from "react"
import CompA from "./ComA";
import { useParams } from "react-router";

const Counter = () => {

    const {name} = useParams()
    const [count, setCount] = useState(0);
    // const [name, setName] = useState("");
    
    const handleInc = (a) => {
        // setName(a);
        setCount(count + 1)
    }
    const handleDec = (a) => {
        // setName(a);
        setCount(count - 1)
    }

    const handleMouse = () => {
        alert('Mouse Event')
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
            <h2 onMouseOver={handleMouse}>Count : {count}</h2>
            {name != "" ? <h2>Name : {name}</h2> : ""}
            <CompA name={"Increment"} handleClick={handleInc} />
            <CompA name={"Decrement"} handleClick={handleDec} />
        </div>
    )
}

export default Counter;