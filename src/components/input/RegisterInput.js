import React, {useState} from "react"
import styled, { css } from 'styled-components'
import InputEle from "../InputBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Input() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const [passwordShown2, setPasswordShown2] = useState(false);

    const togglePasswordVisiblity2 = () => {
          setPasswordShown2(passwordShown2 ? false : true);
        };

    return (
        <Container>
        
        <form>
            <Label>
               <p>Email ID</p>
               <InputEle type="text" placeholder="Enter the Login ID" value="" />
               <p>New Password</p>
               <Div><InputEle type={passwordShown2 ? "text" : "password"} placeholder="Enter Password" value="" />
               <Img><i onClick={togglePasswordVisiblity2}>{eye}</i></Img>
               </Div>
               <p>Confirm Password</p>
               <Div><InputEle type={passwordShown ? "text" : "password"} placeholder="Enter Password" value="" />
               <Img><i onClick={togglePasswordVisiblity}>{eye}</i></Img>
               </Div>
            </Label>
               {/* <Img><i onClick={togglePasswordVisiblity}>{eye}</i></Img> */}
            <Label1>
            
            <Remember>
              <label><input type="checkbox"/> Remember Me</label>
            </Remember>
            </Label1>
            <Label1>
            <label><input type="checkbox"/> Agree to <a href="#">Terms and Conditions</a></label>
            </Label1>
            <OuterDiv>
              <Btn>Register</Btn>
              <Below>Have an account? <Link to="/Login-Register-Frontend">Login Here</Link></Below>    
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
width: 538px;
height: 56px;
background: #1575A7;
border-radius: 8px;
color: white;
margin: 50px 0 50px 0;
cursor: pointer;
font-size: 20px;
`

const Below = styled.div`
`
const Img = styled.i`
width: 10%;
position: absolute;
left: 97%;
margin-right: 95px;
margin-top: -40px; 
cursor: pointer;
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