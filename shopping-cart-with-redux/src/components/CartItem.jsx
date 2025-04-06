import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItemToCart,
} from "../features/cart/cartSlice";

function CartItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="border-b border-zinc-400 pb-4 mb-4 lg:pb-8 lg:mb-8 md:flex md:justify-between md:gap-8 lg:justify-between lg:gap-0">
      {/* ----- left ----- */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <img
          src={img}
          alt={title}
          className="h-25 w-25 rounded-full object-cover object-top mix-blend-darken shrink-0"
        />
        <p className="sm:text-lg">{title}</p>
      </div>
      {/* ----- right ----- */}
      <div className="flex items-center justify-between sm:gap-10 sm:justify-start">
        <div className="flex gap-5 items-center">
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              dispatch(decreaseQty({ id }));
            }}
            className="p-1 cursor-pointer text-xl"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => dispatch(increaseQty({ id }))}
            className="p-1 cursor-pointer text-xl"
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p className="text-lg">&#8377;{(price * quantity).toLocaleString()}</p>
        <button
          onClick={() => dispatch(removeItemToCart({ id }))}
          className="text-lg p-2 cursor-pointer"
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
