
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import { motion } from "framer-motion"
import Animation from './Animation';

const Parent = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  justify-content: space-between; /* add this line to evenly space the Box and the background div */
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column; /* add this line to stack the BoxTitle and Signup links vertically */
  align-items: flex-start; /* update this line to align the Box to the left */
  justify-content: center;
  padding: 10px;
  height: 100vh;
  width: 40vw; /* decrease the width to make the Box narrower */
  z-index: 1;
`;

const BoxTitle = styled.h2`
  margin: 30px 30px 0px; /* update this line to move the title to the left */
  font-size: 74px;
  color: black;
  font-family: "New York Times", serif;
`;

const Signup = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 10px;
  display: inline-flex;
  justify-content: center; /* update this line to horizontally center the Signup links */
  margin-top: 20px; /* add this line to add some space between the title and the links */
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;

  &:after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.2);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 100%;
  }

  &:hover:after {
    width: 200%;
    height: 200%;
    transition: all 0.5s ease-out;
  }
`;

const DropInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%) translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) translateX(0%);
  }
`;

const PopOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
`;

const TitleLink = styled(Link)`
font-size: 60px;
color: #333;
position: relative;
text-align: center;
top: 50%;
transform: translateY(-50%);
animation: ${props => props.clicked ? PopOutAnimation : DropInAnimation} 1s forwards;
text-decoration: none;
&:hover {
  cursor: pointer;
}

`

function Register() {

  return (
    <Parent>
      <Box>
        <div>
          <BoxTitle>
            <TitleLink to='/feed'>The Coding Corner</TitleLink>     
          </BoxTitle>
          <Signup to='/signup'><Button>Register</Button> </Signup>
          <Signup to='/login'><Button>Login</Button></Signup>
        </div>
        
      </Box>
      <Animation />
      <div style={{ width: '30vw', height: '100vh', backgroundImage: `url('https://i.pinimg.com/474x/f1/75/2e/f1752e799ae1d04b3e2a56b8a5bec0ef.jpg')`, backgroundSize: 'cover', backgroundPosition: 'left', marginLeft: '10px;' }}></div>

    </Parent>
  );
}

export default Register;
