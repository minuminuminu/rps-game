import styled from "styled-components";
import { useEffect, useState } from "react";

const AdminPanel = styled.div`
  background-color: #72ace74c;
  width: 200px;
  height: 150px;
  position: absolute;
  top: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Paragraph = styled.p`
  margin: 5px;
`;

const Admin = ({ socket }) => {
  const [cheatView, setCheatView] = useState({
    p1: { id: "", choice: "" },
    p2: { id: "", choice: "" },
  });
  const [playerIdentity, setPlayerIdentity] = useState("");

  useEffect(() => {
    socket.on("playerCheck", (args) => {
      setPlayerIdentity(args);
    });

    socket.on("preview", (args) => {
      console.log(args);
      setCheatView(args);
    });

    socket.on("result", () => {
      setCheatView({ p1: "", p2: "" });
    });
  }, [socket]);

  return (
    <AdminPanel>
      <Paragraph>
        {playerIdentity === "player1" ? "Your" : "Player 1"} choice:{" "}
        {cheatView.p1.choice}
      </Paragraph>
      <Paragraph>
        {playerIdentity === "player2" ? "Your" : "Player 2"} choice:{" "}
        {cheatView.p2.choice}
      </Paragraph>
    </AdminPanel>
  );
};

export default Admin;
