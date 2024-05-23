import { UserLoginInput } from "@/lib/models/interfaces/auth.page";
import { SIGNIN_MUTATION } from "@/lib/server_calls/gql/mutations/auth/auth.signin";
import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [authInput, setAuthInput] = useState<Partial<UserLoginInput>>({});
  const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthInput({});
  }, []);

  const handleSignIn = async () => {
    try {
      console.log(authInput);
      if (authInput.email && authInput.password) {
        const result = (await signin({
          variables: {
            email: authInput.email,
            password: authInput.password,
          },
        })) as { data: { signin: { token: string } } };

        const token = result.data.signin.token;

        if (token) {
          window.localStorage.setItem("token", token);
          setAuthInput({});
          navigate("/");
        }
      } else {
        alert("Enter a valid email and password");
      }
    } catch (err) {
      console.log("Error during signin :" + error);
    }
  };

  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <p className="font-poppins text-3xl font-bold mb-2 text-gray-800">
        Gather_Up
      </p>
      <p className="text-gray-600 mb-6">Login to your account</p>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <TextField
            fullWidth
            disabled={loading}
            id="email"
            label="Email"
            variant="outlined"
            className="bg-white"
            value={authInput.email || ""}
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, email: e.target.value }))
            }
            InputProps={{
              className: "bg-white",
            }}
          />
        </div>
        <div className="mb-6">
          <TextField
            fullWidth
            disabled={loading}
            id="password"
            value={authInput.password || ""}
            label="Password"
            type="password"
            variant="outlined"
            className="bg-white"
            InputProps={{
              className: "bg-white",
            }}
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, password: e.target.value }))
            }
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className="py-2 mb-4"
          onClick={handleSignIn}
          disabled={loading}
        >
          Sign In
        </Button>
        <div className="text-center flex justify-center mt-4 gap-2">
          <p className="text-gray-600">New user?</p>
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
