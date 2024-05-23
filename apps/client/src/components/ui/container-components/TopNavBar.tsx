import { UserAtom } from "@/lib/store/atoms/user.atom";
import React from "react";
import { useRecoilValue } from "recoil";
import Avatar from "../ui-utilities/Avatar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Hrefs } from "@/lib/config/href";
import { IoMdAdd } from "react-icons/io";
import { LiaCalendarAltSolid } from "react-icons/lia";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import ProfileAvatarDropDown from "../ui-utilities/ProfileAvatarDropDown";

const TopNavBar = () => {
  const user = useRecoilValue(UserAtom);

  if (!user) return;

  return (
    <div className="flex justify-between items-center w-[75%]  h-full">
      <div className="w-[40%] h-full flex justify-start gap-3 items-center">
        <Link
          to={Hrefs.home}
          className="transition-all font-bold font-mono hover:bg-black/80 text-white bg-black/85 rounded-md p-2 tracking-tighter text-2xl flex justify-center items-center"
        >
          GuP
        </Link>
        <p className="text-xl font-medium font-mono tracking-tight ">
          Gather Up
        </p>
      </div>
      <div className="w-auto  h-full flex justify-end items-center gap-5">
        <Button
          className="h-[60%]  gap-2 p-1"
          color="success"
          variant="outlined"
        >
          <LiaCalendarAltSolid className="text-xl" />
          <p>Calendar</p>
        </Button>
        <Button
          className="h-[60%] flex gap-1 items-center "
          color="secondary"
          variant="outlined"
        >
          <IoMdAdd className="text-xl" />
          Create Event
        </Button>
        <div className="cursor-pointer hover:scale-[1.05] rounded-full shadow-sm hover:opacity-85 p-1 bg-palewhite">
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Avatar
                borderColor={"#F5F5F5"}
                borderSize={10}
                size={43}
                style="character"
                display={user.name || user.email}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ProfileAvatarDropDown user={user} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
