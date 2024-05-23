import { useRecoilState } from "recoil";
import { UserAtom } from "../store/atoms/user.atom";
import { useQuery } from "@apollo/client";
import { GET_USER_QUERY } from "../server_calls/gql/queries/user/user";
import { useEffect } from "react";

export const useGetUser = () => {
  const [user, setUser] = useRecoilState(UserAtom);
  const token = window.localStorage.getItem("token");

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data && !loading && !error) {
      setUser(data.user);
    }
  }, [data, loading, error]);

  return { user, loading, error };
};
