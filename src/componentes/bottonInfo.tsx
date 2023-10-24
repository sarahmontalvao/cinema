import { Filme } from '../interfaces';
import { Navigate, useNavigate } from 'react-router-dom';


interface buttoninfoProps {
    filme: Filme | null;
  
   
  }



  const ButtonInfo: React.FC<buttoninfoProps> = ({filme}) => {
    console.log(filme);

    const navigate = useNavigate();

    const infoFilm = () => {
      if (filme) {
        console.log(filme.id);
        navigate(`/infoPage/${filme.id}`, {state: {info:filme}});
      }
    };




    return(
        <div>
      {filme && (
        <button className='infoPage' onClick={() => infoFilm()}>
         ver mais
       </button>
      )}
    </div>

    )}
    export default ButtonInfo;