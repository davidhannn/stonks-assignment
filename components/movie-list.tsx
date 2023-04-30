import { STATUS } from "@/constants";
import { MovieContext } from "@/context/MovieContext";
import { MovieType } from "@/types";
import { Grid } from "@chakra-ui/react";
import { useContext } from "react";
import MovieCard from "./movie-card";

type Props = {
  status?: "none" | "bookmarked" | "watched";
};

const MovieList: React.FC<Props> = ({ status = STATUS.NONE }: Props) => {
  const { movies, bookmarkedMovies, watchedMovies } = useContext(MovieContext);

  if (!movies) {
    return <h1>No Movies Displayed!</h1>;
  }

  return (
    <Grid
      gridTemplateColumns={{
        sm: "1fr 1fr 1fr",
        md: "1fr 1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      gap={6}
    >
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
