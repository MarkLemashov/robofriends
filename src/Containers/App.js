import React from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from './ErrorBoundry.js'

class App extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            robots: [],
            search: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    
    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
        })
        
        return (
            <div className='tc'>
                <h1 className='f1 tc'>RobotFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    }
    
    export default App;