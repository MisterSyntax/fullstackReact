import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import PropTypes from "prop-types";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) =>
    window.history.pushState(obj, "", url);

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: this.props.initialContests
    };
    
    componentDidMount(){

    }
    componentWillUnmount(){
    }
    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );
        //lookup the contest
        //this.state.contests[contestId]
        api.fetchContest(contestId).then(contest => {
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            });
        });

        this.setState({
            pageHeader: this.state.contests[contestId].contestType,
            currentContestId: contestId
        });
    }
    currentContest(){
        return this.state.contests[this.state.currentContestId];
    }
    currentContent(){
        if(this.state.currentContestId){
            return (<Contest {...this.currentContest()}/>);
        }
        else{
            return (<ContestList 
                onContestClick={this.fetchContest}
            contests={this.state.contests} />);
        }
        
    }
    render(){
        return (<div className="App">
                <Header message={this.state.pageHeader}/>
                {this.currentContent()}
                
            </div>);
    }
}

App.propTypes = {
    initialContests : PropTypes.object
};


export default App;