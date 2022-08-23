import styled from "styled-components";

const Body = styled.div`
  margin: 12px;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OpponentChoice = () => {
  return (
    <Body>
      <img src="/assets/Loading.svg" alt="Loading Spinner" />
    </Body>
  );
};
