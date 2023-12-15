"use client";
import { MdClose } from "react-icons/md";
interface modalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, isOpen, onClose, title }: modalProps) => {
  const handleClose = (e: any) => {
    if (e.target.id === "modalBackgound") {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div
      onClick={handleClose}
      id="modalBackgound"
      className="fixed inset-0 backdrop-blur-xl flex flex-col items-center justify-center h-full w-full bg-black  bg-opacity-70"
    >
      {/* modal  */}
      <div className="w-[600px] min-h-[300px] relative p-3 border bg-gray-300 shadow-xl rounded-lg ">
        <button onClick={onClose} className="absolute top-3 right-5">
          <MdClose size={30} />
        </button>
        <h1 className="text-lg text-center mt-3">{title}</h1>
        {/* modal Body  */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
