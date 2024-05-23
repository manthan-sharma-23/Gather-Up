import { appSideBarOptions } from "@/lib/utils/lists/sidebar.list";
import React from "react";
import { Link } from "react-router-dom";

const AppSideBar = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      {appSideBarOptions.map((option) => (
        <Link
          to={option.href}
          className="w-full justify-start gap-4 flex items-center h-[4.5vh] px-3 rounded-md hover:bg-[#E3E0F3] text-xl"
        >
          <option.icon />
          <p>{option.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default AppSideBar;
