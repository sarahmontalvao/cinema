import '/src/App.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="menu">
       <Link to="/"> <div className='logo'><img src="img/tickets-logo.png" alt="" /></div></Link>
     

      <ul className='perfil'>
       
        <li ><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        <Link to="/favoritos"><li><FontAwesomeIcon icon={faHeart} /></li> </Link>
        <Link to="/perfil"> <li ><FontAwesomeIcon icon={faUser} /></li></Link>
        
      </ul>

    </div>
  );
};

export default Header;

