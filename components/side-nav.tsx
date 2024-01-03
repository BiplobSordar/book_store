import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import NavLinks, { NavLinksProps } from "./nav-links";

let clientLinks = [
  { name: "Home", href: "/", icon: "FaHome" },
  { name: "Books", href: "/books", icon: "FaBook" },
  { name: "Order", href: "/order", icon: "FaClipboardList" },
  { name: "Profile", href: "/profile", icon: "FaUser" },
  { name: "Setting", href: "/setting", icon: "FaCog" },
];

let adminLinks = [
  { name: "Dashboard", href: "/admin", icon: "FaTachometerAlt" },
  { name: "Profile", href: "/admin/profile", icon: "FaUser" },
  { name: "User", href: "/admin/users", icon: "FaColumns" },
  { name: "Books", href: "/admin/books", icon: "FaBook" },
  { name: "Category", href: "/admin/category", icon: "FaSearch" },
  { name: "author", href: "/admin/author", icon: "FaUserSecret" },
  { name: "Publisher", href: "/admin/publisher", icon: "FaGlobe" },
  { name: "Banner", href: "/admin/banner", icon: "FaImage" },
];

const SideNavbar = async () => {
  const session = await getServerSession(authOptions);

  const links: NavLinksProps[] =
    session?.user.role === "ADMIN" || session?.user.role === "SUPER_ADMIN"
      ? adminLinks
      : clientLinks.map((link) => ({
          name: link.name,
          href: link.href,
          icon: link.icon,
        }));

  return (
    <aside className="bg-gray-800 pb-3 h-side-nav-h w-1/6 sticky top-20 ml-1  flex flex-col rounded items-center justify-between">
      <nav className="h-full flex flex-col  mt-12 justify-evenly w-full">
        <NavLinks data={links} />
      </nav>
    </aside>
  );
};

export default SideNavbar;
