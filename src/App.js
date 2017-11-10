import React, { Component } from 'react';
import logo from './logo.svg';
import './css/fjp_style.css';

import Cabecalho from './Cabecalho';
import Menus from './Menus';
import MovieList from './MovieList';
import Rodape from './Rodape';
import './App.css';



class App extends Component {



  render() {
    return (

        <div>        
            <Cabecalho/> 
            <Menus/>
            <MovieList/>
            <Rodape/>
        </div>
    );
  }
}

export default App;
