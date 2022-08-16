import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext)

  // si esta logueado retornamos los hijos (componentes)
  return (logged)
    ? children
    : <Navigate to='/login' />
}
