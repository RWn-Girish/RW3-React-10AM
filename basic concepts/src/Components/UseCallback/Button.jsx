import { memo } from "react";

const Button = memo(({name, handleClick}) => {
    console.log("Render Button : ", name)
    return (
        <>
        <button onClick={handleClick}>{name}</button>
        </>
    )
})
export default Button;