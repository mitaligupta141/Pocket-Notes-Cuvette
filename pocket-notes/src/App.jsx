import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './screens/Home'
import NotFoundPage from "./screens/NotFoundPage"

function App() {
  

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
