import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
