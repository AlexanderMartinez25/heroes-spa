import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form>
            <input
              type="text"
              className="form-control"
              placeholder="SearchText"
              autoComplete="off"
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
            No hero width <strong>ABC</strong>
          </div>

          {/* <HeroCard  /> */}
        </div>
      </div>
    </>
  )
}
