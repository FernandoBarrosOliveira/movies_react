import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {

    render() {

        return(
            <header>             
                <button className="menu-abrir"></button>
                <nav className="navegacao col-gra-00"> 
                    <button className="menu-fechar"></button>
                    <ul className = "menu-principal">
                        <li className="col-gra-00"><Link className="col-gra-00" to="/">Home</Link></li>
                        <li className="col-gra-00"><Link className="col-gra-00" to="/top20">Top 20</Link></li>
                        <li className="col-gra-00"><Link className="col-gra-00" to="/cadastro">Cadastro</Link></li>
                        <li className="col-gra-00"><Link className="col-gra-00" to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
                <script src="./script/menu.js"></script>            
            </header>); 
    }
}

export default Menu;