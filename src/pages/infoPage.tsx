import { Filme } from '../interfaces';
import { useLocation } from 'react-router-dom';



const InfoPage= () => {
    const location = useLocation();
    const state = location.state as {info:Filme};

    const filmeInfo = state.info;
  
   return(
    <div className='infoContainer'>
    <div className='infoCard'> 

<div className='info'>
<img src={`${filmeInfo.imagem_url}`} alt={filmeInfo.titulo} />

<div className='details'>
  <h1>{filmeInfo.titulo}</h1>
  <p>{filmeInfo.diretor}</p>
 <p>{filmeInfo.ano}</p>

</div> 

</div>

<p className='desc'>{filmeInfo.descricao}</p>
    </div>
    </div>
)

    };
     
export default InfoPage;