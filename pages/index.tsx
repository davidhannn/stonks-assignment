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
import { set } from "lodash";
import AlertNotice from "@/components/alert";

const inter = Inter({ subsets: ["latin"] });

const API_URL: string = "https://movie-database-alternative.p.rapidapi.com/";

const MovieContextProvider = ({ children }: PropsWithChildren) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieType[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  let setAlertTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (typeof window !== undefined) {
      const storedBookmarks = localStorage.getItem("bookmarkedMovies");
      const storedWatched = localStorage.getItem("watchedMovies");

      if (storedBookmarks) {
        const parsedArray = JSON.parse(storedBookmarks);
        setBookmarkedMovies([...parsedArray]);
      }

      if (storedWatched) {
        const parsedArray = JSON.parse(storedWatched);
        setWatchedMovies([...parsedArray]);
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

  useEffect(() => {
    if (watchedMovies.length !== 0) {
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    }
  }, [watchedMovies]);

  useEffect(() => {
    return () => {
      clearTimeout(setAlertTimeout);
    };
  }, []);

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
    const isMovieBookmarked = bookmarkedMovies.find(
      ({ imdbID }) => imdbID === movie.imdbID
    );

    if (!!isMovieBookmarked) {
      setAlert(true);
      setAlertTimeout = setTimeout(() => setAlert(false), 5000);
    } else {
      setBookmarkedMovies([...bookmarkedMovies, movie]);
    }
  };

  const handleWatched = (movie: MovieType) => {
    const filteredWatched = bookmarkedMovies.filter(
      ({ imdbID }) => imdbID !== movie.imdbID
    );
    setBookmarkedMovies(filteredWatched);
    setWatchedMovies([...watchedMovies, movie]);
  };

  const removeBookmark = (imdbID: string) => {
    const filteredMovies = bookmarkedMovies.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setBookmarkedMovies(filteredMovies);
  };

  const removeWatched = (imdbID: string) => {
    const filteredMovies = watchedMovies.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setWatchedMovies(filteredMovies);
  };

  const onSearchDebounced = useDebounce({
    func: fetchMovies,
    wait: 1000,
    dependency: [search],
  });

  return (
    <MovieContext.Provider
      value={{
        movies,
        bookmarkedMovies,
        watchedMovies,
        alert,
        search,
        fetchMovies,
        handleSearch,
        handleBookmark,
        handleWatched,
        removeBookmark,
        removeWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default function Home() {
  return (
    <MovieContextProvider>
      <AlertNotice />
      <main className={`${styles.main} ${inter.className}`}>
        <SearchBar />
        <MovieTabs />
      </main>
    </MovieContextProvider>
  );
}
