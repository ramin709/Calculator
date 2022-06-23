import { useState } from 'react';
import styled from 'styled-components'
import Button from '../Button/Button';
import {ButtonType} from '../Button/Button'
import {CalcInput , InputType , operatorType} from '../../modules/Calc'
import Calc from '../../modules/Calc'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4 , 80px);
  grid-template-rows: 120px repeat(5 , 80px);
`

const Display = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 3rem;
  grid-column-end: span 4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
`

const Calculator:React.FC = () => {


  const [Inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(Inputs);
  
  const append = (value: CalcInput) => {
    setInputs(prev => [...prev , value])
  }

  const handleNumericInput = (input: number) => {
    append({type: InputType.Number , value: input})
  }

  const handleOperationInput = (operator: operatorType) => {
    append({type: InputType.Operation , operator})
  }

  return (
    <Container>
        <Grid>
          <Display>{state.displayValue}</Display>
          <Button label="AC" position={[1 , 0]} width={2}/>
          <Button label="Oops" position={[1 , 2]} width={2}/>
          <Button label="+" position={[2 , 3]} onClick={() => handleOperationInput(operatorType.Add)}/>
          <Button label="-" position={[3 , 3]} onClick={() => handleOperationInput(operatorType.Sub)}/>
          <Button label="=" position={[4 , 3]} onClick={() => handleOperationInput(operatorType.Equal)} height={2}/>
          <Button label="0" position={[5 , 0]} width={3} buttonType={ButtonType.Number}/>
          <Button label="9" position={[2,2]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(9)}/>
          <Button label="8" position={[2,1]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(8)}/>
          <Button label="7" position={[2,0]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(7)}/>
          <Button label="6" position={[3,2]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(6)}/>
          <Button label="5" position={[3,1]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(5)}/>
          <Button label="4" position={[3,0]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(4)}/>
          <Button label="3" position={[4,2]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(3)}/>
          <Button label="2" position={[4,1]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(2)}/>
          <Button label="1" position={[4,0]} buttonType={ButtonType.Number} onClick = {() => handleNumericInput(1)}/>
        </Grid>
    </Container>
  )
}

export default Calculator