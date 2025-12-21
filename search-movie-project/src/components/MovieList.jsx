import MovieCard from "./MovieCard";

function MovieList({ data }) {
  const { movieApiResponse, isError, error } = data;
  if (isError) {
    return (
      <h1 className="mt-6 font-bold text-2xl text-indigo-500 text-center">
        {error}
      </h1>
    );
  }
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return (
      <h1 className="mt-6 font-bold text-2xl text-indigo-500 text-center">
        {movieApiResponse.Error || "No result found!"}
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 py-6">
      {movieApiResponse.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
