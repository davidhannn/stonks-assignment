// import { useFetchMovies } from "@/hooks/useFetchMovies";
import { Grid, GridItem } from "@chakra-ui/react";
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
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {movies?.map(({ Title, Year, imdbID, Type, Poster }: MovieType) => (
        // <GridItem w="100%" h="100%" bg="blue.500">
        <MovieCard
          key={imdbID}
          Title={Title}
          Year={Year}
          imdbID={imdbID}
          Type={Type}
          Poster={Poster}
        />
        // </GridItem>
      ))}
    </Grid>
  );
};

export default MovieList;
