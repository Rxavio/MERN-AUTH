import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Container maxWidth = "md">
        <Container className="" maxWidth = "sm">
          <h4>To do App</h4>
        </Container>
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
