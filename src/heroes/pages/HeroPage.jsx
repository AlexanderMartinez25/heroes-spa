import { Navigate } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  // obtenemos los parámetros de la ruta
  const { id } = useParams()

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <>
      <h1>HeroPage</h1>
    </>
  )
}
