import { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import Container from "./UI/Container";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce(
    (accmulator, cartItem) => accmulator + cartItem.quantity,
    0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isModalOpen]);
  return (
    <header className="bg-[#3879a5] text-[#ecf0f1]">
      <Container>
        <nav className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-medium">ARC Shop</h1>
          <button
            className="flex gap-3 items-center bg-transparent text-white font-medium text-lg cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="relative">
              <BsCartFill />
              {totalQuantity > 0 && (
                <span className="absolute -top-3 -right-3 border border-white rounded-full w-5 h-5 text-xs bg-red-400 leading-[1.5]">
                  {totalQuantity}
                </span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <Cart />
          </Modal>
        )}
      </Container>
    </header>
  );
}

export default Header;
