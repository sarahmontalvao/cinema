import { Filme } from '../interfaces';
import React, { useState, useEffect } from 'react';
import Filmes from './filmes';
import ButtonInfo from '../componentes/bottonInfo';

interface IndexProps {
  filmes: Filme[];
}


const Index: React.FC<IndexProps> = ({ filmes }) => {


  const [info, setInfo] = useState<Filme | null>(filmes[1]);
  const [filmeClicadoId, setFilmeClicadoId] =  useState<string | number>('');
  const [qtdFilm, setQtdFilm] = useState< number> (5)

  const imageUrl =import.meta.env.VITE_IMG;



  useEffect(() => {
    if (filmes.length > 0) {

      setInfo(filmes[0]);
      setFilmeClicadoId(filmes[0].id);
    }
  }, [filmes]);

  useEffect(() =>{

    const ajustarSelecao = () =>{
      const width = window.innerWidth;
      
      if(width > 1200){
        setQtdFilm(5)
      }
      else if (width > 1000){
        setQtdFilm(4)
      }else if(width > 700){
        setQtdFilm(3)
      }
      
      else{
        setQtdFilm(2)
      }
    }

    window.addEventListener('resize', ajustarSelecao )

    ajustarSelecao();

    return () => {
      window.removeEventListener('resize', ajustarSelecao)
    }
  }, [qtdFilm]);

  const mudarFilme = (filme: Filme) => {
    setInfo(filme);
    setFilmeClicadoId(filme.id); 
  };


  const selecaoFilmes = filmes.slice(0, qtdFilm);

  return (
    <div>
    <div className="mainContainer">
      <div className='descricao'>

        <div className='descText'>
        <h1>{info?.title }</h1>
        <h3 className='categoria'>{info?.release_date }</h3>
        <p className='filmeDesc'>{ info?.overview.slice(0, info?.overview.length / 2)}...</p>
            <ButtonInfo filme={info} />
            </div>
      </div>

      <div className='selecao'>
        {selecaoFilmes.map(filme => (
          <div key={filme.id}
          onClick={() => mudarFilme(filme)}
          className={filmeClicadoId === filme.id ? 'filmeClicado' : ''}
        >
            <img src={imageUrl + filme.poster_path}alt={filme.title} className='filme' />
          </div>
        ))}
      </div>
     
    </div>
    <Filmes filmes={filmes} />
    </div>

     
  );
};

export default Index;
