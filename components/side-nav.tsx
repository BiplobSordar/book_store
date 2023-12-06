import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import NavLinks from "./nav-links";
// , FaSignOutAlt signout icon

const SideNavbar = () => {
  return (
    <aside className="bg-gray-800 h-110 w-1/6 sticky top-20 ml-1  flex flex-col rounded items-center justify-between">
      <nav className="flex flex-col  mt-12 justify-evenly w-full">
        {/* {console.log(<NavLinks />)} */}
        <NavLinks />
      </nav>

      <div className="w-full">
        <Link
          className="h-12 w-full  my-2 text-white text-xl flex justify-center  font-medium items-center hover:bg-gray-700"
          href={"login"}
        >
          <FaSignInAlt />
          <p className="ml-6">Login</p>
        </Link>
      </div>
    </aside>
  );
};

export default SideNavbar;
