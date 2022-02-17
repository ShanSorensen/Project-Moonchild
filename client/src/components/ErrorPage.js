import React from 'react'
import styled from 'styled-components'

export default function ErrorPage() {
  return (
    <ErrorPg>
      <h1>Uh-oh!</h1>
      <p>Looks like you got here by mistake. Please return to the Home page to try again!</p>
    </ErrorPg>
  )
}

const ErrorPg = styled.div`
text-align: center;
height: 50%;
width: 50%;
padding: 100px;
margin-left: 25%;
`