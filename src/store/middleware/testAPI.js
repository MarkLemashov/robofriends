import { robotsRequested, robotsRecieved, robotsRequestError } from '../Robots'

const testAPI = state => next => action => {
    if (action.type === 'test') {
        state.dispatch(robotsRequested())
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => state.dispatch(robotsRecieved(users)))
            .catch(error => state.dispatch(robotsRequestError(error.toString())));
    }

    next(action);
}

export default testAPI;