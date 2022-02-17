import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components';

export default function Login() {
  let navigate = useNavigate();
  
  return (
    <LoginContainer>
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
          id="password"
          />
      <Button color="warning"
              onClick={() => {
                navigate("/journalpage");}}>
          Login</Button>
      </FormGroup>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
border: solid 5px goldenrod;
border-radius: 40px;
height: 50%;
width: 50%;
padding: 100px;
margin-left: 25%;
margin-top: 100px;
box-shadow: 5px 5px 15px black;
margin-left: auto;
margin-right: auto;
`;