import { Server } from "socket.io";
import http from "http";
import express from "express";


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});


export const getReceiverSocketId = (receiverId) => {
	return userSocketmap[receiverId];
};


const userSocketmap = {};

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketmap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketmap));


  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
    delete userSocketmap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketmap));

  });


});


export{app,server,io};