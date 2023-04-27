import { Text, Input, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { MovieContext } from "@/context/MovieContext";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { movies, search, fetchMovies, handleSearch } =
    useContext(MovieContext);
  // const { movies, search, fetchMovies, handleSearch } = useFetchMovies();
  // const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Text mb="8px">Value: {search}</Text>
      <Input
        value={search}
        onChange={handleSearch}
        placeholder="Here is a sample placeholder"
        size="sm"
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
    </>
  );
};

export default SearchBar;
