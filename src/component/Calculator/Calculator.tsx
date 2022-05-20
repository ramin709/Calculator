import styled from 'styled-components'
import Button from '../Button/Button';
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 7px;
  grid-template-columns: repeat(4 , 80px);
  grid-template-rows: repeat(5 , 80px);
`

const Calculator:React.FC = () => {
  return (
    <Container>
        <Grid>
          <Button label="9"/>
          <Button label="8"/>
          <Button label="7"/>
          <Button label="6"/>
          <Button label="5"/>
          <Button label="4"/>
          <Button label="3"/>
          <Button label="2"/>
          <Button label="1"/>
        </Grid>
    </Container>
  )
}

export default Calculator