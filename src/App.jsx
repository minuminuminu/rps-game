import styled from "styled-components";
import { OpponentChoice } from "./components/OpponentChoice";
import { OptionCard } from "./components/OptionCard";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardContainer = styled.div`
  width: 50vw;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

function App() {
  return (
    <Body>
      <CardContainer>
        <OptionCard type="stone" />
        <OptionCard type="paper" />
        <OptionCard type="scissors" />
      </CardContainer>
      <CardContainer>
        <OpponentChoice />
      </CardContainer>
    </Body>
  );
}

export default App;
