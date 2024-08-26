import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ReceitaDetalhes from './ReceitaDetalhes';
import AdicionarReceita from './AdicionarReceita';
import './App.css';  // Importando os estilos globais

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receita/:id" element={<ReceitaDetalhes />} />
          <Route path="/adicionar" element={<AdicionarReceita />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

