import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from 'reactstrap'
import styled from 'styled-components';

export default function Home() {
    let navigate = useNavigate();

  return (
    <Welcome>
        <h1>Welcome to the Moonchild Journal!</h1>
        <p>This is your central place to jot down your thoughts. No need to waste paper in half-filled notebooks! But in order to use this journal, please either sign up for an account, or log in to an existing account</p>
        <div>
            <Button color="warning" onClick={() => {navigate("/login");}}>Login</Button>
            <Button color="warning" onClick={() => {navigate("/signup");}}>Sign Up</Button>
        </div>
    </Welcome>
  )
}

const Welcome = styled.div`
  border: 5px solid goldenrod;
  border-radius: 40px;
  height: 50%;
  width: 50%;
  padding: 75px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 5px 15px black;
`;