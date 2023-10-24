import { Filme } from '../interfaces';
import { useLocation } from 'react-router-dom';



const InfoPage= () => {
    const location = useLocation();
    const state = location.state as {info:Filme};

    const filmeInfo = state.info;

   
  
  return(
    <div className='infoContainer'> 

<img src={`/${filmeInfo.imagem_url}`} alt={filmeInfo.titulo} />
  <h1>{filmeInfo.titulo}</h1>
  <p>{filmeInfo.descricao}</p>
  

    </div>
)

    };
     
export default InfoPage;