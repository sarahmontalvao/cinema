import { Filme } from '../interfaces';
import {  useNavigate } from 'react-router-dom';


interface buttoninfoProps {
    filme: Filme | null;
  
   
  }



  const ButtonInfo: React.FC<buttoninfoProps> = ({filme}) => {
   

    const navigate = useNavigate();

    const infoFilm = () => {
      if (filme) {
       
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