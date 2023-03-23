import React, {useState} from 'react'

export const UserContext = React.createContext();

export default function UserProvider(props){
    const initState = { 
                user: {}, 
                token: "", 
                posts: []
            }

    const {userState, setUserState} = useState(initState)


    return(
        <UserContext.Provider 
            value={{
                ...userState // this would allow both user and token to be passed
            }}>
            {props.children}
        </UserContext.Provider>
    )
}