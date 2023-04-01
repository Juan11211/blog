import React from 'react'

export default function AuthForm(props){
  const {
    handleChange,
    handleSubmit,
    inputs,
    btnText,
    formType,
    showUsernameInput
  } = props

  return (
    <form onSubmit={handleSubmit}>
      { showUsernameInput && 
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange} 
          placeholder="username"/>
      }
      <input 
        type="email" 
        name="email" 
        value={inputs.email} 
        onChange={handleChange} 
        placeholder="email"/>
      <input 
        type="password" 
        name="password" 
        value={inputs.password} 
        onChange={handleChange} 
        placeholder="password"/>
      <button>{ btnText }</button>
    </form>
  )
}
