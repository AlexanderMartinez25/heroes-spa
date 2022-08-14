
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  // obtenemos los parámetros de la ruta
  const { id } = useParams();

  const hero = getHeroById(id);

  const navigate = useNavigate();
  const onNavigateBack = () => navigate(-1)

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Alter ego: </strong>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <strong>Publisher: </strong>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <strong>First appearance: </strong>
              {hero.first_appearance}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button
            className='btn btn-outline-primary'
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
