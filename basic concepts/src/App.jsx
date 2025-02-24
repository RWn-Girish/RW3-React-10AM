import './App.css'
import UseStateComp from './Components/UseState'
import Counter from './Components/Counter';
import ListComp from './Components/List';
import React, { useEffect, useState } from 'react';
import Controll from './Components/Controll/Controll';
import Uncontroll from './Components/Controll/UnControll';
import Validation from './Components/Validation/Validation';
import HOC from './Components/HOC/HOC';
import { Link, Route, Routes, useNavigate } from 'react-router';
import Callback from './Components/UseCallback/Callback';

let HOCValidate = HOC(Validation)
let HOCControll = HOC(Controll);

function App() {
  const navigate = useNavigate()
  let [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> {
        setIsLoading(!isLoading);
    }, 2000);
  }, [])

  const handleAbout = () => {
      navigate("/about")
  }
  const handleCounter = () => {
    let name = "Hello Wolrd";
      navigate(`/counter/${name}`)
  }

  return (
    <>
       {/* <UseStateComp /> */}
       {/* <Counter /> */}
       {/* <ListComp /> */}
       {/* <HOCControll isLoading={isLoading} /> */}
       {/* <Uncontroll /> */}
       {/* <Validation /> */}
       {/* <HOCValidate isLoading={isLoading} user="Red & White" /> */}

       {/* <Link to={"/"}>Home</Link> &nbsp;
       <Link to={"/about"}>About</Link>
        <br />
        <br />
        <br />
        <button onClick={handleCounter}>Counter</button>
        <button onClick={handleAbout}>About</button> */}
       <Routes>
          <Route path='/' element= { <Callback />} />
          {/* <Route path='/' element= {<HOCControll isLoading={isLoading} />} /> */}
          <Route path='/about/' element= {<h1>About page</h1>} />
          <Route path='/counter/:name' element= {<Counter />} />
          <Route path='/contact' element= {<HOCValidate isLoading={isLoading} user="Red & White" />} />
          <Route path='/*' element= {<h1>404 Page Not Found</h1>} />
       </Routes>
       </>
  )
}

export default App
