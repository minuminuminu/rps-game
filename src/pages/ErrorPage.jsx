import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const Transition = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg)
  }
  to{
    opacity: 1;
    transform:rotateY(0)
  }
`;

const CenteringContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${Transition} 0.75s;
`;

const H1 = styled.h1`
  font-weight: 500;
`;

const H2 = styled.h2`
  font-weight: 400;
  margin: 0.3em;
`;

const Button = styled.button`
  background-color: #ffffffb9;
  width: 11vw;
  height: 35px;
  margin-top: 2em;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -4px;
  font-size: 1em;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #f3f1f1b9;
  }
  &:active {
    background-color: #cec7c7b9;
  }
`;

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <CenteringContainer>
      <H1>Oops!</H1>
      <H2>It seems like this page doesn't exist!</H2>
      <Button onClick={() => navigate(`/`)}>Return to Home</Button>
    </CenteringContainer>
  );
};

export default ErrorPage;
