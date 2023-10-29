import { Form } from 'react-router-dom';
import '/src/App.css'
import React, { useState, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';

interface CadastroProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cadastro: React.FC<CadastroProps> = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
   
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let response = await fetch('http://localhost/cinema/singup.php', {
        method: 'POST',
        body: new FormData(formRef.current ?? undefined),
        credentials: 'include',
      });

      

      if(response.ok) {
        const resultData = await response.json();
        
        if ('error' in resultData) {
          console.error('erro de cadastro: ' + resultData.error);
          alert('Erro ao cadastrar usuário: ' + resultData.error);
        } else {
          setIsAuthenticated(true);
          navigate('/perfil');
          alert('Cadastro realizado com sucesso');
        }
      } else {
        alert('Erro ao realizar cadastro. Por favor, tente novamente mais tarde.');
      }
    } catch(error) {
      console.error('Erro ao enviar solicitação:', error);
      alert('Erro ao enviar solicitação. Por favor, verifique sua conexão e tente novamente.');
    }
  };
 
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className='formLogin'>
        <h3>Nome:</h3>
        <input type="text" name='nome' value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome'/>
      
        <h3>Email:</h3>
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu e-mail'/>
      
        <h3>Password:</h3>
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha' />
      
        <button className='loginBtn'>Cadastre-se </button>
      </form>
    </div>
  );
};

export default Cadastro;

 