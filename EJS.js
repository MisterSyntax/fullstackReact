/**
 * @description: EJS - Effectve Javascript templating
 *  -used to server render our javascript front-end components
 */
//configures server to work with ejs
server.set("view engine", "ejs");

//you'll need to create a views folder at the root level to work with this
//that will need an index.ejs in it

/**
 * @description: EJS files allow you to do put js in your html server side. seems FUCKING DUMB with REACT
 */

server.set("view engine", "ejs");
    //now the below render will go to your views folder and access index.ejs, cuz fuck you
    server.get("/", (req,res) =>{
        res.render("index", {
            content: "stringToUse in the EJS file."
        });
    });

    //in out EJS file, we can access content
    <%= content %> //html in content will be escaped 
    <%- content %> //will unescape any html in content

//EJS files can include other ejs files. Say my <!DOCTYPE html> to <body> is in header.ejs then in my page I can do 
<%- include("header") %>