import styled from "styled-components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { OpponentChoice } from "./components/OpponentChoice";
import { OptionCard } from "./components/OptionCard";
import { Outlet } from "react-router-dom";

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
  const [lockedIn, setLockedIn] = useState(false);

  const setPlayerChoice = (choice) => {
    console.log(choice);
    socket.emit("sendChoice", choice);
    setLockedIn(true);
  };

  useEffect(() => {
    socket.on("result", (msg) => {
      console.log(msg);
      setLockedIn(false);
    });
  }, [socket]);

  return (
    <Body>
      <CardContainer>
        <OptionCard
          type="rock"
          socket={socket}
          lockedIn={lockedIn}
          setChoice={setPlayerChoice}
        />
        <OptionCard
          type="paper"
          socket={socket}
          lockedIn={lockedIn}
          setChoice={setPlayerChoice}
        />
        <OptionCard
          type="scissors"
          socket={socket}
          lockedIn={lockedIn}
          setChoice={setPlayerChoice}
        />
      </CardContainer>
      <CardContainer>
        <OpponentChoice />
      </CardContainer>
      <Outlet />
    </Body>
  );
}

export default App;
