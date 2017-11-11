import React, { Component } from 'react';

class MovieDetails extends Component {

    render() {

        const movie = this.props.movie;

        return(
            <section className="card-meu-filme grid">
                <img src={this.props.imagem} alt={this.props.titulo} />
                <div>
                    <h6 className="fnt-roboto-n-c">{this.props.titulo}</h6>
                </div>
            </section>); 
    }
}

export default MovieDetails;