import { Filme } from '../interfaces';
import React, { useState,  } from 'react';

interface IndexProps {
  filmes: Filme[];
}

const Index: React.FC<IndexProps> = ({ filmes }) => {
  const [info, setInfo] = useState<Filme | null>(filmes[0]);
  const [filmeClicadoId, setFilmeClicadoId] =  useState<string | number>('');

  const mudarFilme = (filme: Filme) => {
    setInfo(filme);
    setFilmeClicadoId(filme.id); 
  };

  const selecaoFilmes = filmes.slice(0, 5);

  return (
    <div className="mainContainer">
      <div className='descricao'>
        <img src={info? info.imagens_background : 'img/olharParaiso2.webp'}  />

        <div className='descText'>
        <h1>{info ? info.titulo : 'Um olhar do paraíso'}</h1>
        <h3 className='categoria'>{info? info.genero : 'Drama'}</h3>
            <p className='filmeDesc'>{info? info.descricao : 'Susie Salmon está voltando para casa quando é assassinada por George Harvey, um vizinho que mora sozinho. Os pais de Susie, Jack e Abigail, inicialmente se recusam a acreditar na morte da filha. Em meio às investigações, a polícia conversa com George mas não o coloca entre os suspeitos, mas a família passa a desconfiar dele. Susie, que agora está em um local entre o paraíso e o inferno, observa a situação e lida com o sentimento de vingança e a vontade de ajudar sua família a superar sua morte.'}</p>    
            
            <button className='comprar'>Comprar</button>
            </div>
      </div>

      <div className='selecao'>
        {selecaoFilmes.map(filme => (
          <div key={filme.id}
          onClick={() => mudarFilme(filme)}
          className={filmeClicadoId === filme.id ? 'filmeClicado' : ''}
        >
            <img src={filme.imagem_url} alt={filme.titulo} className='filme' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
