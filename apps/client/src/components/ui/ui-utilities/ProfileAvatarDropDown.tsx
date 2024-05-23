import { User } from "@/lib/models/interfaces/auth.page";
import { IoMdPerson } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileAvatarDropDown = ({ _user }: { user: User }) => {
  return (
    <div className="w-[7vw] ">
      <Link
        to="/profile"
        className="font-medium px-2 w-full text-black/80 hover:bg-[#E4E2F3] rounded-md h-[3.5vh] flex justify-start items-center  gap-2"
      >
        <IoMdPerson className="h-full" />
        <p className="font-normal">Profile</p>
      </Link>
      <Link
        to="/logout"
        className="font-medium px-2 w-full text-black/80 hover:bg-[#E4E2F3] rounded-md h-[3.5vh] flex justify-start items-center  gap-2"
      >
        <RiLogoutBoxLine className="h-full" />
        <p className="font-normal">Logout</p>
      </Link>
    </div>
  );
};

export default ProfileAvatarDropDown;
