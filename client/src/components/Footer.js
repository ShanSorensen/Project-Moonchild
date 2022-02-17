import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <img src="https://i.ibb.co/FDrZZGQ/Moonchild-Journal.png" width = "150" height="150"/>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
position: absolute;
margin-left: 50%;
bottom: 0;
`