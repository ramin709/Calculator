import './App.css';
import styled from 'styled-components'
import Calculator from './component/Calculator/Calculator';

const Container = styled.div`
    display: flex;
    background: #323232;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <Container className="App">
      <Calculator />
    </Container>
  );
}

export default App;
