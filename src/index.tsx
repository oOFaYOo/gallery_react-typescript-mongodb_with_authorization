import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Api from "./Api";


ReactDOM.render( <App api={new Api()} /> , document.getElementById('root'));


