import { Filme } from '../interfaces';
import { useLocation } from 'react-router-dom';



const InfoPage= () => {
    const location = useLocation();
    const state = location.state as {info:Filme};

    const imageUrl =import.meta.env.VITE_IMG;

    const filmeInfo = state.info;
  
   return(
    <div className='infoContainer'>
    <div className='infoCard'> 

<div className='info'>

<img src={`${imageUrl}${filmeInfo.poster_path}`} alt={filmeInfo.title} />

<div className='details'>
  <h1>{filmeInfo.title}</h1>
  <p>{filmeInfo.diretor}</p>
 <p>{filmeInfo.release_date}</p>

</div> 

</div>

<p className='desc'>{filmeInfo.overview}</p>
    </div>
    </div>
)

    };
     
export default InfoPage;