import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

export const PublicRoute = ({ children }) => {

  const { logged } = useContext(AuthContext)

  // si no esta logueado retornamos los hijos (componentes)

  return (!logged)
    ? children
    : <Navigate to='/marvel' />
}
