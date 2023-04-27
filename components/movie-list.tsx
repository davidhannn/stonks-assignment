// import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieContext } from "@/context/MovieContext";
import MovieCard from "./movie-card";
import { useContext } from "react";
import { MovieType } from "@/types";

const MovieList: React.FC = () => {
  // const { movies } = useFetchMovies();
  const { movies } = useContext(MovieContext);

  console.log("hey?");
  console.log(movies, "movies");
  // if (!movies) {
  //   return <h1>No Movies Displayed!</h1>;
  // }

  return (
    <div>
      {movies?.map(({ Title, Year, imdbID, Type, Poster }: MovieType) => (
        <MovieCard
          key={imdbID}
          Title={Title}
          Year={Year}
          imdbID={imdbID}
          Type={Type}
          Poster={Poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
