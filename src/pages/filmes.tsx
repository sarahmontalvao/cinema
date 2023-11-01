import FilmesCards from "../componentes/filmesCard";
import { useEffect, useState } from "react";

import { Filme } from '../interfaces';

import '../App.css'


interface Props {
  filmes: Filme[];
}



const Filmes: React.FC<Props> = ({ filmes }) => {

  const ShowMoreMovies = () => {
    setQtdFilm(prevQtdFilm => prevQtdFilm + 5);
  };

  const [qtdFilm, setQtdFilm] = useState< number> (5)

  useEffect(() =>{
  
    const qtdMovies = () =>{
      const width = window.innerWidth;
      
      if(width > 1200){
        setQtdFilm(15)
      }
      
      else if(width > 815){
        setQtdFilm(10)
      }
      else if(width > 300){
        setQtdFilm(6)
      }
    }
  
    window.addEventListener('resize', qtdMovies )
  
    qtdMovies();
  
    return () => {
      window.removeEventListener('resize', qtdMovies)
    }
  }, []);



  return(
    <div className="filmeContainer"> 
    <h2 className="titulo">Classicos</h2>

    <FilmesCards filmes={filmes.slice(0, qtdFilm)} />

      {qtdFilm < filmes.length && (
    <button className="moreMovies" onClick={ShowMoreMovies}> Ver mais</button>
    )}
       

    </div>
)

    };
     
export default Filmes;