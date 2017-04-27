/**
 * @description: Installing and Running Mongo DB
 */
1. Install MongoDB from the net
2. Create a 'data' folder where you want to store the DB called 'data'
    a. Create a sub folder called 'db'
    cd c
    mkdir data
    mkdir data/db
3. Open a terminal for MongoDB
4. Nav to bin folder: e.g. 
    e.g. cd '/cygdrive/c/Program Files/MongoDB/Server/3.4/bin'
5. run the following command to start the server: 
    mongod //if you have set up the data folders on the c drive e.g. c:/data/db 
    //or if you like to get freaky
    mongod.exe --dbpath "C:\Users\Can I Have Some Shoe\Desktop\React101\fullstack Reacto\data"
    
//Update your path;
goto control panel 
advanced system settings
enviornment variables
select top and bottom path
edit the bottom path, and add your path for mongodb
C:\Program Files (x86)\Intel\iCLS Client\;C:\Program Files\Intel\iCLS Client\;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;...;C:\Program Files\MongoDB\Server\3.4
//then you can use mongo from anywhere
    
6.Open a new terminal set to MongoDB and this is where you will access your db
    cd '/cygdrive/c/Program Files/MongoDB/Server/3.4/bin'
    run 
        mongo

7. update your config.js export default to include
    mongodbUri: "mongodb://localhost:27017/<dbName>",//prolly test


/**
 * @description: MongoDB Commands
 * 
 */
mongod //- start up the server
mongo //- creates a shell for working with the server

//BAD db name chars 
/ \ . * < > " | ? :

show dbs //shows all databases
db //shows current db
use db_name //creates(if doesn't exist) and switch to a new db

create json objects like you would in js in the terminal
var myObj = {
    "property": "value",
    "property2": "value2"
}

//insert json objects into the database 
db.dbname.insert(myObj);

db.dbname.find();//returns all in db

db.dbname.find().pretty();//returns db stuff but pretty

//updating example;
//we inserted 
myName = {"name": "Andrew S", email: "asd@asdg.com"}
db.test_1.insert(myName)
//then we modified myName
myName.references = []
db.test_1.update({"name":"Andrew S"}, myName)
//updated the entry with name = Andrew S by comparing it with what was in myName obj

db.test_1.remove({"property":"value"})
//removes all propertes with value

//help - gives mongodb Commands

//exit - quits


//Data Types
null {"name" : null}
boolean {"over20" : true}
number {"age": 31.8}
string {"color": "honkey"}
arrays {"stuff": [1,true,"fuck"]}
Date Objects {"hiredate" : new Date()}
RegEx {"streetRegex" : /^.*\s*(?:st|rd|way)/}
Embedded Documents(Objects) : {"info" : {"name": "Sue Smith"}}


