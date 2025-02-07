import { useRef, useState } from "react";

const Uncontroll = () => {

    let fnameRef = useRef(null);
    let emailRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Fname ===> ", fnameRef.current.value)
        console.log("Email ===> ", emailRef.current.value)

    }
  return (
    <>
      <h3>UnControll Component</h3>
      <form onSubmit={handleSubmit}>
        <lable>Full Name: </lable>
        <input type="text" placeholder="Enter Full Name" ref={fnameRef} />
        <br />
        <br />
        <lable>Email: </lable>
        <input type="text" placeholder="Enter Email" ref={emailRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Uncontroll;
