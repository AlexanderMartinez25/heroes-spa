import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  // queda memorizado y solo se ejucta de nuevo cuando el publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} id={hero.id} {...hero} />
      ))}
    </div>
  );
};
