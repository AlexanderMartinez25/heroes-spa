import querystring from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from '../helpers/GetHeroesByName'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation()

  // paquete instalado para manejar querys
  const { q = '' } = querystring.parse(location.search)
  const heroes = getHeroesByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSeachSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().lenght <= 1) return

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSeachSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="SearchText"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Resulst</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero width <strong>{q}</strong>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>
    </>
  )
}
