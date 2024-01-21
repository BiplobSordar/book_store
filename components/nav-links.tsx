"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaBook,
  FaClipboardList,
  FaCog,
  FaColumns,
  FaGlobe,
  FaHome,
  FaImage,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUser,
  FaUserSecret,
} from "react-icons/fa";
let Links = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Books", href: "/books", icon: FaBook },
  { name: "Order", href: "/order", icon: FaClipboardList },
  { name: "Profile", href: "/profile", icon: FaUser },
  { name: "Profile", href: "/admin/profile", icon: FaUser },
  { name: "Setting", href: "/setting", icon: FaCog },
  { name: "Dashboard", href: "/admin", icon: FaTachometerAlt },
  { name: "User", href: "/admin/users", icon: FaColumns },
  { name: "Books", href: "/admin/books", icon: FaBook },
  { name: "Category", href: "/admin/category", icon: FaSearch },
  { name: "author", href: "/admin/author", icon: FaUserSecret },
  { name: "Publisher", href: "/admin/publisher", icon: FaGlobe },
  { name: "Banner", href: "/admin/banner", icon: FaImage },
];

export interface NavLinksProps {
  name: string;
  href: string;
  icon: string;
  viewLink?: any;
}

const NavLinks = ({ data }: { data: NavLinksProps[] }) => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        {data.map((link) => {
          const viewIcon = Links.filter((item: any) => item.href === link.href);
          link.viewLink = viewIcon[0];
          const LinkIcon = link?.viewLink?.icon;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`h-12  rounded-lg shadow-lg bg-gray-700   m-2 ${
                pathname == link.href ? "bg-white text-blue-600" : "text-white"
              } text-xl flex justify-center  font-medium items-center hover:bg-gray-700`}
            >
              <LinkIcon />
              <p className="ml-6">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-56">
        {session.status === "authenticated" ? (
          <button
            onClick={() => {
              signOut();
            }}
            className="h-12 w-full rounded-lg shadow-lg bg-gray-700 m-2 text-white text-xl flex justify-center font-medium items-center hover:bg-gray-700"
          >
            <FaSignOutAlt />
            <p className="ml-5 hover:text-red-500">Logout</p>
          </button>
        ) : (
          <Link
            className="h-12  rounded-lg shadow-lg bg-gray-700 m-2 text-white text-xl flex justify-center  font-medium items-center hover:text-green-500"
            href={"login"}
          >
            <FaSignInAlt />
            <p className="ml-6">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
