import * as types from './actionTypes';
import $ from 'jquery';

export function createMovie(movie) {
    return { type: types.CREATE_MOVIE, movie};
}

export function loadTop20Movies() {
     return function (dispatch) {

        $.ajax({
            url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4895a1e4cec2aeb113fc7178193f3920",
            dataType: 'json',
            success:function(resposta){
                dispatch(loadMoviesSuccess(resposta.results))
            }
        })
    };
}

export function loadMoviesSuccess(movies) {
    
    return { type: types.LOAD_TOP_20, movies};
}

