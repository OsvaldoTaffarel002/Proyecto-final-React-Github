import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Footer } from './Components/Footer/Footer';
import { Welcome } from './Components/Welcome/Welcome';
import { Profesionales } from './Components/Profesionales/Profesionales';
import { Cards } from './Components/Cards/Cards';
import { Carrousel } from './Components/Carrousel/Carrousel';
import { Gallery } from './Components/Gallery/Gallery';
import { Plans } from './Components/Plans/Plans';
import { Form } from './Components/Form/Form';
import { Header } from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Welcome />
    <Profesionales/>
    <Carrousel/>
    <Gallery/>
    <Plans/>
    <Cards/>
    <Form/>
    <Footer />
  </React.StrictMode>
);
