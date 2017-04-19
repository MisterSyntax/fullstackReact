import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <h2 className="text-center">
                {props.message}
        </h2>
    );
};
Header.defaultProps = {
    message: "I'll crumble for ya"
};

Header.propTypes = {
    message: PropTypes.string
};

export default Header;