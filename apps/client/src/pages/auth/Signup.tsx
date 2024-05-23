import { UserRegisterInput } from "@/lib/models/interfaces/auth.page";
import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNUP_MUTATION } from "../../lib/server_calls/gql/mutations/auth/auth.signin";

const SignUp = () => {
  const [authInput, setAuthInput] = useState<Partial<UserRegisterInput>>({});
  const [passwordError, setPasswordError] = useState(false);
  const [singup, { error }] = useMutation(SIGNUP_MUTATION);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthInput({});
  }, []);

  useEffect(() => {
    if (authInput.password && authInput.confirmPassword) {
      setPasswordError(authInput.password !== authInput.confirmPassword);
    } else {
      setPasswordError(false);
    }

    if (authInput.confirmPassword === "" || authInput.password === "")
      setPasswordError(true);
  }, [authInput.password, authInput.confirmPassword]);

  const handleSignUp = async () => {
    if (!passwordError) {
      try {
        console.log(authInput);
        if (authInput.email && authInput.password) {
          const result = (await singup({
            variables: {
              name: authInput.name,
              email: authInput.email,
              password: authInput.password,
            },
          })) as { data: { signup: { token: string } } };

          const token = result.data.signup.token;

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
    }
  };

  return (
    <div className="w-full p-4 min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <p className="font-poppins text-3xl font-bold mb-2 text-gray-800">
        Gather_Up
      </p>
      <p className="text-gray-600 mb-6">Create your account</p>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            className="bg-white"
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, name: e.target.value }))
            }
            InputProps={{
              className: "bg-white",
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            className="bg-white"
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, email: e.target.value }))
            }
            InputProps={{
              className: "bg-white",
            }}
          />
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className={`bg-white ${passwordError ? "border-red-500" : ""}`}
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, password: e.target.value }))
            }
            InputProps={{
              className: `bg-white ${passwordError ? "border-red-500" : ""}`,
            }}
          />
        </div>
        <div className="mb-6">
          <TextField
            fullWidth
            id="confirm_password"
            label="Confirm Password"
            type="password"
            variant="outlined"
            className={`bg-white ${passwordError ? "border-red-500" : ""}`}
            onChange={(e) =>
              setAuthInput((v) => ({ ...v, confirmPassword: e.target.value }))
            }
            InputProps={{
              className: `bg-white ${passwordError ? "border-red-500" : ""}`,
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
          )}
        </div>
        <Button
          onClick={handleSignUp}
          fullWidth
          variant="contained"
          color="primary"
          className="py-2"
          disabled={passwordError}
        >
          Sign Up
        </Button>
        <div className="text-center flex justify-center mt-2 gap-2">
          <p className="text-gray-600">Already Registered?</p>
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
