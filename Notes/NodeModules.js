//create a server.js
import 'config';

import config from "./config";

//a module can export using export
e.g.
export default {
    port: env.PORT || 8080
};
//for a non default export the var and import it using {}
export const sad = ") :"; 
/**
 * this would be imported with an import statement like
 * import config, {sad} from "./config";
 */


    import 'moduleName';
    //brings in a module dependency

    import './moduleName';
    //brings in the module from the same level as current file


    import './moduleName';
    //brings in the module from the one level up from  the current file

    //setup so your path is in node_modules/.bin
        vi ~/.bash_profile
        //i to start writing
        //add the following
        export PATH=$PATH:./node_modules/.bin

    //OR 
    ./node_modules/.bin/babel-node server.js


    //All node modules have their own private scope


//HTTP/S Node Modules - core modules so no install
import https from 'https';
https.get();
https.request();
const server = https.createServer();

//creating a server with http
import http from 'http';
const server = http.createServer();
server.listen(8080);
server.on("request", (req,res) =>{
    res.write("Hello HTTP!\n");
});