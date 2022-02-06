import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" className="">
              <Link className="" to="/">
                toDoApp;
              </Link>
            </Typography>
           
              <>
                <Typography variant="subtitle2" className="">
                  Logged in as xavio
                </Typography>
                <Button
                  edge="end"
                  color="inherit"
                  className=""
                  
                >
                  <Link className="" to="/">
                    SignOut
                  </Link>
                </Button>
              </>
         
              <>
                <Button
                  edge="end"
                  color="inherit"
                  className=""
                >
                  <Link className="" to="/signin">
                    SignIn
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                  className=""
                >
                  <Link className="" to="/signup">
                    SignUp
                  </Link>
                </Button>
              </>
          
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
