import {createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { applyMiddleware } from 'redux';

export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState,
        applyMiddleware(thunk)
    );
}