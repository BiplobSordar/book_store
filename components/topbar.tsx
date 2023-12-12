import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

// Import Tailwind CSS styles
import Link from "next/link";
import "tailwindcss/tailwind.css";
import SearchBar from "./search-bar";

const TopBar = () => {
  return (
    <header className="bg-gray-800 fixed top-0 flex z-40 justify-between w-full  p-4 items-center">
      {/* Brand Logo */}
      <div className="w-1/6 flex items-center text-xl justify-center text-white px-6">
        <Link href={"/"}>Book Store</Link>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Icons */}
      <div className="w-2/6 flex space-x-10 justify-center items-center">
        {/* Profile Icon */}
        <div className="text-white font-medium mx-2">
          <Link href={"/profile"}>
            <FaUser size={20} />{" "}
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="text-white mx-2">
          <Link href={"/cart"}>
            <FaShoppingCart size={20} />
          </Link>
        </div>

        {/* Wish Icon */}
        <div className="text-white mx-2">
          <Link href={"/wish"}>
            <FaHeart size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
