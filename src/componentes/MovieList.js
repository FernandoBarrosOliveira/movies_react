import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import * as movieActions from '../actions/cadastroMovieActions'
import {bindActionCreators} from 'redux';
import $ from 'jquery';

class MovieList extends Component {

    render() {
        const movies = this._getMovies();
        return(                                          
            <div className ="container">
                {movies}            
            </div>); 
    }

    _getMovies() {

        return this.props.movies.map(movie=>
        <Movie 
            movie={movie}
            titulo={movie.title}
            imagem={movie.url_imagem || ("https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + movie.poster_path)}
            key={movie.id}
            visualizarDetalhes={this._visualizarDetalhes.bind(this)}/>);
    }

    
    _visualizarDetalhes(movie) {

        this.props.visualizarDetalhesApp(movie);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(movieActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);