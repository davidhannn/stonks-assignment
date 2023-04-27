import { Text, Input, Button, Flex, Box, Spacer } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieContext } from "@/context/MovieContext";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { movies, search, fetchMovies, handleSearch } =
    useContext(MovieContext);

  return (
    <Flex p="8">
      <Input
        value={search}
        onChange={handleSearch}
        placeholder="Search Movies..."
        aria-label="searchmovies"
        size="md"
        mr="4"
      />

      <Button
        // isLoading
        loadingText="Submitting"
        colorScheme="teal"
        variant="outline"
        onClick={fetchMovies}
      >
        Submit
      </Button>
    </Flex>
  );
};

export default SearchBar;
