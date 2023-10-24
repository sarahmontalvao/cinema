import '/src/App.css'
import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Perfil from './perfil';
import Cookies from 'js-cookie';






interface LoginProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef<HTMLFormElement | null>(null);
    const navigate = useNavigate();

      
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const email = formRef.current?.email.value;
      const password = formRef.current?.password.value;

      if(email && password){
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
      
        try{
        let response = await fetch('http://localhost/cinema/login.php', {
          method: 'POST',
          body: formData ,
          
        });

        let result = await response.json();

        if(response.ok){
          setIsAuthenticated(true);
          navigate('/perfil')
          alert('realizado com sucesso');
          
          
         
        }else{
          console.error('erro de login'+result.error)
        }
      
      }catch(error){
        console.error('Erro ao enviar solicitação:', error);
      }
    }else {
      alert('Por favor, preencha todos os campos.');
  }
 
    }
  
    return (
      <div>
       
       <form  ref={formRef} onSubmit={handleSubmit} className='formLogin'>
       
        <h3> Email:</h3>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='digite seu e-mail'/>



        <h3>Senha:</h3>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='digite sua senha' />
      
     
      <button className='loginBtn' >Login </button>
    </form>
      </div>
    );
  };
  
  export default Login;

 