import React from "react";
import ContestPreview from "./ContestPreview";
import PropTypes from "prop-types";

const ContestList = (props) => (
    <div className="ContestList">
        {Object.keys(props.contests).map( contestId =>
                <ContestPreview 
                key={contestId} 
                onClick={props.onContestClick}
                {...props.contests[contestId]} />
        )}
    </div>
);

ContestList.propTypes = {
    contests : PropTypes.object,
    onContestClick : PropTypes.func.isRequired
};

export default ContestList;