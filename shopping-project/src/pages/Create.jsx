import { useState } from "react";
import { useProducts } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const { products, setProducts } = useProducts();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const { image, title, category, price, description } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      image.trim().length < 4 ||
      title.trim().length < 4 ||
      category.trim().length < 4 ||
      price.trim().length < 1 ||
      description.trim().length < 4
    ) {
      toast.error("Each fields must be atleast 5 characters");
      return;
    }
    const product = {
      id: crypto.randomUUID(),
      image,
      title,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    toast.success("Product created successfully");
  };
  const handleOnchange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-screen h-screen p-[5%]"
    >
      <div className="w-1/2">
        <h1 className="text-2xl font-medium">Add New Product</h1>
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
          Add
        </button>
      </div>
    </form>
  );
}

export default Create;
