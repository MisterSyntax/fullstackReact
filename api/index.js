import express from "express";
import { MongoClient, ObjectID }  from "mongodb";
//assert used for errors
import assert from "assert";
import config from "../config";

//create a mongodb client
let mdb;
MongoClient.connect(config.mongodbUri, (err,db) =>{
//checks for error, and raises it if we have one
    assert.equal(null, err);

    //set mongodb equal to returned db
    mdb = db;
});

const router = express.Router();


router.get("/contests", (req, res) => {
    let contests = {}; 
    //find all of the documents in the contest collection
    //then iterate through each of the returned contests
    //.project allows you to specify what to return for the results
    mdb.collection("contests").find({},
        {
            "categoryName":1,
            "contestName":1
        })
        .each((err, contest) => {
            assert.equal(null, err);
            
            //check to see if there are no more results
            if(!contest){
                //if no results send the res
                res.send({"contests": contests});
                return;
            }
            else{
                contests[contest._id] = contest;
            }
            
        });
});

/**
 * @desc: gets the proposed names for a contest
 */
router.get("/names/:nameIds", (req, res) => {
    const nameIds = req.params.nameIds.split(",").map(ObjectID);
    let names = {}; 
    //req.params.nameIds

    //find all of the documents in the contest collection
    //then iterate through each of the returned contests
    //.project allows you to specify what to return for the results
    mdb.collection("names").find({"_id" : {$in: nameIds} })
        .each((err, name) => {
            assert.equal(null, err);
            
            //check to see if there are no more results
            if(!name){
                //if no results send the res
                res.send({"names": names});
                return;
            }
            else{
                names[name._id] = name;
            }
            
        });
});

router.get("/contests/:contestId", (req, res) => {
    //connect to the mongodb collection contest
    //findOne results

    mdb.collection("contests")
        .findOne({_id: ObjectID(req.params.contestId)})
        .then((contest)=>{
            res.send(contest);
        })
        .catch(error => {
            console.error(error);
            res.status(404).send(error.toString());
        });
});

router.post("/names", (req,res) => {
    //parse req.body 
    //using request body parser imported in server.js
    const contestId = ObjectID(req.body.contestId);
    const name = req.body.newName;
    //validation?
    mdb.collection("names").insertOne({ "name" : name}).then( (result) => {
        console.log(result);
        return mdb.collection("contests").findAndModify({_id : contestId},
        [],
        {$push : {"nameIds" : result.insertedId}},
        { new : true }
        ).then((doc) => 
            {
            /**@param: doc is the updated result of the findAndModify */
            return res.send({
                updatedContest: doc.value,
                newName: { 
                    "_id": result.insertedId, 
                    "name" : name
                }
            });
        }).catch(error => {
            console.error(error);
            res.status(404).send(error.toString());
        });
    }).catch(error => {
        console.error(error);
        res.status(404).send(error.toString());
    });
});

export default router;
