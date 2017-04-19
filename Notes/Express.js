//express, used to handle what we could do manually with HTTP module
/*simple example:*/

import config from "config";
import express from "express";
const server = express();

server.listen(config.port, ()=> {
    console.info("Express listening on port", config.port);
});


//server.listen(port, success function)


/**express servers handle routing for us
 * server.get('/path', eventHandlerFunction)
 * response.send("String") - sends a response
*/
    server.get('/',(request,response) => {
        response.send("Hello");
    });

/**
 * @description: fs - used to get info from file storage
 * !!!DON'T USE THIS!!!
 * @import: import fs from "fs";
 *  fs.readFile("./location.html", (err,data)=>doStuff...) 
 * */
    import fs from "fs";
    ///...
    server.get("/about.html", (req,res) =>{
        fs.readFile("./about.html", (err,data) => {
            res.send(data.toString());
        });
    });

/**
 * @description - server.use(express.static("public"))
 *  - used to serve public static content stored in public
 */
    server.use(express.static("public"));

/**
 * @description: Express Router
 *  const router = express.Router
 *  -has get
 *  -routes, but doesn't serve
 */

    import express from "express";

    const router = express.Router();

    router.get("/", (req, res) => {
        res.send({data: [] });
    });

    export default router;


/**
 * @description: EJS for view engine
 *  -you'll also create a views folder at the root level for storing views
 *  -that folder vill need an index.ejs in it
 */
    server.set("view engine", "ejs");