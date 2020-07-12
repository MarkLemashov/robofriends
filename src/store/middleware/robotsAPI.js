import { robotsRequested, robotsRecieved, robotsRequestError } from '../Robots'

const robotsAPI = () => (dispatch) => {
    dispatch(robotsRequested())
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch(robotsRecieved(users)))
        .catch(error => dispatch(robotsRequestError(error.toString())));
}

export default robotsAPI;