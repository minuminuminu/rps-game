import styled, { keyframes } from "styled-components";

const Transition = keyframes`
  0% {opacity: 0}
  10% {opacity: 1}
  90% {opacity: 1}
  100% {opacity: 0}
`;

const Container = styled.div`
  background-color: #00000039;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  opacity: 1;
  /* animation: ${Transition} 1.5s ease-in-out; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 700px;
  height: 450px;
  background-color: #00000039;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  font-size: 35px;
  font-weight: 500;
`;

export const WinnerModal = (props) => {
  if (!props.modal) return null;

  return (
    <Container>
      <TextBox>
        <Message>
          {props.winner}
          Player 1 wins!
        </Message>
      </TextBox>
    </Container>
  );
};
