import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import rootReducer from './rootReducer';

export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, createPromise(), createLogger())
    );
}