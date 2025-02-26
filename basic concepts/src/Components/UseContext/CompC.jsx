import { useContext } from "react";
import CompD from "./CompD";
import { myContext } from "../../App";

const CompC = () =>{
    const obj = useContext(myContext);
    return(
        <>
            <h3>Comp C : {obj.email}</h3>
            <CompD />
        </>
    )
}

export default CompC;