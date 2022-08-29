import express from "express";
import { createServer } from "http";
import { SocketAddress } from "net";
import { Server } from "socket.io";

const app = express();
const PORT = 3001;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const determineWinner = (p1, p2) => {
  switch (p1) {
    case "scissors":
      if (p2 === "rock") {
        return "Player 2 wins!";
      } else if (p2 === "paper") {
        return "Player 1 wins!";
      } else {
        return "No winner!";
      }
    case "rock":
      if (p2 === "rock") {
        return "No winner!";
      } else if (p2 === "paper") {
        return "Player 2 wins!";
      } else {
        return "Player 1 wins!";
      }
    case "paper":
      if (p2 === "rock") {
        return "Player 1 wins!";
      } else if (p2 === "paper") {
        return "No winner!";
      } else {
        return "Player 2 wins!";
      }
  }
};

let player1 = { id: "", choice: "" };
let player2 = { id: "", choice: "" };

io.on("connection", (socket) => {
  console.log(`${socket.id} just joined!`);
  if (player1.id === "") {
    player1.id = socket.id;
  } else {
    player2.id = socket.id;
  }

  console.log(`p1: ${player1.id} and p2: ${player2.id}`);

  // socket.join("test_room");
  // console.log(socket.rooms.size);

  /*socket.on("sendChoice", (data) => {
    // console.log(socket.rooms);
    if (choices[0] === "") {
      choices[0] = data;
      io.emit("preview", data);
    } else {
      choices[1] = data;
      console.log(choices);
      io.emit("result", determineWinner(choices[0], choices[1]));
      choices = ["", ""];
    }
  });*/

  socket.on("sendChoice", (data) => {
    if (socket.id === player1.id) {
      player1.choice = data;
    } else {
      player2.choice = data;
    }

    if (player1.choice !== "" && player2.choice !== "") {
      io.emit("result", determineWinner(player1.choice, player2.choice));
      player1.choice = "";
      player2.choice = "";
    }

    io.emit("preview", { p1: player1.choice, p2: player2.choice });
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
    if (socket.id === player1.id) {
      player1 = { id: "", choice: "" };
    } else {
      player2 = { id: "", choice: "" };
    }
    console.log(socket.id + " disconnected.");
  });
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}`));
