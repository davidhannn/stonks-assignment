import axios from "axios";
import React, { useState } from "react";
import { MovieType } from "@/types";

const API_URL: string = "https://movie-database-alternative.p.rapidapi.com/";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    url: API_URL,
    params: {
      s: search,
      r: "json",
      page: "1",
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  const fetchMovies: () => Promise<void> = async () => {
    axios.request(options).then((response) => {
      console.log(response.data.Search, "here");
      setMovies(response.data.Search);
    });
  };

  const handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  return {
    movies,
    search,
    fetchMovies,
    handleSearch,
  };
};
