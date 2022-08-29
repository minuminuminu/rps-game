import styled from "styled-components";
import { ScoreDot } from "./ScoreDot";

const Container = styled.div`
  width: 50vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScoreDotContainer = (props) => {
  return (
    <Container>
      <ScoreDot />
      <ScoreDot />
      <ScoreDot />
    </Container>
  );
};
