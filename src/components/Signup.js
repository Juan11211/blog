import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 500px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  height: 25px;
  width: 100%px;f
`;

const Button = styled.button`
    width: 100px;
    
`

function Signup() {
  return (
    <Container>
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
