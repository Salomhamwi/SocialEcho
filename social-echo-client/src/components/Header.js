import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderContainer>
      <h1>SocialEcho</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export default Header;
