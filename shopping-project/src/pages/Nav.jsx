import { useProducts } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav({ category }) {
  const { products } = useProducts();
  let distinct_category =
    products &&
    products.reduce((acc, product) => [...acc, product.category], []);
  distinct_category = [...new Set(distinct_category)];
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed(0)}, ${(
      Math.random() * 255
    ).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, 0.4)`;
  };
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link
        to="/create"
        className="py-2 px-5 border rounded border-blue-200 text-blue-400 hover:bg-blue-50 transition-colors duration-200"
      >
        Add New Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-xl w-[80%] font-medium mb-2">Category Filter</h1>
      <div className="w-[80%]">
        {category !== "undefined" && (
          <Link to={`/`} className="flex gap-2 items-center mb-2 capitalize">
            <span
              style={{ backgroundColor: color() }}
              className="block w-4 h-4 rounded-full"
            ></span>
            All
          </Link>
        )}
        {distinct_category.map((category, id) => (
          <Link
            to={`/?category=${category}`}
            key={id}
            className="flex gap-2 items-center mb-2 capitalize"
          >
            <span
              style={{ backgroundColor: color() }}
              className="block w-4 h-4 rounded-full"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
