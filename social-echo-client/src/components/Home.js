import React, { useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {logoImage} from "../images/logo.png"


const Home = () => {
  // const [logoVisible, setLogoVisible] = useState(false);
  // const controls = useAnimation();
  // const handleLogoClick = () => {
  //   setLogoVisible(true);

  //   controls.start({
  //     opacity: 1,
  //     x: 0,
  //     transition: {duration: 0.5},
  //   });

  //   setTimeout(() => {
  //     controls.start({
  //       x: [-20, 20 , -20, 20, 0],
  //       transition: {duration: 0.2, times: [0, 0.25, 0.5, 0.75, 1]}
  //     });

  //   }, 500);
    

  //   setTimeout(() => {
  //     controls.start({ opacity: 0, transition: { duration: 1 } });
  //   }, 2000);

  //   setTimeout(() => {
  //     setLogoVisible(false);
  //   }, 3000);
  // };


  const containerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Logo>SocialEcho</Logo>
      <Tagline>Make Friends, make your posts Echoooo.</Tagline>
      <Tagline>Let your friends listen around the world from SocialEcho.</Tagline>
      <LoginForm>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
        <LoginButton>Login</LoginButton>
        <Label>Don't have an account?</Label>
        <CreateAccountLink>Create New Account</CreateAccountLink>
      </LoginForm>
    </HomeContainer>
  );
};

const HomeContainer = styled(motion.div)`
  background-color: #22223b;
  color: #fff;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h2`
  color: #fcbf49;
  font-size: 100px;
`;

const Tagline = styled.p`
  font-size: 30px;
`;

const LoginForm = styled.form`
  background-color: rgba(61, 64, 91, 0.7); 
  margin: 0 auto;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  width: 300px;
`;


const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  border-radius: 10px;
  &::placeholder {
    color: #3d405b;
  }
`;


const ForgotPasswordLink = styled.a`
  display: block;
  text-align: right;
  margin-bottom: 10px;
  color: #fff;
`;

const SharedButtonStyles = `
  background-color: #fcbf49;
  color: #3d405b;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  ${SharedButtonStyles}
`;

const CreateAccountLink = styled.button`
  ${SharedButtonStyles}
`;

export default Home;
