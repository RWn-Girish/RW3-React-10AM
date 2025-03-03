import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/edit/:id' element={<EditRecipe />} />
        
      </Routes>
    </>
  )
}

export default App
