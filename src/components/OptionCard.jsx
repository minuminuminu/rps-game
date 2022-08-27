import styled from "styled-components";

const CardBody = styled.div`
  width: 180px;
  height: 180px;
  background-color: #78a4cf7e;
  border-radius: 5px;
  margin: 12px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
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
      {
        // {props.type}.png icon in middle
      }
    </CardBody>
  );
};
