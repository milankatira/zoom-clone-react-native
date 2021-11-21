const express = require("express");
const { Socket } = require("socket.io");

const app = express();

const server = require("http").Server(app);

const io = require("socket.io")(server);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json("Hello World");
});

io.on("connection",Socket=>{
    console.log('i am connected')
    Socket.on('join room',({roomId,userName})=>{
        console.log('user joined room')
        console.log(roomId,userName)
    })
})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
