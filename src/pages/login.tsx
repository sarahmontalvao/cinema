
import '/src/App.css'
import React, { useState, useRef, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


interface LoginProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef<HTMLFormElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuthCookie = () => {
          const isAuthenticated = Cookies.get('auth') === 'true';
          setIsAuthenticated(isAuthenticated);
          if (isAuthenticated) {
              navigate('/perfil');
          }
      };

      checkAuthCookie();
  }, [setIsAuthenticated, navigate]); 

  const [isLoading, setIsLoading] = useState(false); 
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const email = formRef.current?.email.value;
      const password = formRef.current?.password.value;

      if(email && password){
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
      
        try{

          setIsLoading(true);
        let response = await fetch('http://localhost/cinema/login.php', {
          method: 'POST',
          body: formData ,
          credentials: 'include',
          
        });

        

        if(response.ok){
          const resultData = await response.json();
        
          if ('error' in resultData) {
            console.error('erro de login: ' + resultData.error);
            alert('Email ou senha incorretos. Por favor, tente novamente.');
          } else {
            setIsAuthenticated(true);
            navigate('/perfil');
            alert('Login realizado com sucesso');
          }
        } else {
          alert('Erro ao realizar login. Por favor, tente novamente mais tarde.');
        }
        
      
      }catch(error){
        console.error('Erro ao enviar solicitação:', error);
        alert('Erro ao enviar solicitação. Por favor, verifique sua conexão e tente novamente.');
      }finally {
        setIsLoading(false); 
      }
    }else {
      alert('Por favor, preencha todos os campos.');
  }
 
    }
  
    return (
      <div>
       
       <form  ref={formRef} onSubmit={handleSubmit} className='formLogin'>
       {isLoading && <div>Carregando...</div>}

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