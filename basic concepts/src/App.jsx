import './App.css'
import UseStateComp from './Components/UseState'
import Counter from './Components/Counter';
import ListComp from './Components/List';
import React, { useEffect, useState } from 'react';
import Controll from './Components/Controll/Controll';
import Uncontroll from './Components/Controll/UnControll';
import Validation from './Components/Validation/Validation';
import HOC from './Components/HOC/HOC';

let HOCValidate = HOC(Validation)
let HOCControll = HOC(Controll);

function App() {

  let [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> {
        setIsLoading(!isLoading);
    }, 2000);
  }, [])

  return (
    <>
       {/* <UseStateComp /> */}
       {/* <Counter /> */}
       {/* <ListComp /> */}
       <HOCControll isLoading={isLoading} />
       {/* <Uncontroll /> */}
       {/* <Validation /> */}
       <HOCValidate isLoading={isLoading} user="Red & White" />
       </>
  )
}

export default App
