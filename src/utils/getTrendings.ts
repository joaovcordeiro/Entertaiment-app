import movies from "../data/data.json";
import Movie from "../Interfaces/movie";

export default function getTrendings() {
  const trending = movies.filter((movie) => movie.isTrending);
  return trending;
}
