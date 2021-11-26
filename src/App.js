import React from 'react';
import Repositorio from './components/Repositorio/Repositorio';
import Titulo from './components/Titulo/Titulo';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo= "Meu Segundo Projeto React do Zero"/>
        <Titulo subtitulo="Meus repositórios:"/>
      </header>
      <div className="content">
        <Repositorio/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
