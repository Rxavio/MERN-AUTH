import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const [ todo, setTodo ]=useState({
    name:"",
    isComplete:false
    })

  return (
    <>
   {/* <h3>Todos</h3>   */}
   {/* <AddTodo />
   <ListTodos /> */}
  <AddTodo todo={todo} setTodo={setTodo} />
  <ListTodos setTodo={setTodo} />
   </>
  );
};

export default Todos;
