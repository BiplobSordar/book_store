import SideNavbar from "@/components/side-nav";
import TopBar from "@/components/topbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <div className="flex grow  h-full w-full absolute top-20">
        <SideNavbar />
        <div className="w-5/6">{children}</div>
      </div>
    </>
  );
};

export default layout;
