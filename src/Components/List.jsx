import React, { useRef, useState } from "react";

const ListComp = () => {
    const [list, setList] = useState(["Home", 'Music', 'About', 'Contact', 'Reading']);

    const liRef1 = useRef(null);
    const liRef2 = useRef(null);

    const handleMouse = () => {
        console.log("Li Ref: ", liRef1)
        liRef1.current.style.color = "Blue"
        liRef2.current.style.color = "Red"
    }
    return (
        <React.Fragment>
            <h3 onMouseOver={handleMouse} >Static List</h3>
            <li>{list[0]}</li>
            <li ref={liRef1}>{list[1]}</li>
            <li ref={liRef2} >{list[2]}</li>
            <li>{list[3]}</li>

            {/* <h3>Dynamic List</h3>
            {
                list.map((item, index)=> {
                    return (<li key={index}>{item}</li>)
                })
            } */}
        </React.Fragment>
    )
}

export default ListComp;