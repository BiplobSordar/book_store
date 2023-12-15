"use client";

interface ButtonProps {
  label: string;
  onclick?: () => void;
}
const Button = ({ label, onclick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default Button;
