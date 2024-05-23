import { User } from "@/lib/models/interfaces/auth.page";
import { atom } from "recoil";

export const UserAtom = atom({
  key: "user/atom/key",
  default: null as User | null,
});
