import styled from "styled-components";

const Dot = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.correct ? "#1fbd1f" : "black")};
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const ScoreDot = (props) => {
  return <Dot correct={props.correct}></Dot>;
};
