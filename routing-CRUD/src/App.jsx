import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        {/* <Route path='/view/:id' element={<EditProduct />} /> */}
      </Routes>
    </>
  )
}

export default App
