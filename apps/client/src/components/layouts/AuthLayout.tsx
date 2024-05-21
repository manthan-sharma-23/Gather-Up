import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[30vw] h-auto rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
