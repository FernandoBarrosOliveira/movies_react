import React, { Component } from 'react';
import MovieForm from '../MovieForm';
import MoviePage from '../moviepage/MoviePage';
import MovieDetails from '../MovieDetails';
import MovieList from '../MovieList';

class CadastroMovie extends Component{

  constructor () {
    super();
    this.state = {movie:[],
                  exibirDetalhe: false,
                  movieAtual: null,
                  exibeListaApi:false}                  
  }

  render(){
    //console.log('MoviePage ' +this.props.exibeTitulo )
    return(
      <div>
         <div className="formulario">        
          <MovieForm adicionarMovie={this._adicionarMovie.bind(this)}/>
          <MovieDetails
            movie={this.state.movieAtual}
            exibirDetalhe={this.state.exibirDetalhe}
            naoVisualizarDetalhes={this._naoVisualizarDetalhes.bind(this)}/>
                  
        <MovieList
            visualizarDetalhesApp={this._visualizarDetalhesApp.bind(this)}
            exibeListaApi={this.state.exibeListaApi}/>
        </div>
      </div>
    )
  }

  _adicionarMovie(urlImage, titulo, sinopse, dataLancamento, voto) {   
    
        let newMovie = [{id: this.state.movie.length + 1,
                            title: titulo,
                            overview: sinopse,
                            url_imagem: urlImage,
                            release_date: dataLancamento,
                            vote_average:voto

                        }]
        this.setState({movie: this.state.movie.concat(newMovie)});
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



export default CadastroMovie;