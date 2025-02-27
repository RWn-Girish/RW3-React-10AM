import { Route, Routes } from 'react-router'
import './App.css'
import Counter from './components/Counter'
import Hello from './components/Hello'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/hello' element={<Hello />} />
      </Routes>
    </>
  )
}

export default App
