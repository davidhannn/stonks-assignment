import axios from "axios";
import { useState } from "react";

export const useFetchMovies = () => {
  const [movie, setMovie] = useState();
  const options = {
    method: "GET",
    url: "https://movie-database-alternative.p.rapidapi.com/",
    params: {
      s: "Avengers Endgame",
      r: "json",
      page: "1",
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  const fetchMovies = async () => {
    axios.request(options).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });
    console.log("does it come here");
    // const response = await axios.request(options);

    // console.log(response.data, "response");
    // return response;
  };

  return {
    movie,
    fetchMovies,
  };
};
