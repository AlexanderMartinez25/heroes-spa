import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const LoginPage = () => {

  // es practicamente llamar un servicio
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {
    login('Alexander Martinez')

    const lastPath = localStorage.getItem('lastPath') || '/'

    navigate(lastPath, {
      // evita que la persona pueda regresar al historial anterior
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
  )
}
