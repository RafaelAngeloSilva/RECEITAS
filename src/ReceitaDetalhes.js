import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReceitaById } from './api';
import './ReceitaDetalhes.css';

const ReceitaDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReceitaById(Number(id));
      setReceita(data);
    };

    fetchData();
  }, [id]);

  if (!receita) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Detalhes da Receita</h1>
      </header>
      <main>
        <h2>{receita.titulo}</h2>
        <h3>Ingredientes:</h3>
        <ul>
          {receita.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <h3>Modo de Preparo:</h3>
        <p>{receita.modoPreparo}</p>
        <button className="btn-voltar" onClick={() => navigate(-1)}>Voltar</button>
      </main>
    </div>
  );
};

export default ReceitaDetalhes;
