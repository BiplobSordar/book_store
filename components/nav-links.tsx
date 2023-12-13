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
let clientLinks = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Books", href: "/books", icon: FaBook },
  { name: "Order", href: "/order", icon: FaClipboardList },
  { name: "Profile", href: "/profile", icon: FaUser },
  { name: "Setting", href: "/setting", icon: FaCog },
];

let adminLinks = [
  { name: "Dashboard", href: "/admin", icon: FaTachometerAlt },
  { name: "User", href: "/admin/users", icon: FaColumns },
  { name: "Books", href: "/admin/books", icon: FaBook },
  { name: "Category", href: "/admin/category", icon: FaSearch },
  { name: "author", href: "/admin/author", icon: FaUserSecret },
  { name: "Publisher", href: "/admin/publisher", icon: FaGlobe },
  { name: "Banner", href: "/admin/banner", icon: FaImage },
];

const NavLinks = () => {
  const session = useSession();
  const pathname = usePathname();

  return (
    <>
      {session?.data?.user?.role !== "ADMIN" ? (
        <>
          {clientLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`h-12 w-full  my-2 ${
                  pathname == link.href
                    ? "bg-white text-blue-600"
                    : "text-white"
                } text-xl flex justify-center  font-medium items-center hover:bg-gray-700`}
              >
                <LinkIcon />
                <p className="ml-6">{link.name}</p>
              </Link>
            );
          })}
          <div className="w-full">
            {session.status === "authenticated" ? (
              <button
                onClick={() => {
                  signOut();
                }}
                className="h-12 w-full  my-2 text-white text-xl flex justify-center  font-medium items-center hover:bg-gray-700"
              >
                <FaSignOutAlt />
                <p className="ml-6">Logout</p>
              </button>
            ) : (
              <Link
                className="h-12 w-full  my-2 text-white text-xl flex justify-center  font-medium items-center hover:bg-gray-700"
                href={"login"}
              >
                <FaSignInAlt />
                <p className="ml-6">Login</p>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          {adminLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`h-12 w-full  my-2 ${
                  pathname == link.href
                    ? "bg-white text-blue-600"
                    : "text-white"
                } text-xl flex justify-center  font-medium items-center hover:bg-gray-700`}
              >
                <LinkIcon />
                <p className="ml-6">{link.name}</p>
              </Link>
            );
          })}
          <div className="w-full">
            {session.status === "authenticated" ? (
              <button
                onClick={() => {
                  signOut();
                }}
                className="h-12 w-full  my-2 text-white text-xl flex justify-center  font-medium items-center hover:bg-gray-700"
              >
                <FaSignOutAlt />
                <p className="ml-6">Logout</p>
              </button>
            ) : (
              <Link
                className="h-12 w-full  my-2 text-white text-xl flex justify-center  font-medium items-center hover:bg-gray-700"
                href={"login"}
              >
                <FaSignInAlt />
                <p className="ml-6">Login</p>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NavLinks;
