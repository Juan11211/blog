import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Signup = styled(Link)`
  display: inline-flex;
  margin-right: 10px;
  text-decoration: none;
  color: black;
`;

const Container = styled.span`
  display: flex;
  justify-content: space-between; /* Aligns the child elements to opposite ends */
  align-items: center; /* Centers the child elements vertically */
  width: 100%;
`;

const NavbarTitle = styled(Link)`
  margin-left: 10px; /* Aligns the NavbarTitle to the left */
  font-size: 45px;
  color: black;
  font-family: "New York Times", serif;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Container>
      <div>
        <NavbarTitle to='/feed'>Code Times</NavbarTitle>
      </div>
      <div>
        <Signup to='/signup'>Signup</Signup>
        <Signup to='/login'>Login</Signup>
      </div>
  
    </Container>
  );
}

export default Navbar;
