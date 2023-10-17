import { Filme } from '../interfaces';

interface FilmesCardsProps {
    filmes: Filme[];
  }
  
 
const FilmesCards: React.FC<FilmesCardsProps> = ({ filmes }) => {
    return(
        <div className="FilmesCardsContainer"> 
          
        {filmes.map(filme => (
          <div key={filme.id} className="filmeCard">
            <img src={filme.imagem_url} alt="" />
           <h3>{filme.titulo}</h3> 
           <h4>{filme.genero}</h4>
          </div>

        ))}
        </div>
    )

    };
     
    export default FilmesCards;