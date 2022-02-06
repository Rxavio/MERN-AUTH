import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const SignIn = () => {
  
  return (
    <>
      <form
        noValidate
        autoComplete="off">

        <Typography variant="h5">signIn</Typography>
        <TextField
          className=""
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
        />
        <TextField
          className=""
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className=""
          type="submit"
        >
          SignIn
        </Button>
      </form>
    </>
  );
};
export default SignIn;