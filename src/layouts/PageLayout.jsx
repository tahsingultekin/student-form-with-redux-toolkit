import React from "react";
import SideBar from "../pages/SideBar";
import TopBar from "../pages/TopBar";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <SideBar />
        <div className="w-9/12 h-screen flex flex-col items-center">
          <TopBar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
