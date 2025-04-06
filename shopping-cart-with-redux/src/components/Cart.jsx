import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  if (cart.length === 0)
    return (
      <h1 className="text-xl sm:text-4xl font-medium text-zinc-500 absolute top-1/2 left-1/2 -translate-1/2">
        No item found!!
      </h1>
    );
  const totalAmount = cart.reduce(
    (accmulator, item) => accmulator + item.price * item.quantity,
    0
  );
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 lg:mb-8">Shopping Cart</h1>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1 className="text-2xl font-medium">
        Total Amount: &#8377;{totalAmount.toLocaleString()}
      </h1>
    </>
  );
}

export default Cart;
