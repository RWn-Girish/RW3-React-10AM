import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        
      </Routes>
    </>
  )
}

export default App
