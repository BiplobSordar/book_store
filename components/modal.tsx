"use client";
import { MdClose } from "react-icons/md";
interface modalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  heading: string;
}

const Modal = ({ children, isOpen, onClose, heading }: modalProps) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full h-full flex items-center justify-center`}
    >
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="relative w-1/2 h-80 border shadow-2xl rounded-lg ">
        {/* <div className="flex items-center w-full"> */}
        <button className="absolute top-6 right-10" onClick={onClose}>
          <MdClose size={30} />
        </button>
        {/* </div> */}

        <div className="modal-content h-full flex flex-col items-center justify-center">
          {/* Modal Header */}
          <div className="modal-header">
            <h3 className="text-lg font-semibold">{heading}</h3>
          </div>

          {/* Modal Body - Form */}
          <div className="w-3/4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
