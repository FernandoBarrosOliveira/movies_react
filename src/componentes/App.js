import React, { Component } from 'react';
import Cabecalho from './comuns/Cabecalho';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import Rodape from './comuns/Rodape';
import Menus from './comuns/Menu';

import './App.css';



class App extends Component {

    constructor() {
        super();

        this.state = {exibirDetalhe: false,
                      movieAtual: null};
    }

  render() {
        return (

            <div>        
                 
                <Cabecalho/> 
               
                <MovieDetails
                    movie={this.state.movieAtual}
                    exibirDetalhe={this.state.exibirDetalhe}
                    naoVisualizarDetalhes={this._naoVisualizarDetalhes.bind(this)}/>
                
                <MovieList
                    visualizarDetalhesApp={this._visualizarDetalhesApp.bind(this)}/>
                <Rodape/>
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

export default App;
