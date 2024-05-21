import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import { ThemeProvider } from "@mui/material";
import SignIn from "./pages/auth/SignIn";
import { MUItheme } from "./lib/theme/mui.theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={MUItheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/login" element={<SignIn />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
