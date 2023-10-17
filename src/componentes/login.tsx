import '/src/App.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface LoginProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Lógica de autenticação aqui
      const isAuthenticated = true; // Substitua isso pela lógica real de autenticação
  
      if (isAuthenticated) {
        setIsAuthenticated(true);
        navigate('/perfil');
        console.log('Redirecionando para o perfil...');
      } else {
        console.log('Erro na autenticação');
      }
    };
  
    return (
      <div>
       
       <form onSubmit={handleSubmit} className='formLogin'>
       
        <h3>Nome:</h3>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='digite seu nome'/>
      
      
        <h3> Email:</h3>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='digite seu e-mail'/>
      
    
      
        <h3>Password:</h3>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder='digite sua senha' />
      
     
      <button className='loginBtn' >Login </button>
    </form>
      </div>
    );
  };
  
  export default Login;

 