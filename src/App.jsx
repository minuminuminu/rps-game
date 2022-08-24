import styled from "styled-components";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { OpponentChoice } from "./components/OpponentChoice";
import { OptionCard } from "./components/OptionCard";

const socket = io("http://localhost:3001");

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
  useEffect(() => {
    socket.on("receiveData", (data) => {
      console.log(data);
    });

    socket.on("joinMsg", (msg) => {
      console.log(msg);
    });
  }, [socket]);

  return (
    <Body>
      <CardContainer>
        <OptionCard type="stone" socket={socket} />
        <OptionCard type="paper" socket={socket} />
        <OptionCard type="scissors" socket={socket} />
      </CardContainer>
      <CardContainer>
        <OpponentChoice />
      </CardContainer>
    </Body>
  );
}

export default App;
