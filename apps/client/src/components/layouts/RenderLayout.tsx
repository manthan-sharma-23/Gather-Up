import { Outlet } from "react-router-dom";
import { useGetUser } from "@/lib/hooks/useGetUser";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const RenderLayout = () => {
  const { loading, error } = useGetUser();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error fetching user data!</Alert>;

  return <Outlet />;
};

export default RenderLayout;
