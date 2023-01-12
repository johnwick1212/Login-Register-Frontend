import React from "react"
import styled, { css } from 'styled-components'
import RegisterInput from "./components/input/RegisterInput"

export default function App() {
  return (
    <MainDiv>
      <img src="login-photo.png" />
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
`

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
`

const Heading = styled.h2`
margin: 0 auto;
font-size: 48px;
weight: 700;
margin-top: 15%;
`
