import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from "../services/actions/counter.action";

const Counter = () => {
    const { count } = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(Increment())
    }

    const handleDec = () => {
        dispatch(Decrement())
    }

    return (
        <>
            <h3>Counter App : {count}</h3>
            <Button onClick={handleInc}>Increment</Button>
            <Button onClick={handleDec}>Decrement</Button>
        </>
    )
}

export default Counter;