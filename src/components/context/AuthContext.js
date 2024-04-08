import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

const protect = async (user) => {
  const response = await fetch('/api/protect', {
    headers: {'Authorization': `Bearer ${user.token}`},
   })
  const json = await response.json()
  console.log(json)
  return json
 }  



export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    (async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            const json = await protect(user)
            if (json.isAuthorised) {
              dispatch({ type: "LOGIN", payload: user })
            }
            else {
              localStorage.removeItem('user')
              dispatch({ type: "LOGOUT" })
            }  
          }
        } 
      catch (error) {
        console.log(error)
      }
    })()

    
  }, [])


  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}