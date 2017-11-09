import React, { Component } from 'react';

class Movie extends Component {

    render() {

        return(
            <section className="card-meu-filme grid">
                <img src={this.props.imagem} alt="./images/card_alt.png"/>
                <div>
                    <h6 className="fnt-roboto-n-c">{this.props.titulo}</h6>
                </div>
            </section>); 
    }
}

export default Movie;