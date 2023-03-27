import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthForm from './AuthForm';
import Animation from './Animation';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to submit form data to backend
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Parent>
      <Box>
        <BoxTitle>Register</BoxTitle>
        <AuthForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          btnText="Register"
          errMsg={errMsg}
          inputs={{
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }}
        />
        <Signup to="/">Already have an account? Login here</Signup>
      </Box>
      <Background>
        <Animation />
      </Background>
    </Parent>
  );
};

const Parent = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  height: 100vh;
  width: 40vw;
  z-index: 1;
`;

const BoxTitle = styled.h2`
  margin: 30px 30px 0px;
  font-size: 74px;
  color: black;
  font-family: 'New York Times', serif;
`;

const Signup = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 10px;
  display: inline-flex;
  justify-content: center;
  margin-top: 20px;
`;

const Background = styled.div`
  height: 100vh;
  width: 60vw;
  overflow: hidden;
  z-index: 0;
`;

export default Register;
