import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../images/logo.png";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your account creation logic here
    console.log("Account Created:", formData);
  };

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
    <CreateAccountContainer>
      <CreateAccountForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
      >
        <InputLabel
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
      >First Name</InputLabel>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.4 } }}
          required
        />

        <InputLabel
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}
        >Last Name</InputLabel>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.5 } }}
          required
        />

        <InputLabel
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
        >Age</InputLabel>
        <Input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.6 } }}
          required
        />

        <InputLabel
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
        >Email</InputLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.7 } }}
          required
        />

        <InputLabel
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } }}
        >Desired Nickname</InputLabel>
        <Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.8 } }}
          required
        />

        <CreateAccountButton
        type="submit"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 2 } }}
        >Create Account</CreateAccountButton>
      </CreateAccountForm>
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
    </CreateAccountContainer>
    
  );
};

const CreateAccountContainer = styled(motion.div)`
  background-color: #22223b;
  color: #fff;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateAccountForm = styled(motion.form)`
  background-color: rgba(61, 64, 91, 0.7);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: clamp(270px, 40vw, 450px);
  margin-top: clamp(25px, 5vh, 55px);
`;

const InputLabel = styled(motion.label)`
  display: block;
  margin-bottom: clamp(5px, 1vw, 15px);
  color: #fff;
  font-size: clamp(12px, 2vw, 20px);
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: clamp(7px, 1vw, 8px);
  margin-bottom: clamp(16px, 2vw, 20px);
  background-color: rgba(255, 255, 255);
  border: none;
  border-radius: clamp(7px, 1vw, 10px);
  &::placeholder {
    color: #3d405b;
  }
`;

const CreateAccountButton = styled(motion.button)`
  background-color: #fcbf49;
  color: #3d405b;
  padding: clamp(7px, 2vw, 10px);
  border: none;
  border-radius: clamp(7px, 2vw, 10px);
  cursor: pointer;
  width: 100%;
  margin-top: clamp(15px, 2vw, 20px);
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

export default CreateAccount;
