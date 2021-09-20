import "./App.css";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const SvgLogo = styled(Logo)`
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  p {
    margin-top: -6rem;
    font-family: Arial;
    font-weight: 100;
  }
  svg {
    height: 20rem;
  }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <LogoContainer>
          <SvgLogo />
          <p>Coming Soon</p>
        </LogoContainer>
      </Container>
    </div>
  );
}

export default App;
