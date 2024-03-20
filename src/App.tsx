import {Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pokemons from './components/Pokemons'
import './style.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
      </Routes>
    </>
  )
}

export default App
