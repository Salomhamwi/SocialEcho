import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logoImage from "../images/logo.png"
import { AnimatePresence } from "framer-motion";


const Home = () => {
  
  const [smallLogoImages, setSmallLogoImages] = useState([]);

  const showSmallLogoImages = () => {
    const logos = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      left: Math.random() * window.innerWidth, 
      top: Math.random() * window.innerHeight,
    }));

    logos.forEach((logo, index) => {
      setTimeout(() => {
        setSmallLogoImages((prevLogos) => [...prevLogos, logo]);
      }, index * 100); 
    });
  };
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      showSmallLogoImages();
    }, 1000);


    return () => {
      setSmallLogoImages([]);
      clearTimeout(timeout);
    };
  }, []);


  return (
    <HomeContainer>
      <Logo
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        SocialEcho
      </Logo>
      <Tagline
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }}
      >
        Make Friends, make your posts Echoooo.
      </Tagline>
      <Tagline
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }}
      >
        Let your friends listen around the world from SocialEcho.
      </Tagline>
      <AnimatePresence>
        {smallLogoImages.map((logo) => (
          <SmallLogoImage
            key={logo.id}
            left={logo.left}
            top={logo.top}
            initial={{ opacity: 0.1, top: `calc(${logo.top}px + 100vh)` }}
            animate={{ opacity: [0.1, 0.15, 0.20, 0.35, 0.5], top: logo.top }}
            exit={{ opacity: [0.5, 0.35, 0.20, 0.15, 0.1], top: `calc(${logo.top}px - 100vh)` }}
            transition={{ duration: 1, delay: 1.3 }}
          />
        ))}
      </AnimatePresence>
      <LoginForm
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } }}
>
  <Input
    type="email"
    placeholder="Email"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }}
  />
  <Input
    type="password"
    placeholder="Password"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
  />
  <ForgotPasswordLink
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9 } }}
  >
    Forgot password?
  </ForgotPasswordLink>
  <LoginButton
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
  >
    Login
  </LoginButton>
  <Label
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.1 } }}
  >
    Don't have an account?
  </Label>
  <CreateAccountLink
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } }}
  >
    Create New Account
  </CreateAccountLink>
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
  padding: clamp(10px, 5vw, 20px);
`;

const Logo = styled(motion.h2)`
  color: #fcbf49;
  font-size: clamp(50px, 5vw, 100px);
  cursor: pointer;
  &:hover {
    animation: shake 0.5s;
    animation-iteration-count: 1;
  }

  @keyframes shake {
    0% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-10px); }
    80% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }
`;

const SmallLogoImage = styled(motion.div)`
  position: fixed;
  width: clamp(41px, 5vw, 50px);
  height: clamp(55px, 5vw, 65px);
  background: url(${logoImage}) center/contain no-repeat;
  background-size: cover;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `calc(${props.top}px + 100vh)`}; 
  opacity: 0.1; 
  z-index: 0;
`;

const Tagline = styled(motion.p)`
  font-size: clamp(12px, 2vw, 30px);
`;

const LoginForm = styled(motion.form)`
  background-color: rgba(61, 64, 91, 0.7);
  padding: 10px;
  padding-top: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: clamp(25px, 5vh, 55px);
  width: clamp(270px, 40vw, 450px);
`;


const Label = styled(motion.label)`
  display: block;
  margin-bottom: clamp(5px, 1vw, 15px);
  color: #fff;
  font-size: clamp(12px, 2vw, 20px);
`;

const Input = styled(motion.input)`
  width: 60%;
  padding: clamp(7px, 1vw, 8px);
  margin-bottom: clamp(16px, 2vw, 20px);
  background-color: rgba(255, 255, 255);
  color: white;
  border: none;
  border-radius: clamp(7px, 1vw, 10px);
  &::placeholder {
    color: #3d405b;
  }
`;


const ForgotPasswordLink = styled(motion.a)`
  display: block;
  text-align: center;
  margin-bottom: clamp(15px, 2vw, 20px);
  color: #fff;
  font-size: clamp(12px, 2vw, 20px);
`;

const SharedButtonStyles = `
  background-color: #fcbf49;
  color: #3d405b;
  padding: clamp(7px, 2vw, 10px);
  border: none;
  border-radius: clamp(7px, 2vw, 10px);
  cursor: pointer;
  width: 45%;
  margin-bottom: clamp(15px, 2vw, 20px);
`;

const LoginButton = styled(motion.button)`
  ${SharedButtonStyles}
`;

const CreateAccountLink = styled(motion.button)`
  ${SharedButtonStyles}
`;

export default Home;
