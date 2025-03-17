import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();
function Context({ children }) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  // useEffect(() => {
  //   const baseURL = "https://fakestoreapi.com/products";
  //   async function getProducts() {
  //     try {
  //       const res = await fetch(baseURL);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getProducts();
  // }, []);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}

export default Context;
