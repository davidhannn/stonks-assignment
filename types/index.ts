export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  status?: "none" | "bookmarked" | "watched";
};
