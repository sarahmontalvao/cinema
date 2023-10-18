import React from 'react';
import { useLocation } from 'react-router-dom';

import { Filme } from '../interfaces';
import FilmesCards from './filmesCard';

interface FilmesCardsProps {
    filmes: Filme[];
  }
  

const Result: React.FC<FilmesCardsProps>  = () => {
  const location = useLocation();
  const { results } = location.state;

  if (!results || results.length === 0 ) {
    return <div className='no-results'><p className='titulo'>Nenhum filme correspondente encontrado.</p></div>;
  }

  return (
    <div>
      <h1 className='titulo'>Resultados encontrados</h1>
      <FilmesCards filmes={results} /> 
      
    </div>
  );
};

export default Result;