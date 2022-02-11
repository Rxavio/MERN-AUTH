import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  authButton: {
    right: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fafafa",
  },
}));


const NavBar = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <>
        <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4"className={classes.title}>
              {/* <Link className="" to="/"> */}
              <Link className={classes.linkStyle} to="/">
                toDoApp;
              </Link>
            </Typography>
           
              <>
                <Typography variant="subtitle2"className={classes.title}>
                  Logged in as xavio
                </Typography>
                <Button
                  edge="end"
                  color="inherit"
                  className={classes.authButton}
                  
                >
                  <Link className={classes.linkStyle} to="/">
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
                 <Link className={classes.linkStyle} to="/signin">
                    SignIn
                  </Link>
                </Button>

                <Button
                  edge="end"
                  color="inherit"
                  className=""
                  > 
                  <Link className={classes.linkStyle} to="/signup">
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
