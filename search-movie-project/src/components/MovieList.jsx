import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ data }) {
  const { movieResponse, isError, error } = data;
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieResponse && movieResponse.Response === "False") {
    return <h1>{movieResponse.Error || "No result found!!"}</h1>;
  }
  return (
    <div className={styles.movie_container}>
      {movieResponse &&
        movieResponse.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
    </div>
  );
}

export default MovieList;
