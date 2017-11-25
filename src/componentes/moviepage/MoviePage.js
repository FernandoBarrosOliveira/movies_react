import React, { Component } from 'react';
import MovieDetails from '../MovieDetails';
import MovieList from '../MovieList';

class MoviePage extends Component{

  constructor() {
    super();

    this.state = {exibirDetalhe: false,
                  movieAtual: null};  
  }

  render(){
    return (
      <div>
        <MovieDetails
                      movie={this.state.movieAtual}
                      exibirDetalhe={this.state.exibirDetalhe}
                      naoVisualizarDetalhes={this._naoVisualizarDetalhes.bind(this)}/>
                  
                  <MovieList
                      visualizarDetalhesApp={this._visualizarDetalhesApp.bind(this)}/>
      </div>
    );

  }

  _naoVisualizarDetalhes() {
    
            this.setState({
                exibirDetalhe: false});
        }
    
  _visualizarDetalhesApp(movie) {
  
      this.setState({
          exibirDetalhe: true,
          movieAtual: movie
      });
  }


}

export default MoviePage;

