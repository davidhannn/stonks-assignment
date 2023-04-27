// import { useFetchMovies } from "@/hooks/useFetchMovies";
import { Grid, GridItem } from "@chakra-ui/react";
import { MovieContext } from "@/context/MovieContext";
import MovieCard from "./movie-card";
import { useContext } from "react";
import { STATUS } from "@/constants";
import { MovieType } from "@/types";

type Props = {
  status?: "none" | "bookmarked" | "watched";
};

const MovieList: React.FC<Props> = ({ status = STATUS.NONE }: Props) => {
  // const { movies } = useFetchMovies();
  const { movies, bookmarkedMovies, watchedMovies } = useContext(MovieContext);

  if (!movies) {
    return <h1>No Movies Displayed!</h1>;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {status === STATUS.NONE
        ? movies?.map(({ Title, Year, imdbID, Type, Poster }: MovieType) => (
            <MovieCard
              key={imdbID}
              Title={Title}
              Year={Year}
              imdbID={imdbID}
              Type={Type}
              Poster={Poster}
              status={STATUS.NONE}
            />
          ))
        : status === STATUS.BOOKMARKED
        ? bookmarkedMovies?.map(
            ({ Title, Year, imdbID, Type, Poster }: MovieType) => (
              <MovieCard
                key={imdbID}
                Title={Title}
                Year={Year}
                imdbID={imdbID}
                Type={Type}
                Poster={Poster}
                status={STATUS.BOOKMARKED}
              />
            )
          )
        : watchedMovies.map(
            ({ Title, Year, imdbID, Type, Poster }: MovieType) => (
              <MovieCard
                key={imdbID}
                Title={Title}
                Year={Year}
                imdbID={imdbID}
                Type={Type}
                Poster={Poster}
                status={STATUS.WATCHED}
              />
            )
          )}
    </Grid>
  );
};

export default MovieList;
