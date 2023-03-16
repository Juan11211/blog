import React from 'react'
import Register from './components/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/' element={<Register /> } />
        <Route 
          path='/signup' element={<Signup /> } />
        <Route 
          path='/login' element={<Login /> } />
      </Routes>
    </div>
  )
}

export default App
