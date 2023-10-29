import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import '/src/App.css'

const Perfil: React.FC<{ isAuthenticated: boolean; setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isAuthenticated, setIsAuthenticated }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthCookie = () => {
      const isAuthenticated = Cookies.get('auth') === 'true';
      setIsAuthenticated(isAuthenticated);
    };

    checkAuthCookie();
  }, [setIsAuthenticated]);

  const handleLogout = () => {
   
    Cookies.remove('auth');
    setIsAuthenticated(false);
  };

  if(!isAuthenticated){
  return (
    
    <div className="perfilContainer">
      
          {/* verificar se logado*/}

          <div className='cinemaNome'>
             <h2>CineSala</h2>
          </div>
        
            

              <div className='dados'>

                <div className='foto'>

                </div>
              
                <h1>Olá desconhecido</h1>
                <p>Faça login ou se cadastre para ter uma melhor experiencia</p>

          
                <Link to="/login"><button className='loginBtn' id='login'>Fazer login</button> </Link> 
                <Link to="/cadastro"> <button className='loginBtn' id='cadastro'>Cadastrar</button> </Link>
            </div>
      

        <div className='codigo'>
        <img src="img/barras.png" alt="" />
        
        </div>
    </div>
  );}

  else{
  return (
    <div className="perfilContainer">
      
    {/* verificar se logado*/}

    <div className='cinemaNome'>
       <h2>CineSala</h2>
    </div>
  
      

        <div className='dados'>

          <div className='foto'>

          </div>
        
          <h1>Olá cadastrado</h1>

          <button  className='loginBtn' onClick={() => navigate('/favs')}>
            ver seus favoritos
          </button>
          <button className='logOutBotton'
          onClick={handleLogout}>Sair
          </button>
        
     
      </div>


  <div className='codigo'>
  <img src="img/barras.png" alt="" />
  </div>
</div>
);}}

export default Perfil;
