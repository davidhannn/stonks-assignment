import { useFetchMovies } from "@/hooks/useFetchMovies";
import MovieCard from "./movie-card";

const MovieList: React.FC = () => {
  const { movies } = useFetchMovies();

  console.log("hey?");
  console.log(movies, "movies");
  // if (!movies) {
  //   return <h1>No Movies Displayed!</h1>;
  // }

  return (
    <div>
      {movies?.map((movie) => (
        <p>{movie.Title}</p>
      ))}
    </div>
  );
};

export default MovieList;
