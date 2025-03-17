import Nav from "./Nav";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { useProducts } from "../utils/Context";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const { products } = useProducts();
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const url = "https://fakestoreapi.com/products/";
  // async function getCategoryProduct() {
  //   try {
  //     const res = await fetch(`${url}/category/${category}`);
  //     const data = await res.json();
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    if (!filteredProducts || category === "undefined")
      setFilteredProducts(products);
    if (category !== "undefined") {
      // getCategoryProduct();
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  }, [category, products]);
  return products ? (
    <>
      <Nav category={category} />
      <div className="w-[85%] p-5 pt-[5%] grid card-container gap-4 overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
