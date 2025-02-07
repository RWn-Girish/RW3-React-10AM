import { useState } from "react";
import CompA from "./ComA";

const UseStateComp = () => {
    const userInfo = {
        name: "Jolly Peter",
        email: "jolly@test.in"
    }

    // console.log(useState())
    const [user, setUser] = useState(userInfo)

    const handelClick = () => {
        setUser({
            ...user,
            name: "Smith Peter"
        })
    }
    console.log(user);


    return (
        <div>
           <h2>Use State Components</h2>
           <h3>Name: {user.name}</h3>
           <h3>Email: {user.email}</h3>
           <button onClick={handelClick}>Change Name</button>
           {/* <CompA name="John Peter" /> */}
        </div>
    )
}

export default UseStateComp;