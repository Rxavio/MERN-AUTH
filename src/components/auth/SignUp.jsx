import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
const SignUp = () => {

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className=""
        onSubmit=""
      >
        <Typography variant="h5">signUp</Typography>
        <TextField
          className=""
          id="enter-name"
          label="enterName"
          variant="outlined"
          fullWidth
          value=""
          
        />
        <TextField
          className=""
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value=""
 
        />
        <TextField
          className=""
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value=""
         
        
        />
        <Button
          variant="contained"
          color="primary"
          className=""
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};
export default SignUp;