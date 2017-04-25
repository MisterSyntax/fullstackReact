//only file that should work with axios and should do all the routing

import axios from "axios";

export const fetchContest = contestId => {
    return axios.get(`/api/contests/${contestId}`)
        .then(resp => resp.data);
};