import config from "./config";
import apiRouter from "./api/index.js";
import sassMiddleWare from "node-sass-middleware";
import path from "path";

import express from "express";
import bodyParser from "body-parser";
const server = express();

server.use(bodyParser.json());

server.use(sassMiddleWare({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
}));

server.set("view engine", "ejs");

import serverRender from "./serverRender";

server.get(["/","/contest/:contestId"], (req,res) =>{
    //req.params.contestId
    serverRender(req.params.contestId)
    .then(({initialMarkup, initialData} ) => {
        res.render("index", {
            initialMarkup, 
            initialData
        });
    })
    .catch(error => {
        console.error(error);
        res.status(404).send(error.toString());
    });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, config.host, () => {
    console.info("Express listening on port", config.port);
});