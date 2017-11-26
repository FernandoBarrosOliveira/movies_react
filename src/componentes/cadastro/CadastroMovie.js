import React, { Component } from 'react';
import MovieForm from '../MovieForm';
import MovieDetails from '../MovieDetails';
import MovieList from '../MovieList';

class CadastroMovie extends Component{

    render(){

        return(
            <div className="formulario">        
                <MovieForm/>          
            </div>            
        )
    }
}

export default CadastroMovie;