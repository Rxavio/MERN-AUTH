import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';

function App() {

  return (
    <>
    <BrowserRouter>
      <Container maxWidth = "md">
        <NavBar />
        <Container className="" maxWidth = "sm">
        <Routes> 
       <Route path='/signin' element={<SignIn />}/>
       <Route path='/signup' element={<SignUp />} />
       {/* <Route path='/' element={<Todos />} /> */}
      </Routes>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}
export default App;