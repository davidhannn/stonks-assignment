import { Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useFetchMovies } from "@/hooks/useFetchMovies";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { movies, fetchMovies } = useFetchMovies();
  const handleChange = (event) => setValue(event.target.value);

  // useFetchMovies();
  console.log(movies, "movies");
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
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
