const http = require("http");
const fs = require("fs");

const requestListener = (req, res)=>{
    fs.readFile(__dirname+"index.html");
}