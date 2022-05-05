import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
//eliminar funcion webvitals no se utilizara y elimnar comentarios
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  
