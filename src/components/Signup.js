import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  position: fixed;
  left: 0;
`;

const Image = styled.img`
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 500px;
`;

const Input = styled.input`
  background-color: #f8f9fa;
  border-radius: 8px;
  border: none;
  color: #495057;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 12px 24px;
  width: 50%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  background-color: darkgray;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

function Signup() {
  return (
    <Container>
           <ImageContainer>
        <Image src="https://i.pinimg.com/474x/f1/75/2e/f1752e799ae1d04b3e2a56b8a5bec0ef.jpg" alt="login image" />
      </ImageContainer>
      <Form>
          <Input 
            placeholder='First Name'
          />
           <Input 
            placeholder='Last Name'
          />
           <Input 
            placeholder='Email'
          />
           <Input 
            placeholder='Password' 
          />
          <Button>Sign Up</Button>
      </Form>

    </Container>
  )
}

export default Signup
