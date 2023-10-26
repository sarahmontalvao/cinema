
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Filme } from '../interfaces';


interface Props {
  filmes: Filme[];
}
  

const Header : React.FC<Props> = ({ filmes }) => {

  const [searchClick, setSearchClick] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [result, setResult] = useState<Filme[]>([]);
  const navigate = useNavigate(); 

  const handleClick = () =>{
    setSearchClick(true)
  }

  const handleSearch = ()=>{
   const resultado = filmes.filter(filmes => filmes.titulo.toLowerCase().includes(searchText.toLowerCase()))
  
   setResult(resultado)
   navigate('/result', { state: { results: resultado } }); 
  }



  return (
    <div className="menu">
       <Link to="/"> <div className='logo'><img src="img/tickets-logo.png" alt="" /></div></Link>
     

      <ul className='perfil'>
       
      <li onClick={handleClick}>
  {searchClick ? (
     <div className='search-container'>
             
        <input  type="text"  
        placeholder="Pesquisar filmes"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSearch()}
        >
       
        </input>
               <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' onClick={handleSearch}/>
            </div>
  ) : 
  (
    <FontAwesomeIcon icon={faMagnifyingGlass}  onClick={handleClick} />
  )}
  
    </li>
        <Link to="/favs"><li><FontAwesomeIcon icon={faHeart} /></li> </Link>
        <Link to="/perfil"> <li ><FontAwesomeIcon icon={faUser} /></li></Link>
        
      </ul>

    </div>
  );
};

export default Header;

