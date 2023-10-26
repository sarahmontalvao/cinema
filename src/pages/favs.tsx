import FilmesCards from '../componentes/filmesCard';


function Favs() {

  const storage = localStorage.getItem('favs');
  const FavsStorage: [] = storage? JSON.parse(storage) : 'Nada ainda'


  return (
   
    <div className="favContainer">
       <p className='titulo'>Seus filmes favoritos</p>
      <div className="itemFav">
      <FilmesCards filmes = {FavsStorage}/>
      </div>
    </div>
  );
};

export default Favs;

