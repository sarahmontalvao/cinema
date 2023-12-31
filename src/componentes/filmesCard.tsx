import React, { useState, useEffect } from 'react';
import { Filme } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ButtonInfo from './bottonInfo';

interface FilmesCardsProps {
  filmes: Filme[];
}

const FilmesCards: React.FC<FilmesCardsProps> = ({ filmes }) => {

  const imageUrl =import.meta.env.VITE_IMG;

  const [favList, setFavList] = useState<Filme[]>(() => {
    const storage = localStorage.getItem('favs');
    return storage ? JSON.parse(storage) : [];

  });

  const [click, setClick] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favList));
  }, [favList]);

  const favClick = (filme: Filme) => {
    const isOnFavs = favList.some((f) => f.id === filme.id);

    if (!isOnFavs) {
      const updatedFavList = [...favList, filme];
      setFavList(updatedFavList);
      setClick(filme.id); 
    } else {
      const updatedFavList = favList.filter((f) => f.id !== filme.id);
      setFavList(updatedFavList);
      setClick(null); 
     
    }
  };

  return (
    <div className="FilmesCardsContainer">
       {filmes.length === 0 && <p>Carregando...</p>}
      {filmes.length > 0 && filmes.map((filme) => (
        <div key={filme.id} className="filmeCard">
          <img src={imageUrl + filme.poster_path} alt="" />
          <h3>{filme.title}</h3>
          <h4>{filme.release_date.toString().slice(0,4)}</h4>
          <div className="iconsCards">
            <p
              onClick={() => favClick(filme)}
              className={favList.some((f) => f.id === filme.id) || click === filme.id ? 'iconClick' : 'icon'}
            >
              <FontAwesomeIcon icon={faHeart} />
            </p>
            <ButtonInfo filme={filme} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmesCards;

