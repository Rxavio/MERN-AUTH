import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Todo from "./Todo";

const useStyles = makeStyles({
  todosStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListTodos = () => {
  const classes = useStyles();
 
  return (
    <>
      <div className={classes.todosStyle}>
        <Typography variant="h5">
        <h3> List todos</h3> 
        </Typography> 
        <Todo /> 
      </div>
    </>
  );
};

export default ListTodos;
