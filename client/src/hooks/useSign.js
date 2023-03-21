// import {useState} from 'react'
// import { useAuthContext } from './useAuthContext'


// export const useSignup = async(username, email, password) => { 
//     const [isLoading, setIsLoading] = useState(null);
//     const [error, setError] = useState(null);
//     const { dispatch } = useAuthContext();

// export const signup = async(username, email, password) => {
//     setIsLoading(true)
//     setError(null)

//     const response = await fetch('/api/user/signup', {
//         method: 'POST', 
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({username, email, password})
//     })
//     const json = await response.json()

//     if(!response.ok){
//         setIsLoading(false)
//         setError(json.error)
//     } 
//     if (response.ok){
//         // save the user to local storage
//         localStorage.setItem('username', JSON.stringify(json))

//         // update the auth context
//          dispatch({type: 'LOGIN', payload: json})

//          setIsLoading(false)
//     }
// }
//     return { signup, isLoading, error }
// }

import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (username, email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('username', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })

      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
