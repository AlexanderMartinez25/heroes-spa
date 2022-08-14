import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["Marvel Comics", "DC Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not valid publihser`);
  }
  heroes.filter((heroe) => {
    heroe.publisher === publisher;
    console.log(heroe.publisher, publisher);
  });

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
