import { useEffect, useState } from "react";
import { useProducts } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { products, setProducts } = useProducts();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const { image, title, category, price, description } = product;
  const handleOnchange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    setProduct(products.filter((prod) => prod.id == id)[0]);
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      image.trim().length < 4 ||
      title.trim().length < 4 ||
      category.trim().length < 4 ||
      price.trim().length < 1 ||
      description.trim().length < 4
    ) {
      alert("Each fields must be atleast 5 characters");
      return;
    }
    const pi = products.findIndex((prod) => prod.id == id);
    const copyProd = [...products];
    copyProd[pi] = { ...products[pi], ...product };
    setProducts(copyProd);
    localStorage.setItem("products", JSON.stringify(copyProd));
    navigate(-1);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-screen h-screen p-[5%]"
    >
      <div className="w-1/2">
        <h1 className="text-2xl font-medium">Edit Product</h1>
      </div>
      <input
        type="url"
        placeholder="image link"
        className="bg-zinc-200 text-lg p-3 rounded-md w-1/2"
        id="image"
        value={image}
        onChange={handleOnchange}
      />
      <input
        type="text"
        placeholder="title"
        className="bg-zinc-200 text-lg p-3 rounded-md w-1/2"
        id="title"
        value={title}
        onChange={handleOnchange}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="bg-zinc-200 text-lg p-3 rounded-md w-[48.8%]"
          id="category"
          value={category}
          onChange={handleOnchange}
        />
        <input
          type="number"
          placeholder="price"
          className="bg-zinc-200 text-lg p-3 rounded-md w-[48.8%]"
          id="price"
          value={price}
          onChange={handleOnchange}
        />
      </div>
      <textarea
        rows="10"
        placeholder="enter product description here..."
        className="bg-zinc-200 w-1/2 rounded-md p-3 text-lg"
        id="description"
        value={description}
        onChange={handleOnchange}
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 border border-blue-300 text-blue-300 rounded-md cursor-pointer hover:bg-blue-50 transition-colors duration-200">
          Save Edit
        </button>
      </div>
    </form>
  );
}

export default Edit;
