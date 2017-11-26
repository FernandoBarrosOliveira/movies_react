import {combineReducers} from 'redux';
import movies from './cadastroMovieReducer';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;