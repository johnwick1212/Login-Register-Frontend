import React from "react"
import styled, { css } from 'styled-components'

export default function InputBox({type, placeholder}) {
    return (<StyledInput type={type} placeholder={placeholder} />)
}

const StyledInput = styled.input`
    min-width: 100%;
    height: 40px;
    border-radius: 10px;
`