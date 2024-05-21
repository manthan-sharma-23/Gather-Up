import { Button, TextField } from "@mui/material";

const SignIn = () => {
  return (
    <div className="p-2 h-auto w-full flex flex-col justify-center items-center">
      <p className="font-poppins text-2xl font-bold">Gather Up</p>
      <form className="w-full h-auto">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Hey</Button>
      </form>
    </div>
  );
};

export default SignIn;
