import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'
import ViewRecipe from './components/ViewRecipe'
import Register from './components/register'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/edit/:id' element={<EditRecipe />} />
        <Route path='/view/:id' element={<ViewRecipe />} />
        
      </Routes>
    </>
  )
}

export default App
