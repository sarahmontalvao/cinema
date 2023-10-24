import { Filme } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,  } from '@fortawesome/free-solid-svg-icons';
import ButtonInfo from './bottonInfo';

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
           <div className='iconsCards'>
           <p > <FontAwesomeIcon icon={faHeart} className='icon' /> </p>
           <ButtonInfo filme={filme}/>
           </div>
          </div>

        ))}
        </div>
    )

    };
     
    export default FilmesCards;