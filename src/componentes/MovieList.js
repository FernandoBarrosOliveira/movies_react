import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import * as movieActions from '../actions/cadastroMovieActions'
import {bindActionCreators} from 'redux';
import $ from 'jquery';

class MovieList extends Component {
/*     constructor () {
        super();
       // this.state = {movies:[]}
    } */

    componentWillMount(){    
        if (this.props.exibiListaApi){
            /* $.ajax({
                url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4895a1e4cec2aeb113fc7178193f3920",
                dataType: 'json',
                success:function(resposta){
                    
                    this.setState({movies: this.state.movies.concat(resposta.results)});               
                }.bind(this)
            }) */
            //this.dispatch(loadTop20Movies());
        }
        this.props.actions.loadTop20Movies();

    };    

    render() {
        const movies = this._getMovies();
        return(
            <div>                                
                <div className ="container">
                    {movies}
                </div>  
            </div>); 
    }

    _getMovies() {

        // return this.props.movies.length;
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