import axios from "axios";
import { apikey } from "../constants";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { useLoaderData } from "react-router-dom";
import Container from "../components/UI/Container";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "Tom and Jerry";
  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMsg =
      error?.response?.data?.Error ||
      error?.message ||
      "Something Went Wrong!!";
    return { movieResponse: null, searchTerm, isError: true, error: errorMsg };
  }
}
function Home() {
  const data = useLoaderData();
  return (
    <Container>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </Container>
  );
}

export default Home;
