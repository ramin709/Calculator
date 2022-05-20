import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
    label: string;
}

const StyledButton = styled.button`
    background-color: #e48900;
    border: none;
    border-radius: 8px;
    font-size: 1.3rem;
`

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <StyledButton>
        {label}
    </StyledButton>
  )
}

export default Button;