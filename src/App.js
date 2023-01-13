import React from "react"
import styled, { css } from 'styled-components'
import Input from "./components/input/Input"

import IMG from "./login-photo.png"
export default function App() {
  return (
    <MainDiv>
      <img src = {IMG} />
      <LoginDiv className="DIV">
        <Heading>Login</Heading>
        <Input />
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
@media only screen and (max-width: 1100px) {
  justify-content: center;
}
`

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
width: 50vw;
height: 100%;
@media only screen and (max-width: 1100px) {
  width: 85vw;
}
`

const Heading = styled.h2`
margin: 0 auto;
font-size: 48px;
weight: 700;
margin-top: 15%;
`
