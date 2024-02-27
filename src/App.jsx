import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Views/About.jsx'
import Home from './Views/Home.jsx'
import Vans from './Views/Vans.jsx'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
