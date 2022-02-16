import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components';

export default function Login() {
  let navigate = useNavigate();
  
  return (
    <LoginForm>
      <h2>Welcome back, friend!</h2>
      <FormGroup>
      <Label>Username:</Label>
        <Input 
          placeholder="What can we call you?"
          type="text"
          name="username"
          id="username"
          />
      <Label>Password:</Label>
      <Input 
          placeholder="Shh! Keep it secret!"
          type="text"
          name="password"
          id="username"
          />
      <Button color="warning"
              onClick={() => {
                navigate("/journalpage");}}>
          Login</Button>
      </FormGroup>
    </LoginForm>
  )
}

const LoginForm = styled.div`
  margin-left: 150px,
`