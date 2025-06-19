import { WebSocketServer } from "ws";
import { client } from "@repo/prismadb/client"

const server = new WebSocketServer({
    port : 3001
});

server.on("connection", (socket) => {
    client.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString(),
            email : Math.random().toString()
        }
    });

    socket.send("hii there you are connected to the server");
});