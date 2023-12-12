import SideNavbar from "@/components/side-nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex grow  h-full w-full absolute top-20">
      <SideNavbar />
      <div className="w-5/6  bg-gray-100 mx-2 border border-gray-300">
        {children}
      </div>
    </div>
  );
};

export default layout;
