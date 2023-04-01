import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth.js'
import Feed from './components/Feed.js'
import Profile from './components/Profile.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'


export default function App(){

  const {token} = useContext(UserContext)
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<ProtectedRoute token={token} redirectTo="/feed"><Profile/></ProtectedRoute>} />
      </Routes>
    </div>
  )
}
