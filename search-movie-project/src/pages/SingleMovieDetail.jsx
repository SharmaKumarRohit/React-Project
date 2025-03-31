import axios from "axios";
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";
import Container from "../components/UI/Container";
import styles from "./SingleMovieDetail.module.css";

export async function loader({ params }) {
  const imdbId = params.imdbId;
  try {
    const singleMovieEndPoint = `https://www.omdbapi.com/?apikey=${apikey}&i=${imdbId}&plot=full`;
    const response = await axios.get(singleMovieEndPoint);
    return { movie: response.data, isError: false, error: "" };
  } catch (error) {
    const errorMsg =
      error?.response?.data?.Error || error.message || "Something Went Wrong!!";
    return { movie: null, isError: true, error: errorMsg };
  }
}
function SingleMovieDetail() {
  const { movie: movieDetail, isError, error } = useLoaderData();
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieDetail && movieDetail.Response === "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  console.log(movieDetail);
  return (
    <Container>
      <div className={styles.movie_container}>
        <div>
          <h2>{movieDetail.Title}</h2>
          <img
            src={movieDetail.Poster}
            alt={movieDetail.Title}
            className={styles.movie_img}
          />
          <p className={styles.info_container_left}>
            <span>Release Date</span>
            <span>{movieDetail.Released}</span>
          </p>
          <p className={styles.info_container_left}>
            <span>Genre</span>
            <span>{movieDetail.Genre}</span>
          </p>
          <p className={styles.info_container_left}>
            <span>Runtime</span>
            <span>{movieDetail.Runtime}</span>
          </p>
          <p className={styles.info_container_left}>
            <span>Language</span>
            <span>{movieDetail.Language}</span>
          </p>
          <p className={styles.info_container_left}>
            <span>Awards</span>
            <span>{movieDetail.Awards}</span>
          </p>
        </div>
        <div>
          <div>
            <h3>Plot</h3>
            <p>{movieDetail.Plot}</p>
          </div>
          <div>
            <h3 className={styles["m-05"]}>Actors</h3>
            <p>{movieDetail.Actors}</p>
          </div>
          <div>
            <h3 className={styles["m-05"]}>Country</h3>
            <p>{movieDetail.Country}</p>
          </div>
          <div>
            <h3 className={styles["m-05"]}>More Information</h3>
            <p className={styles.info_container_right}>
              <span>Director</span>
              <span>{movieDetail.Director}</span>
            </p>
            <p className={styles.info_container_right}>
              <span>imdb Rating</span>
              <span>{movieDetail.imdbRating}</span>
            </p>
            <p className={styles.info_container_right}>
              <span>imdb Votes</span>
              <span>{movieDetail.imdbVotes}</span>
            </p>
            <p className={styles.info_container_right}>
              <span>Boxoffice</span>
              <span>{movieDetail.BoxOffice}</span>
            </p>
            <p className={styles.info_container_right}>
              <span>Metascore</span>
              <span>{movieDetail.Metascore}</span>
            </p>
            <p className={styles.info_container_right}>
              <span>Rated</span>
              <span>{movieDetail.Rated}</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SingleMovieDetail;
