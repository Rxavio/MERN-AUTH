import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Todo from "./Todo";

import { getTodos } from "../../store/actions/todoActions";

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
  const dispatch = useDispatch();
//  const state=useSelector((state) => state)
//   console.log(state)
  const todos = useSelector((state) => state.todos);
  console.log(todos)

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
 
  return (
    <>
      <div className={classes.todosStyle}>
        <Typography variant="h5">
        {/* <h3> List todos</h3>  */}
         
          {todos.length > 0 ? "the Todos" : "noTodosYet;"}{" "}
        </Typography> 
        {/* <Todo />  */}
          {todos &&
          todos.map((todo) => {
            return (
              <Todo />
            );
          })}
      </div>
    </>
  );
};

export default ListTodos;
