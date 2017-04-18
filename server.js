import config from "./config";
import apiRouter from "./api/index.js";

import express from "express";
const server = express();

server.get("/", (req,res) =>{
    res.send("Hello thar!");
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, ()=> {
    console.info("Express listening on port", config.port);
});