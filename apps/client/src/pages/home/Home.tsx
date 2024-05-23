import { UserAtom } from "@/lib/store/atoms/user.atom";
import React from "react";
import { useRecoilValue } from "recoil";

const Home = () => {
  const user = useRecoilValue(UserAtom);

  return <div>{user?.email}</div>;
};

export default Home;
