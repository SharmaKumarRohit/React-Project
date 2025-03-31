import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import NoImageFound from "../assets/NoImageFound.jpeg";

function MovieCard({ imdbID, Title, Type, Year, Poster }) {
  return (
    <Link to={`/detail/${imdbID}`} className={styles.card_container}>
      <img
        src={Poster === "N/A" ? NoImageFound : Poster}
        alt={Title}
        className={styles.card_img}
      />
      <p className={styles.card_title}>{Title}</p>
      <p className={styles.card_year}>{Year}</p>
      <p className={styles.card_type}>{Type}</p>
    </Link>
  );
}

export default MovieCard;
