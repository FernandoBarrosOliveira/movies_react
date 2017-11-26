import React, { Component } from 'react';
import Cabecalho from './comuns/Cabecalho';
import Rodape from './comuns/Rodape';
import Menus from './comuns/Menu';
import MoviePage from './moviepage/MoviePage';
import CadastroMovie from './cadastro/CadastroMovie';
import Home from './home/Home';

import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends Component {



  render() {
        return (

            <div>        
                <Cabecalho/> 
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/moviepage' component={MoviePage}/>
                    <Route path='/cadastro' component={CadastroMovie}/>
                    <Route path='/sobre' component={MoviePage}/>
                </Switch>
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
