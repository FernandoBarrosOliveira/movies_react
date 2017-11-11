import React, { Component } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import $ from 'jquery';

class MovieList extends Component {
    constructor () {
        super();
        this.state = {movies:[]}
    }

    componentWillMount(){
        console.log("montando");
        $.ajax({
            url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4895a1e4cec2aeb113fc7178193f3920",
            dataType: 'json',
            success:function(resposta){
                console.log(resposta);
                this.setState({movies: this.state.movies.concat(resposta.results)});               
            }.bind(this)
        })

    };    

    render() {

        const movies = this._getMovies();

        return(
            <div >
                <h4 className="fnt-roboto-i-c">Top 20</h4> 
                <div className ="container">
                    {movies}
                </div>  
                <div className="formulario">
                    <MovieForm adicionarMovie={this._adicionarMovie.bind(this)}/>
                </div>

            </div>); 
    }

    _getMovies() {
        return this.state.movies.map(movie=>
        <Movie 
            movie={movie}
            titulo={movie.title}
            imagem={movie.url_imagem || ("https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + movie.poster_path)}
            key={movie.id}/>)
    }

    _adicionarMovie(urlImage, titulo, sinopse) {        
        let novaEstoria = [{id: this.state.movies.length + 1,
                            title: titulo,
                            overview: sinopse,
                            url_imagem: urlImage
                        }]
        this.setState({movies: this.state.movies.concat(novaEstoria)});
    }   
        

}

export default MovieList;