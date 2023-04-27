import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/search-bar";

import { MovieType } from "@/types";
import axios from "axios";
import { MovieContext } from "@/context/MovieContext";
import { PropsWithChildren, useContext } from "react";
import MovieTabs from "@/components/movie-tabs";
import useDebounce from "@/hooks/useDebounce";

const inter = Inter({ subsets: ["latin"] });

const API_URL: string = "https://movie-database-alternative.p.rapidapi.com/";

const MovieContextProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieType[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (typeof window !== undefined) {
      const storedArray = localStorage.getItem("bookmarkedMovies");

      if (storedArray) {
        const parsedArray = JSON.parse(storedArray);
        setBookmarkedMovies([...parsedArray]);
      }
    }
  }, []);

  useEffect(() => {
    if (bookmarkedMovies.length !== 0) {
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(bookmarkedMovies)
      );
    }
  }, [bookmarkedMovies]);

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
      setMovies(response.data.Search);
    });
  };

  const handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
    // onSearchDebounced();
  };

  const handleBookmark = (movie: MovieType) => {
    setBookmarkedMovies([...bookmarkedMovies, movie]);
  };

  const handleWatched = (movie: MovieType) => {
    setWatchedMovies([...watchedMovies, movie]);
  };

  const onSearchDebounced = useDebounce({
    func: fetchMovies,
    wait: 1000,
  });

  return (
    <MovieContext.Provider
      value={{
        movies,
        bookmarkedMovies,
        watchedMovies,
        fetchMovies,
        handleSearch,
        handleBookmark,
        handleWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default function Home() {
  return (
    <MovieContextProvider>
      <main className={`${styles.main} ${inter.className}`}>
        <SearchBar />
        <MovieTabs />
      </main>
    </MovieContextProvider>
  );
}
