import Link from "next/link";
import SearchBar from "./search-bar";

const AdminTopBar = () => {
  return (
    <header className="bg-gray-800 fixed z-40 top-0 flex justify-between w-full  p-4 items-center">
      {/* Brand Logo */}
      <div className="w-3/6 flex items-center text-xl justify-center text-white px-6">
        <Link href={"/admin"}>Admin Dashboard</Link>
      </div>

      {/* Search Bar */}
      <SearchBar />
    </header>
  );
};

export default AdminTopBar;
