import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

const initInputs = { username: "", email: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    const { email, password } = inputs
    login({ email, password })
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
        />
      ) : (
        <AuthForm 
          handleChange={handleChange}
          handleSubmit={handleLogin}
          inputs={{ email: inputs.email, password: inputs.password}}
          btnText="Login"
          formType="login"
        />
      )}
      <p onClick={() => setToggle(prev => !prev)}>
        { !toggle ? "Already a member?" : "Not a member?" }
      </p>
    </div>
  )  
}
