import { products } from "../data/products";
import Product from "./Product";
import Container from "./UI/Container";

function Products() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold my-4">Best of ARC</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
