import styled from 'styled-components'
import Button from '../Button/Button';
import {ButtonType} from '../Button/Button'
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
  return (
    <Container>
        <Grid>
          <Display>42</Display>
          <Button label="AC" position={[1 , 0]} width={2}/>
          <Button label="Oops" position={[1 , 2]} width={2}/>
          <Button label="+" position={[2 , 3]}/>
          <Button label="-" position={[3 , 3]}/>
          <Button label="=" position={[4 , 3]} height={2}/>
          <Button label="0" position={[5 , 0]} width={3} type={ButtonType.Number}/>
          <Button label="9" position={[2,2]} type={ButtonType.Number}/>
          <Button label="8" position={[2,1]} type={ButtonType.Number}/>
          <Button label="7" position={[2,0]} type={ButtonType.Number}/>
          <Button label="6" position={[3,2]} type={ButtonType.Number}/>
          <Button label="5" position={[3,1]} type={ButtonType.Number}/>
          <Button label="4" position={[3,0]} type={ButtonType.Number}/>
          <Button label="3" position={[4,2]} type={ButtonType.Number}/>
          <Button label="2" position={[4,1]} type={ButtonType.Number}/>
          <Button label="1" position={[4,0]} type={ButtonType.Number}/>
        </Grid>
    </Container>
  )
}

export default Calculator