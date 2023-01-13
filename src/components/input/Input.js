import React, {useState} from "react"
import styled, { css } from 'styled-components'
import InputEle from "../InputBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
import "../App.css"
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Input() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    return (
        <Container>
        
        <form>
            <Label>
               <p className="password">Login ID</p>
               <InputEle type="text" placeholder="Enter the Login ID" value="" />
               <p className="password">Password</p>
               <Div><InputEle type={passwordShown ? "text" : "password"} placeholder="Enter Password" value="" />
               <Img><i onClick={togglePasswordVisiblity}>{eye}</i></Img>
               </Div>
            </Label>
               
            <Label1>
            
            <Remember>
              <label><input type="checkbox"/> Remember Me</label>
              <a href="#">Change Password</a>
            </Remember>
            </Label1>
            <Label1>
            <label><input type="checkbox"/> Agree to <a href="#">Terms and Conditions</a></label>
            </Label1>
            <OuterDiv>
              <Btn>Login</Btn>
              <Below>Don't have an account? <Link to="/Login-Register-Frontend/Register">Register Here</Link></Below>    
            </OuterDiv>
        </form>
        
        </Container>
    )
}

const Div = styled.div`
position: relative;
`

const Remember = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const OuterDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Btn = styled.button`
width: 90%;
height: 56px;
background: #1575A7;
border-radius: 8px;
color: white;
margin: 50px auto;
cursor: pointer;
font-size: 20px;
`

const Below = styled.div`
`
const Img = styled.i`
width: 10%;
position: absolute;
left: 96%;
top: 32%;
cursor: pointer;
@media (max-width: 600px) {
 left: 92%;
}
`

const Container = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
`
const Label = styled.div`
  margin-top: 100px;
  width: 100%;
`
const Label1 = styled.div`
margin-top: 20px;
display: block;
`