import express from "express";
import data from "../src/testData";

const router = express.Router();
const contests = data.contests.reduce((obj,current)=>{
    obj[current.id] = current;
    return obj;
}, {});

router.get("/contests", (req, res) => {
    res.send({
        contests: contests
    });
});

router.get("/contests/:contestId", (req, res) => {
    //req.params.contestId
    let contest = contests[req.params.contestId];
    contest.description = "TESTER MC TESTER";
    
    res.send(contest);
});

export default router;
