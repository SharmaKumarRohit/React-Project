import axios from "axios";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { apiKey } from "../constant";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "One Piece";
  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "Something Went Wrong!";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMessage,
    };
  }
}

function Home() {
  const data = useLoaderData();
  return (
    <>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </>
  );
}

export default Home;
