import styled from "styled-components";
import { useEffect, useState } from "react";
import { OpponentChoice } from "./components/OpponentChoice";
import { OptionCard } from "./components/OptionCard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { WinnerModal } from "./components/WinnerModal";
import { ScoreDotContainer } from "./components/ScoreDotContainer";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const HiddenLink = styled(Link)`
  width: 25px;
  height: 25px;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
`;

function App({ socket }) {
  const [lockedIn, setLockedIn] = useState(false);
  const [winnerModal, setWinnerModal] = useState(false);
  const [winner, setWinner] = useState("");

  const setPlayerChoice = (choice) => {
    socket.emit("sendChoice", choice);
    setLockedIn(true);
  };

  useEffect(() => {
    socket.on("result", (msg) => {
      setWinnerModal(true);
      setWinner(msg);
      setTimeout(() => {
        setWinner("");
        setWinnerModal(false);
      }, 1500);
      setLockedIn(false);
    });
  }, [socket]);

  return (
    <Body>
      <RowContainer>
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
      </RowContainer>
      <RowContainer>
        <ScoreDotContainer />
        <ScoreDotContainer />
      </RowContainer>
      <WinnerModal modal={winnerModal} winner={winner} />
      <HiddenLink to={"admin"} />
      <Outlet />
    </Body>
  );
}

export default App;
