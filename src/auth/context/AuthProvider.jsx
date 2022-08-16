import { useReducer } from "react"
import { AuthContext, authReducer } from "./"
import { types } from "../types/types"

const initialState = {
  logged: false
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name
      }
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      // estas son las funciones y propiedades que tendrán acceso todos los hijos
      ...authState,
      login
    }} >
      {children}
    </AuthContext.Provider>
  )
}
