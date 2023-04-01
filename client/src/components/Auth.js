import React, { useState, useContext } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", email: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, token } = useContext(UserContext)
  const navigate = useNavigate() // initialize navigate

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs).then(() => navigate('/feed')) // navigate to /feed after successful signup
  }

  function handleLogin(e) {
    e.preventDefault();
    const { email, password } = inputs;
    login({ email, password }).then(() => navigate('/feed')); // navigate to /feed after successful login
  }  

  if (token) {
    return <Navigate to="/feed" />
  }

  return (
    <div className="auth-container">
      <h1>Todo App</h1>
      { !toggle ? (
  <AuthForm 
    handleChange={handleChange}
    handleSubmit={handleSignup}
    inputs={inputs}
    btnText="Sign up"
    formType="signup"
    showUsernameInput={true} // pass the prop to show the username input
    authFunction={signup}
  />
) : (
  <AuthForm 
    handleChange={handleChange}
    handleSubmit={handleLogin}
    inputs={{ email: inputs.email, password: inputs.password}}
    btnText="Login"
    formType="login"
    showUsernameInput={false} // don't show the username input
    authFunction={login}
  />
)}
      <p onClick={() => setToggle(prev => !prev)}>
        { !toggle ? "Already a member?" : "Not a member?" }
      </p>
    </div>
  )  
}
