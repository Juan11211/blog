import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props){
  const initState = { 
    user: null, 
    token: null, 
    posts: [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  
  function login(credentials){
    return axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
        return true
      })
      .catch(err => {
        console.log(err.response.data.errMsg)
        return false
      })
  }
  
  
  
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      posts: []
    })
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
      }}>
      { props.children }
    </UserContext.Provider>
  )
}
