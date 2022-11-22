import movies from "../data/data.json";

export default function getRecommended() {
  const recommended = movies.filter((movie) => !movie.isTrending);
  return recommended;
}
