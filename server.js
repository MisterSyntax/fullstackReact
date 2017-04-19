import config from "./config";
import apiRouter from "./api/index.js";

import express from "express";
const server = express();

server.set("view engine", "ejs");

server.get("/", (req,res) =>{
    res.render("index", {
        content: "This is so dumb"
    });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, ()=> {
    console.info("Express listening on port", config.port);
});