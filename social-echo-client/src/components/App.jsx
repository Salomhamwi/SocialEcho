import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import CreateAccount from './createAccount';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
