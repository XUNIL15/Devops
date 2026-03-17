const http = require("http");
const fs = require("fs");

const requestListener = (req, res)=>{
    fs.readFile(__dirname+"index.html").then(contents, ()=>{
        res.setHeader("Conten-Type", "text/html");
        res.writeHead(200);
    });
}