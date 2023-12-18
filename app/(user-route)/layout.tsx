import SideNavbar from "@/components/side-nav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session?.user.role == "ADMIN") redirect("/admin");
  return (
    <div className="flex grow w-full absolute top-20">
      <SideNavbar />
      <div className="w-5/6 bg-gray-100 mx-2 border border-gray-300 shadow-md">
        {children}
      </div>
    </div>
  );
};

export default layout;
