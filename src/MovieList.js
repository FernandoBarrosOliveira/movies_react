import React, { Component } from 'react';
import Movie from './Movie';
import jQuery from 'jquery';

class MovieList extends Component {
/*
    constructor() {

        super();
        this.state = {
            movies: [
                {imagem: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/ujQthWB6c0ojlARk28NSTmqidbF.jpg',
                titulo: 'Mulher Maravilha',
                id: 1},
                {imagem: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg',
                titulo: 'Blade Runner 2049',
                id: 2},
                {imagem: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/rboZslo3eQWKBQ3QvlO6wGV0J3K.jpg',
                titulo: 'De volta ao jogo',
                id: 3},
                {imagem: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/iLhIoKnj7G9I5NyknnS2YAxMizS.jpg',
                titulo: 'Homem-Aranha: De volta ao lar',
                id: 4},
                {imagem: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/kG4ZxEBVw4eS23QSXG0PaUaDoEx.jpg',
                titulo: 'Planeta dos Macacos: A Guerra',
                id: 5}  
            ]
        }
    } */

    constructor () {
        super();
        this.state = {movies:[]}
    }

    componentWillMount(){
        console.log("montando");
        jQuery.ajax({
            url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4895a1e4cec2aeb113fc7178193f3920",
            dataType: 'jsonp',
            success:function(resposta){
                console.log(resposta);
                this.setState({movies: this.state.movies.concat(resposta.results)});               
            }.bind(this)
        })

    };    

    render() {

        const movies = this._getMovies();

        return(
            <div>
                <h4 className="fnt-roboto-i-c">Top 20</h4> 
                <div>
                    {movies}
                </div>               
            </div>); 
    }

    _getMovies() {
        return this.state.movies.map(movie=>
        <Movie 
            titulo={movie.title}
            imagem={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +movie.poster_path}
            key={movie.id}/>)
    }

}

export default MovieList;