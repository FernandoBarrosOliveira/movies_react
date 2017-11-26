import React, { Component } from 'react';
import MovieForm from '../MovieForm';

class CadastroMovie extends Component{

  constructor () {
    super();
    this.state = {movies:[]}
  }


  render(){
    return(
      <div>
        <div className="formulario">
          <MovieForm adicionarMovie={this._adicionarMovie.bind(this)}/>
        </div>
      </div>
    )
  }

  _adicionarMovie(urlImage, titulo, sinopse, dataLancamento, voto) {   
    
        let newMovie = [{id: this.state.movies.length + 1,
                            title: titulo,
                            overview: sinopse,
                            url_imagem: urlImage,
                            release_date: dataLancamento,
                            vote_average:voto

                        }]
        this.setState({movies: this.state.movies.concat(newMovie)});
    } 
}

export default CadastroMovie;