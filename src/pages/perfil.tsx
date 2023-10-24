
import '/src/App.css'
import { Link } from 'react-router-dom';
const Perfil =   ({ isAuthenticated }: { isAuthenticated: boolean }) => {

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

          <button  className='loginBtn'>
            ver seus favoritos
          </button>
         
        
     
      </div>


  <div className='codigo'>
      <img src="img/barras(1).png" alt="" />
  </div>
</div>
);}}

export default Perfil;
