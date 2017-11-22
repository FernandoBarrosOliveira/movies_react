import React, { Component } from 'react';
import Menu from './Menu';

class Cabecalho extends Component {

    render() {

        return(
            <div>
                <nav className="header-meu-filme col-red-05">
                    <div>
                        <h1 className="fnt-roboto-i-r">Meu Filme</h1>
                    </div>
                </nav>
                <Menu/>
            </div>
            ); 
    }
}

export default Cabecalho;