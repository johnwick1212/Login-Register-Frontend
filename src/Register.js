import React from "react"
import styled, { css } from 'styled-components'
import RegisterInput from "./components/input/RegisterInput"
import IMG from "./login-photo.png"

export default function App() {
  return (
    <MainDiv>
      <img src={IMG} />
      <LoginDiv>
        <Heading>Register</Heading>
        <RegisterInput />
      </LoginDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
display: flex;
flex-direction: row;
height: 90vh;
width: 95vw;
justify-content: space-between;
font-family: 'poppins';
flex-wrap: wrap;
@media (max-width: 600px) {
  justify-content: center;
}
`

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 100%;
@media (max-width: 600px) {
  width: 85vw;
}
`

const Heading = styled.h2`
margin: 0 auto;
font-size: 48px;
weight: 700;
margin-top: 15%;
`