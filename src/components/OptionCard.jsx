import styled from "styled-components";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const CardBody = styled.div`
  width: 180px;
  height: 180px;
  background-color: #78a4cf7e;
  border-radius: 5px;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Icon1 = styled(FaHandRock)`
  font-size: 40px;
`;

const Icon2 = styled(FaHandPaper)`
  font-size: 40px;
`;

const Icon3 = styled(FaHandScissors)`
  font-size: 40px;
`;

export const OptionCard = (props) => {
  const submitOption = (name) => {
    if (props.lockedIn === true) {
      return;
    }

    props.setChoice(name);
  };

  return (
    <CardBody
      onClick={() => {
        submitOption(props.type);
      }}
    >
      {props.type === "rock" ? <Icon1 /> : null}
      {props.type === "paper" ? <Icon2 /> : null}
      {props.type === "scissors" ? <Icon3 /> : null}
    </CardBody>
  );
};
