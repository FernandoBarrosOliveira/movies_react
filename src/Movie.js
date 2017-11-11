import React, { Component } from 'react';

class Movie extends Component {

    render() {

        let dateRelease = "????";
        let voteAverage = "?";
        let titulo = this.props.titulo;
        
        if (this.props.movie.release_date) {
         
            dateRelease = this.props.movie.release_date.split("-")[0];
        }

        if (this.props.movie.vote_average) {

            voteAverage = this.props.movie.vote_average;
        }  
        
        if (titulo.length > 20 ) {

            titulo = titulo.substr(0, 16) + "...";
        }

        return(
            <section className="card-meu-filme card">
                
                <img className="card" src={this.props.imagem} alt={this.props.titulo} title={this.props.titulo}/>
                
                <div className="card">
                    <p className="fnt-roboto card-title">{titulo}</p>
                    <div className="card-div-date">{dateRelease}</div>
                    <div className="card-div-rate"> {voteAverage}</div>
                </div>
            </section>); 
    }

}

export default Movie;