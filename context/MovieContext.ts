import React, { createContext, useContext } from "react";
import { MovieType } from "@/types";

type MovieContextTypes = {
  movies: MovieType[] | null;
  bookmarkedMovies: [] | null;
  fetchMovies: () => void;
  handleSearch: () => void;
};

const initialState = {
  movies: null,
  bookmarkedMovies: null,
  fetchMovies: () => null,
  handleSearch: () => null,
};

export const MovieContext = createContext(null);
