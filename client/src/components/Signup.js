import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap'
import styled from 'styled-components';

export default function Signup() {
  let navigate = useNavigate();
  return (
    <SignupForm>
      <h2>Hello, new friend!</h2>
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
          Sign Up!</Button>
      </FormGroup>
    </SignupForm>
  )
}

const SignupForm=styled.div`
    margin-left: 150px
`