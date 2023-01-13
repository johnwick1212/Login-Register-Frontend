import React from "react"
import styled, { css } from 'styled-components'

export default function InputBox({type, placeholder}) {
    return (<StyledInput type={type} placeholder={placeholder} />)
}

const StyledInput = styled.input`
    width: 95%;
    height: 40px;
    border-radius: 10px;
    padding: 2% 2.5%;
    font-size: 1.2rem;
`