const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

app.use(express.static("public"));

io.addListener("connection", (socket) => {
  console.log("um usuario conectou");
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});



servidorHTTP.listen(1000,  '192.168.1.8');
