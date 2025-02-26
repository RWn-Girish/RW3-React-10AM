import { useContext } from 'react';
import { myContext } from '../../App';
const CompD = () =>{
    const obj =  useContext(myContext);
    // console.log(obj.name)
    return(
        <>
            <h3>Comp D</h3>
            <p>{obj.name}</p>
        </>
    )
}

export default CompD;