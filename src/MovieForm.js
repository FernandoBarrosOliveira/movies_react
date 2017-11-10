import React, { Component } from 'react';

class MovieForm extends Component{

    _handleSubmit(event) {
        event.preventDefault();
        this.props.adicionarMovie(this._urlImage.value, this._titulo.value, this._sinopse.value);
    }

    render() {

        return(
            <div class="row">
                <h4 className="fnt-roboto-i-c">Cadastro de filmes</h4> 
                <form className="col s12" onSubmit={this._handleSubmit.bind(this)}>
                    
                    <div className="input-field col s12" >
                        <input placeholder="Url imagem" ref={input => this._urlImage = input}/><br/>                        
                        <input placeholder="Titulo" ref={input => this._titulo = input}/><br/>                        
                        <textarea placeholder="Sinopse" className="materialize-textarea" ref={textarea => this._sinopse = textarea}></textarea>
                        <button className="btn waves-effect waves-light" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MovieForm;