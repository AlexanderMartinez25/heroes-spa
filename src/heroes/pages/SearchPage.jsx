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

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSeachSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().lenght <= 1) return

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
          <h4>Results</h4>
          <hr />


          {/* {
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger">
                No hero width <strong>{q}</strong>
              </div>
          } */}

          <div
            style={{ display: showSearch ? '' : 'none' }}
            className="alert alert-primary animate__animated animate__fadeIn">
            Search a hero
          </div>

          <div
            style={{ display: showError ? '' : 'none' }}
            className="alert alert-danger animate__animated animate__fadeIn"
          >
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
