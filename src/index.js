import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';
import logo from "./logo.svg"
import { ReactComponent as LogoReact } from "./logo.svg"
import "./index.css"
import Todo from './components/Todo/Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Titolo Benvenuto</h1>
    <Todo/>
    {/* <Layout /> */}
    {/* Metodo 1-2 per importare l'immagine */}
    {/* <img src={logo}/> */}
    {/* Se l'immagine è un svg abbiamo un 3o metodo */}
    {/* <LogoReact/> */}
  </React.StrictMode>
);
