import React from 'react'
import styled from 'styled-components';

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 25px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
//   width: 400px;
//   height: 500px;
// `;

// const Input = styled.input`
//   display: block;
//   margin-bottom: 10px;
//   height: 25px;
//   width: 100%px;f
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   border-radius: 8px;
//   border: none;
//   color: white;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: bold;
//   padding: 12px 24px;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  background-color: #f8f9fa;
  border-radius: 8px;
  border: none;
  color: #495057;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 12px 24px;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  background-color: #007bff;
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

function Login() {
  return (
    <Container>
      <Form>
          <Input 
            placeholder='Username'
          />
           <Input 
            placeholder='Email'
          />
           <Input 
            placeholder='Password' 
          />
          <Button>Login</Button>
      </Form>

    </Container>
  )
}

export default Login
