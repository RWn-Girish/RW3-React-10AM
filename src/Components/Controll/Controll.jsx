import { useState } from "react";

const Controll = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Fname ===> ", fname)
    console.log("Email ===> ", email)
  }
  return (
    <>
      <h2>Controll Component</h2>
      <form onSubmit={handleSubmit}>
        <lable>Full Name: </lable>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={fname}
          onChange={(e) => {
            // console.log(e.target.value);
            setFname(e.target.value);
          }}
        />
        <br />
        <br />
        <lable>Email: </lable>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            // console.log(e.target.value);
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Controll;
