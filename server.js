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

io.on("connection", (socket) => {
  console.log(`${socket.id} just joined!`);

  socket.on("choiceData", (data) => {
    io.emit("receiveData", data);
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
    console.log(socket.id + " disconnected.");
  });
});

httpServer.listen(PORT, () => console.log(`listening on port ${PORT}`));
