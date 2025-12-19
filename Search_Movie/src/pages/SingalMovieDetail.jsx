import axios from "axios";
import { apiKey } from "../constant";
import { useLoaderData } from "react-router-dom";

export async function loader({ params: { imdbId } }) {
  try {
    const URL = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=full`;
    const response = await axios.get(URL);
    return { movie: response.data, isError: false, error: "" };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "Something Went Wrong!";
    return { movie: null, isError: true, error: errorMessage };
  }
}
function SingalMovieDetail() {
  const { movie, isError, error } = useLoaderData();
  if (isError) {
    return (
      <h1 className="pt-6 font-bold text-2xl text-indigo-500 text-center">
        {error}
      </h1>
    );
  }
  if (movie && movie.Response === "False") {
    return (
      <h1 className="pt-6 font-bold text-2xl text-indigo-500 text-center">
        {movie.Error}
      </h1>
    );
  }
  const {
    Title,
    Poster,
    Released,
    Genre,
    Runtime,
    Language,
    Awards,
    Plot,
    Actors,
    Country,
    Director,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Metascore,
    Rated,
  } = movie;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6 pb-4">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-xl text-indigo-950/90 mb-4">{Title}</h2>
          <img
            src={
              Poster === "N/A"
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAA4GljyYrJDVf_LiziAbbvnvtaZg6pGejtw&s"
                : Poster
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAA4GljyYrJDVf_LiziAbbvnvtaZg6pGejtw&s";
            }}
            alt={Title}
            className="aspect-square object-cover object-top rounded-md shadow-md sm:shadow-sm max-sm:w-full"
          />
          <div className="flex flex-col gap-2 sm:text-[17px] font-medium text-indigo-950/80 mt-4">
            <p className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
              <span className="sm:col-span-1">Release Date</span>
              <span className="sm:col-span-2">{Released}</span>
            </p>
            <p className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
              <span className="sm:col-span-1">Genre</span>
              <span className="sm:col-span-2">{Genre}</span>
            </p>
            <p className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
              <span className="sm:col-span-1">Runtime</span>
              <span className="sm:col-span-2">{Runtime}</span>
            </p>
            <p className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
              <span className="sm:col-span-1">Language</span>
              <span className="sm:col-span-2">{Language}</span>
            </p>
            <p className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
              <span className="sm:col-span-1">Awards</span>
              <span className="sm:col-span-2">{Awards}</span>
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h3 className="font-semibold text-xl text-indigo-950/90 mb-2">
              Plot
            </h3>
            <p className="sm:text-[17px] font-medium text-indigo-950/80">
              {Plot}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-xl text-indigo-950/90 mb-2">
              Actors
            </h3>
            <p className="sm:text-[17px] font-medium text-indigo-950/80">
              {Actors}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-xl text-indigo-950/90 mb-2">
              Country
            </h3>
            <p className="sm:text-[17px] font-medium text-indigo-950/80">
              {Country}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-indigo-950/90 mb-2">
              More Information
            </h3>
            <div className="flex flex-col gap-2 sm:text-[17px] font-medium text-indigo-950/80">
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">Director</span>
                <span className="sm:col-span-2">{Director}</span>
              </p>
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">IMDB Rating</span>
                <span className="sm:col-span-2">{imdbRating}</span>
              </p>
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">IMDB Votes</span>
                <span className="sm:col-span-2">{imdbVotes}</span>
              </p>
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">Box Office</span>
                <span className="sm:col-span-2">{BoxOffice || "N/A"}</span>
              </p>
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">Meta Score</span>
                <span className="sm:col-span-2">{Metascore}</span>
              </p>
              <p className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                <span className="sm:col-span-1">Rated</span>
                <span className="sm:col-span-2">{Rated}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingalMovieDetail;
