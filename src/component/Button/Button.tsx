import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export enum ButtonType{
  Number , Operator
}

type ButtonProps = {
    label: string;
    type?: ButtonType;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
}

const StyledButton = styled.button`
    background-color: #646462;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.5rem;
`

const Button: React.FC<ButtonProps> = ({type ,label , position , width , height}) => {
  
  const style: CSSProperties = {}

  if(position) {
    style.gridRowStart = position[0] + 1;
    style.gridColumnStart = position[1] + 1;
  }

  if(width){
    style.gridColumnEnd = `span ${width}`
  }

  if(height){
    style.gridRowEnd = `span ${height}`
  }

  if(type === ButtonType.Number){
    style.backgroundColor = "#f4821f";
    style.color= "#000"
  }


  return (
    <StyledButton style={style}>
        {label}
    </StyledButton>
  )
}

export default Button;