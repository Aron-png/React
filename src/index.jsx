import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AboutPage from './Presentation/Aboutus/AboutPage';
import LoginPage from './Presentation/Login/LoginPage';
import MainPage from './Presentation/Main/MainPage';

//No se usan
//import Header from './Header';
import Content from './Content';
//import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
    Ejer1:
    <Header />
    <Content 
      nombre="Pepe" 
      apellido="Perez"
      sePintaNombre={ true } />
    <Footer />
    */
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {//Aca alineamos los hiperviculos a una pagina e importamos sus librerias
      }
      
        <Route path='/20230_2-hola-react/content' element={ <Content/> } />
        <Route path='/20230_2-hola-react/' element={ <LoginPage/> } />
        <Route path='/20230_2-hola-react/main' element={ <MainPage/> } />
        <Route path='/20230_2-hola-react/about' element={ <AboutPage/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
