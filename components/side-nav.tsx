import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import NavLinks from "./nav-links";

const SideNavbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <aside className="bg-gray-800 h-110 w-1/6 sticky top-20 ml-1  flex flex-col rounded items-center justify-between">
      <nav className="flex flex-col  mt-12 justify-evenly w-full">
        <NavLinks />
      </nav>
    </aside>
  );
};

export default SideNavbar;
