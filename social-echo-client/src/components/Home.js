import React from "react";
import styled from "styled-components";


const Home = () => {
  return (
    <HomeContainer>
      <h2>Welcome to the Home Page</h2>
      <p>This is the content of your home page.</p>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 20px;
`;

export default Home;
