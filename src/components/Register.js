// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import styled from 'styled-components'

// const Box = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   top: 0px;
//   left: 0px;
//   position: fixed;
//   height: 100vh;
//   width: 50vw;
//   z-index: 1;
//   background-image: url('https://i.pinimg.com/474x/f1/75/2e/f1752e799ae1d04b3e2a56b8a5bec0ef.jpg');
//   background-size: cover;
//   background-position: left;
// `;

  

// const BoxTitle = styled.h2`
//   text-align: center;
//   margin: 30px;
//   font-size: 60px;
// `

// const Signup = styled.span` 
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-right: 10px;
//     font-size: 20px;
//     `
    
// const StyledLink = styled(Link)`
// text-decoration: none;
// color: white;
// cursor: pointer;
// top: 0px;
// right: 0px;
//   `;

// function Register() {
//   return (
//     <Box>
//       <StyledLink to='/'><BoxTitle>CODETIMES</BoxTitle></StyledLink>
//       <StyledLink  to='/signup'><Signup>Register</Signup></StyledLink>
//       <StyledLink to='/login'><Signup>Login</Signup></StyledLink> 
//     </Box>
//   )
// }

// export default Register
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function Register() {
  return (
    <Parent>
      <Box>
        <div>
          <BoxTitle>The Coding Corner</BoxTitle>
         <Signup to='/signup'><Button>Register</Button> </Signup>
          <Signup to='/login'><Button>Login</Button></Signup>
        </div>
      </Box>
      <div style={{ width: '30vw', height: '100vh', backgroundImage: `url('https://i.pinimg.com/474x/f1/75/2e/f1752e799ae1d04b3e2a56b8a5bec0ef.jpg')`, backgroundSize: 'cover', backgroundPosition: 'left' }}></div>
    </Parent>
  );
}

export default Register;
