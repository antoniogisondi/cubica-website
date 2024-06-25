import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

// Importa il core di FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
// Importa il componente FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importa le icone specifiche che vuoi utilizzare
import { faCoffee, faCheckCircle, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Aggiungi le icone alla libreria
library.add(faLinkedin, faInstagram,  faEnvelope);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
