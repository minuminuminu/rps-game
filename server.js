import express from "express";
import { createServer } from "http";
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
        return -1;
      } else if (p2 === "paper") {
        return 1;
      } else {
        return 0;
      }
    case "rock":
      if (p2 === "rock") {
        return 0;
      } else if (p2 === "paper") {
        return -1;
      } else {
        return 1;
      }
    case "paper":
      if (p2 === "rock") {
        return 1;
      } else if (p2 === "paper") {
        return 0;
      } else {
        return -1;
      }
  }
};

let choices = ["", ""];

io.on("connection", (socket) => {
  console.log(`${socket.id} just joined!`);
  // socket.join("test_room");
  // console.log(socket.rooms.size);

  socket.on("sendChoice", (data) => {
    console.log(socket.rooms);
    if (choices[0] === "") {
      choices[0] = data;
    } else {
      choices[1] = data;
      console.log(choices);
      io.emit("result", determineWinner(choices[0], choices[1]));
      choices = ["", ""];
    }
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
    choices = ["", ""];
    console.log(socket.id + " disconnected.");
  });
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}`));
