import { useSelector } from "react-redux"

const Hello = () => {
    const {count} = useSelector(state => state.counterReducer)
    return (
        <>
            <h3>Count: {count}</h3>
        </>
    )
}

export default Hello;