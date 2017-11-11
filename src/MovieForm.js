import React, { Component } from 'react';

class MovieForm extends Component{

    _handleSubmit(event) {
        event.preventDefault();
        this.props.adicionarMovie(this._urlImage.value, this._titulo.value, this._sinopse.value,
          this._dataLancamento.value, this._voto.value);
    }

    render() {

        return(
            <div >
                <h4 className="fnt-roboto-i-c">Cadastro de filmes</h4> 
                <form className="cadastro" onSubmit={this._handleSubmit.bind(this)}>
                    
                    <div  >
                        <input placeholder="Url imagem" ref={input => this._urlImage = input}/><br/>                        
                        <input placeholder="Titulo" ref={input => this._titulo = input}/><br/>                        
                        <input type="date"   ref={input => this._dataLancamento = input}/><br/>                                                 
                        <input placeholder="Nota" type="number"  min="0" max="10" ref={input => this._voto = input}/><br/>                       
                        <textarea placeholder="Sinopse" className="materialize-textarea" ref={textarea => this._sinopse = textarea}></textarea>
                        <button className="cadastro"  type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MovieForm;
