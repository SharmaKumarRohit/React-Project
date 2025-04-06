import { createPortal } from "react-dom";

function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div
        className="w-screen h-screen fixed bg-backdrop backdrop-blur-sm z-10"
        onClick={closeModal}
      ></div>
      <div className="font-Inter max-w-[1280px] w-[90%] bg-zinc-50 fixed z-20 left-1/2 -translate-x-1/2 top-[10%] max-h-[700px] h-[80%] p-4 lg:p-8 rounded overflow-y-auto">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
