import { Link } from "react-router-dom";

function Card({ id, image, title }) {
  return (
    <Link
      to={`/details/${id}`}
      className="card group text-center h-72 border border-zinc-300 rounded-sm p-3"
    >
      <div
        className="h-[80%] bg-contain bg-no-repeat bg-center group-hover:scale-105 transition-transform duration-200"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1 className="mt-2 hover:text-blue-400 transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h1>
    </Link>
  );
}

export default Card;
