import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useProducts } from "../utils/Context";

function Details() {
  const navigate = useNavigate();
  const { products, setProducts } = useProducts();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!product) {
      setProduct(products.filter((prod) => prod.id == id)[0]);
    }
    // const url = "https://fakestoreapi.com/";
    // async function getProduct() {
    //   try {
    //     const res = await fetch(`${url}products/${id}`);
    //     const data = await res.json();
    //     setProduct(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getProduct();
  }, []);
  const handleDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };
  return product ? (
    product && (
      <div className="w-[70%] h-full flex justify-center gap-10 items-center m-auto p-[10%]">
        <img
          className="h-[80%] w-[40%] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="content w-[55%] flex flex-col gap-3">
          <h1 className="text-4xl">{product.title}</h1>
          <h3 className="text-zinc-400 text-lg">{product.category}</h3>
          <h2 className="text-red-300 text-lg">
            ₹ {Math.round(product.price).toLocaleString()}
          </h2>
          <p>{product.description}</p>
          <div className="btn-group mt-3">
            <Link
              to={`/edit/${product.id}`}
              className="border border-blue-300 text-blue-300 px-5 py-2 rounded-md mr-5 hover:bg-blue-50 transition-colors duration-200"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="border border-red-300 text-red-300 px-5 py-2 rounded-md hover:bg-red-50 transition-colors duration-200 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
}

export default Details;
