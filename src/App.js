import React, { Component } from 'react';
import logo from './logo.svg';
import './css/fjp_style.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>    
            <button className="menu-abrir"></button>
            <nav className="navegacao col-gra-00"> 
                <button className="menu-fechar"></button>
                <ul className = "menu-principal">
                    <li className="col-gra-00"><a className="col-gra-00" href="/">Home</a></li>
                    <li className="col-gra-00"><a className="col-gra-00" href="#">Top 20</a></li>
                    <li className="col-gra-00"><a className="col-gra-00" href="#">Menu 3</a></li>
                    <li className="col-gra-00"><a className="col-gra-00" href="#">Menu 4</a></li>
                </ul>
            </nav>
            <script src="menu.js"></script>            
        </header>
    );
  }
}

export default App;
