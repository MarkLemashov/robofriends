import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer'
import logger from './middleware/logger'
import { createLogger } from 'redux-logger';
import robotsAPI from './middleware/robotsAPI'
import testAPI from './middleware/testAPI'

const reduxLogger = createLogger();

export default function () {
    return configureStore({
        reducer: reducer,
        middleware: [
            ...getDefaultMiddleware(),
            testAPI,
            reduxLogger
            // robotsAPI
            // logger
        ]
    });
}