import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addReceita } from './api';
import './AdicionarReceita.css';

const AdicionarReceita = () => {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaReceita = {
      id: Date.now(),
      titulo,
      ingredientes: ingredientes.split(',').map((item) => item.trim()),
      modoPreparo,
    };
    addReceita(novaReceita).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Adicionar Nova Receita</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <label>Ingredientes (separados por vírgula):</label>
          <input
            type="text"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
          <label>Modo de Preparo:</label>
          <textarea
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
            required
          />
          <button type="submit" className="btn-adicionar">Adicionar Receita</button>
        </form>
      </main>
    </div>
  );
};

export default AdicionarReceita;
