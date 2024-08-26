import receitas from './data/receitas.json';

export const fetchReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(receitas), 500);
  });
};

export const fetchReceitaById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(receitas.find((receita) => receita.id === id)), 500);
  });
};

export const addReceita = (novaReceita) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      receitas.push(novaReceita);
      resolve(novaReceita);
    }, 500);
  });
};
