import React from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from './ErrorBoundry.js';
// import { setSearchField } from '../actions.js';
import { setSearchField } from '../store/SearchRobots';
import robotsAPI from '../store/middleware/robotsAPI';


const mapStateToProps = state => {
    return {
        searchField: state.SearchRobots.searchField,
        isPending: state.Robots.isPending,
        robots: state.Robots.robots,
        error: state.Robots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event => dispatch(setSearchField(event.target.value))),
        robotsRequested: (() => dispatch(robotsAPI())),
    }
}

class App extends React.Component {
    componentDidMount() {
        // while(!fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots: users}))) {
        //     setTimeout(function(){


        //     }, 500); 

        // };
        this.props.robotsRequested();
    }
    
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        let tempText = isPending ? 'Fetching Robofriends...' : '';
        
        return (
            <div className='tc'>
                <h1 className='f1 tc'>RobotFriends</h1>
                <SearchBox onSearchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <h1 id="loading">{tempText}</h1>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);