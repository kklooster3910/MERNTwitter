import { createStore, applyMiddleWare } from 'reduc=x';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleWare(thunk, logger)
    )
);

export default configureStore;