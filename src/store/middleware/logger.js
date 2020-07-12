const logger = state => next => action => {
    console.log('state', state.getState());
    next(action);
}

export default logger;