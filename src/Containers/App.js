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

        while(!fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))) {
            setTimeout(function(){


            }, 500); 

        };
    }
    
    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return (
                <div className='tc'>
                <h1 className='f1 tc'>RobotFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <h1 id="loading">Fetching robofriends...</h1>
                    </ErrorBoundry>
                </Scroll>
            </div>
            )
        }
        
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