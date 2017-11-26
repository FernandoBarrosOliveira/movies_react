import React, { Component } from 'react';

class MovieDetails extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {

        let movieDetail = <div/>;



        if (this.props.exibirDetalhe) {

            const movie = this.props.movie;
            const imagem = movie.url_imagem || ("https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + movie.backdrop_path);
            let dateRelease = "????";
            let voteAverage = "?";
            let titulo = movie.title;
            let sinopse = movie.overview;

            let textoBotao = "Menos informações";
            if (movie.release_date) {
            
                dateRelease = movie.release_date.split("-")[0];
            }
    
            if (movie.vote_average) {
    
                voteAverage = movie.vote_average;
            }

            movieDetail = <section className="detail-movie" background-image={imagem}> 
                                                       
                            <img className="detail-image" src={imagem} alt={titulo} title={titulo}/>
                           
                           <section className="detail-info">
                                <div className="detail-title"> {titulo}</div>
                                <div className="detail-overview"> {sinopse}</div>
                                <div className="detail-action">
                                        <a className="fnt-roboto-n-c" href="#"
                                            onClick={this._handleClick.bind(this)}>{textoBotao}</a>
                                    </div>
                           </section> 
                                        
                            
                        </section>;

        }
        return(movieDetail);
          
    }

    _handleClick(event) {

        event.preventDefault(); 
        this.props.naoVisualizarDetalhes();       
    }
}

export default MovieDetails;