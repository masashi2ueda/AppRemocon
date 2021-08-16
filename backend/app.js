////////////////////////
// app 周り
////////////////////////
const express = require("express");
const app = express();
const app_port = 3002;
const path = require("path");
app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("/",(req, res)=>{
    // res.send("hello");
    res.sendFile("index.html")
});
app.listen(app_port, ()=>{
    console.log("app listening at port",app_port);
});


////////////////////////
// socket 周り
////////////////////////
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const http_port = 3001;

function execPython(payload){
    const { execSync } = require('child_process')
    const python_path = "python"
    const script_path = "test.py"
    const stdout = execSync(python_path + " "+script_path);
    // const stdout = execSync("ls");
    console.log(`stdout: ${stdout.toString()}`);
}

io.on("connection", (socket) =>{
    console.log("A client connected.");
    socket.on("send", (payload)=>{
        console.log("send");
        console.log("payload",payload);

        io.sockets.emit("broadcast", payload);
        execPython(payload);
    });
});
server.listen(http_port, ()=>{
    console.log("http listening at port",http_port);
});

