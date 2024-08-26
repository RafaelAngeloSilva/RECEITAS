import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchReceitas } from './api';
import './HomePage.css';

const HomePage = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetchReceitas().then((data) => setReceitas(data));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Receitas Deliciosas</h1>
      </header>
      <main>
        <h2>Lista de Receitas</h2>
        <ul>
          {receitas.map((receita) => (
            <li key={receita.id}>
              <Link to={`/receita/${receita.id}`}>
                {receita.titulo}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/adicionar">
          <button className="btn-adicionar">Adicionar Nova Receita</button>
        </Link>
      </main>
     
    </div>
  );
};

export default HomePage;

