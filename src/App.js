import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";

import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import Todos from './components/todos/Todos';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  }
});

function App() {

  const classes = useStyles();

  return (
    <>
    <BrowserRouter>
       <ToastContainer />
      <Container maxWidth = "md">
        <NavBar />
         <Container className={classes.contentStyle} maxWidth = "sm">
        <Routes> 
       <Route path='/signin' element={<SignIn />}/>
       <Route path='/signup' element={<SignUp />} />
       <Route path='/' element={<Todos />} />
      </Routes>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}
export default App;