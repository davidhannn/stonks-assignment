import React, { createContext, useContext, SetStateAction } from "react";
import { MovieType } from "@/types";

type MovieContextTypes = {
  movies: MovieType[] | null;
  bookmarkedMovies: MovieType[] | null;
  fetchMovies: () => void;
  handleSearch: () => void;
  handleBoomark: (value: SetStateAction<[MovieType]>) => void;
};

const initialState = {
  movies: null,
  bookmarkedMovies: null,
  fetchMovies: () => null,
  handleSearch: () => null,
  handleBookmark: () => null,
};

export const MovieContext = createContext(null);
