import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import { ThemeProvider } from "@mui/material";
import SignIn from "./pages/auth/SignIn";
import { MUItheme } from "./lib/theme/mui.theme";
import SignUp from "./pages/auth/Signup";
import { ApolloProvider } from "@apollo/client";
import { GqlClient } from "./lib/server_calls/gql/client";
import RenderLayout from "./components/layouts/RenderLayout";
import Home from "./pages/home/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ApolloProvider client={GqlClient}>
        <ThemeProvider theme={MUItheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RenderLayout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<SignIn />} />
                <Route path="/auth/register" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default App;
