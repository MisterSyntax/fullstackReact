//first import the good stuff
import React from "react";
import ReactDOM from "react-dom";

//then render your stuff to the ReactDOM
//createElement args - h2, attrbutes, children
reactDOM.render(React.createElement("h2",null,"Hello"),document.getElementById("root"));
//which is equal to:
reactDOM.render(<h2>Hello {/**Any Javascript**/}</h2>,document.getElementById("root"));


//javascript goes in {}
const color = Math.random() > .5 ? "green" : "red";
ReactDOM.render(
    <h2>HS! {color}</h2>,
    document.getElementById("root")
);

//styles go in {{}}
<h2 style={{color: "purple"}}></h2>
<h2 style={{color: color}}></h2>
    //which due to sameness can be shortened to
<h2 style={{color}}></h2>

//class is className
<h2 className="myClass"></h2>

//React Components - alternative to React.createElements with static HTML
//use an Stateless function components if don't need Stateless
const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headerMessage}
        </h2>
    );
};

//if need state use ES6 classes
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}



//prop Validation:
//see all propTypes here: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    import PropTypes from "prop-types";

    App.propTypes = {
        headerMessage: PropTypes.string
    };
    //use .isRequired if the prop is required
    App.propTypes = {
        headerMessage: PropTypes.string.isRequired
    };
    //to have default props:
    App.defaultProps = {
        headerMessage: "I'll crumble for ya"
    };


/**
 * @description: Moving a component to its own file
 * you need to import dependences and export default Component 
 */
import React from "react";
import PropTypes from "prop-types";

const Component = () => {
    return (
        <h2 className="text-center">COMPONENT</h2>
    );
};

export default Component;


/**
 * @description: State Example with Class
 */
class App extends React.Component {
    state = {
        test: 1
    };

    render(){
        return (
            <div className="App">
                <Header  message="my Header is awesome"/>
                
                <div>
                    {this.state.test}
                </div>
            </div>
        );
    }
}
/**MANUALLY SETTING STATE IN CONSOLE.
 * 1. Inspect getElement
 * 2. console. $r - ensure you have right element
 * 3.
 */
$r.setState({stateName:"newState"})

/**
 * Component LifeCycle
 *  1. Component is mounted
 *  2. Might be updated
 *  3. Might be removed
 */
componentDidMount() //fire right after the render
//used for timers, listeners, AJAX to ensure DOM exists
componentWillUnmount()//called right before component is unmounted

/**taking an iterable object, like an array and using it to create  child elements
 * ADD keys for mapped elements
*/
    render(){
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map( contest =>
                         <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }

/**
 * @description: ReactDOMServer - used to render React components on the server
 */