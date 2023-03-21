// import React, {useState} from 'react'
// import axios from 'axios'

// export const AuthContext = React.createContext(); // creating context

// const userAxios = axios.create() // creating axios instance

// userAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config
//   })

// export default function AuthProvider(props){

//     const initState = {
//         username: JSON.parse(localStorage.getItem('username')) || {},
//         email: JSON.parse(localStorage.getItem('email')) || {},
//         token: localStorage.getItem('token') || "",
//         errMsg: ""
//     }

// //     const user = localStorage.getItem('user');
// // const token = localStorage.getItem('token');
// // const initState = {
// //   user: user ? JSON.parse(user) : {},
// //   token: token ? token : "",
// //   errMsg: ""
// // };



//     const [userState, setUserState] = useState(initState);

//     const signup = (credentials) => {
//       axios
//         .post('/auth/signup', credentials)
//         .then((res) => {
//           const { username, email, token } = res.data;
//           localStorage.setItem('token', token);
//           localStorage.setItem('username', JSON.stringify(username));
//           localStorage.setItem('email', JSON.stringify(email));
//           setUserState((prevUserState) => ({
//             ...prevUserState,
//             username,
//             email,
//             token,
//           }));
//         })
//         .catch((err) => {
//           console.log(err.response.data.errMsg);
//         });
//     };

//       function login(credentials){
//         axios.post("/auth/login", credentials)
//           .then(res => {
//             const { username, token } = res.data
//             localStorage.setItem("token", token)
//             localStorage.setItem("username", JSON.stringify(username))
//            // getAllTravel()
//             setUserState(prevUserState => ({
//               ...prevUserState,
//               username,
//               token
//             }))
//           })
//           .catch(err => handleAuthErr(err.response.data.errMsg))
//       }

//       function logout(){
//         localStorage.removeItem("token")
//         localStorage.removeItem("username")
//         localStorage.removeItem('email')
//         setUserState({
//           username: {},
//           email: {},
//           token: "",
//          // add post here
//         })
//       }

//     function handleAuthErr(errMsg){
//         setUserState(prevState => ({
//           ...prevState,
//           errMsg
//         }))
//       }
    
//     function resetAuthErr(){
//        setUserState(prevState => ({
//           ...prevState,
//           errMsg: ""
//         }))
//       }

//     return (
//         <AuthContext.Provider
//             value={{
//                 ...userState,
//                 signup,
//                 login,
//                 logout,
//                 resetAuthErr
//     }}> 
//             {props.children}
//         </AuthContext.Provider>
//     )
// }