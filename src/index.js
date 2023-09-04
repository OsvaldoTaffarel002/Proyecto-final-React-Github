import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Welcome } from './Components/Welcome/Welcome';
import { Profesionales } from './Components/Profesionales/Profesionales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Welcome />
    <Profesionales/>
    <Footer />
  </React.StrictMode>
);
