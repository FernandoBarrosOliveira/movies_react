import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import registerServiceWorker from './registerServiceWorker'; 
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'; 


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>  
  </Provider>, 
  document.getElementById('root'));

