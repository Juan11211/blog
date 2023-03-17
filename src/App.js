import React from 'react'
import Register from './components/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Feed from './components/Feed'
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
        <Route 
          path='/feed' element={<Feed /> } />
      </Routes>
    </div>
  )
}

export default App
