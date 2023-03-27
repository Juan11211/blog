import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import { UserContext } from './context/UserProvider.js'
import Feed from './components/Feed.js'
import Profile from './components/Profile.js'
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to="/feed" /> : <Auth />}
        />
        <Route 
          path='/feed' 
            element={ <Feed />}
        />
          <Route 
          path="/profile" 
          element={
            <ProtectedRoute token={token} redirectTo="/feed">
              <Profile/>
            </ProtectedRoute>
          }
        />
       
      </Routes>
    </div>
  )
}