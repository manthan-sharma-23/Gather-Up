import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import { ThemeProvider } from "@mui/material";
import SignIn from "./pages/auth/SignIn";
import { MUItheme } from "./lib/theme/mui.theme";
import SignUp from "./pages/auth/Signup";
import { ApolloProvider } from "@apollo/client";
import { GqlClient } from "./lib/server_calls/gql/client";

function App() {
  return (
    <ApolloProvider client={GqlClient}>
      <ThemeProvider theme={MUItheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/login" element={<SignIn />} />
              <Route path="/auth/register" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
