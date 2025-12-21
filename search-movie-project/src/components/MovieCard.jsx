import { Link } from "react-router-dom";

function MovieCard({ Title, Poster, Year, Type, imdbID }) {
  return (
    <>
      <Link
        to={`detail/${imdbID}`}
        className="bg-white p-4 rounded-lg hover:scale-[1.03] transition-transform duration-300 shadow-md"
      >
        <img
          src={
            Poster === "N/A"
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAA4GljyYrJDVf_LiziAbbvnvtaZg6pGejtw&s"
              : Poster
          }
          alt={Title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAA4GljyYrJDVf_LiziAbbvnvtaZg6pGejtw&s";
          }}
          loading="lazy"
          className="rounded-lg aspect-square object-cover object-top w-full"
        />
        <h2 className="font-semibold text-indigo-600 text-xl mt-3 whitespace-nowrap overflow-hidden text-ellipsis">
          {Title}
        </h2>
        <p className="font-medium text-indigo-950/90 text-lg">{Year}</p>
        <p className="font-medium text-indigo-950/90 text-lg">{Type}</p>
      </Link>
    </>
  );
}

export default MovieCard;
