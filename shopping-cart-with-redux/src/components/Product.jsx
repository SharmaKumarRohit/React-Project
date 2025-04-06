import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";

function Product({ id, title, price, img }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAdd = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.error("Item already added to cart");
        return;
      }
    }
    const newCartItem = {
      id,
      title,
      price,
      img,
      quantity: 1,
    };
    dispatch(addItemToCart(newCartItem));
    toast.info("Item added!!");
  };
  return (
    <div className="bg-[#efefef] rounded p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-101">
      <img
        src={img}
        alt={title}
        className="max-w-full h-75 object-contain aspect-[4/3] mix-blend-darken"
      />
      <p className="mt-4 text-lg font-medium leading-[1.4]">{title}</p>
      <p className="mt-1 mb-3 text-lg font-bold leading-[1.5]">
        &#8377;{price.toLocaleString()}
      </p>
      <button
        className="bg-[#2980b9] text-[#ecf0f1] font-medium rounded-md cursor-pointer px-5 py-2 hover:bg-[#1a74b1] transition-colors duration-200"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
