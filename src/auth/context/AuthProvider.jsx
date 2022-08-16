import { useReducer } from "react"
import { AuthContext, authReducer } from "./"
import { types } from "../types/types"

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {

    const user = { id: 'ABC', name }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))

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
