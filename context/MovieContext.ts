import React, {
  createContext,
  useContext,
  SetStateAction,
  ChangeEvent,
} from "react";
import { MovieType } from "@/types";

type MovieContextTypes = {
  movies: MovieType[] | null;
  bookmarkedMovies: MovieType[] | null;
  watchedMovies: MovieType[] | null;
  search: string;
  alert: boolean;
  fetchMovies: () => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBookmark: (movie: MovieType) => void;
  handleWatched: (movie: MovieType) => void;
  removeBookmark: (imdbID: string) => void;
  removeWatched: (imdbID: string) => void;
};

const initialState = {
  movies: [],
  bookmarkedMovies: [],
  watchedMovies: [],
  search: "",
  alert: false,
  fetchMovies: () => {},
  handleSearch: () => {},
  handleBookmark: () => {},
  handleWatched: () => {},
  removeBookmark: () => {},
  removeWatched: () => {},
};

export const MovieContext = createContext<MovieContextTypes>(initialState);
