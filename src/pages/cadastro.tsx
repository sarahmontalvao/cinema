import { Form } from 'react-router-dom';
import '/src/App.css'
import React, { useState, useRef } from 'react';




interface LoginProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const Cadastro: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef<HTMLFormElement | null>(null);
   
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        let response = await fetch('http://localhost/cinema/singup.php', {
          method: 'POST',
          body: new FormData(formRef.current ?? undefined)
        });

        let result = await response.json();

        if (response.ok) {
          alert(result.message);
      } else {
          alert(result.error);
      }
    }
  
  
    return (
      <div>
       
       <form ref={formRef} onSubmit={handleSubmit} className='formLogin'>
       
        <h3>Nome:</h3>
        <input type="text" name='nome' value={name} onChange={(e) => setName(e.target.value)} placeholder='digite seu nome'/>
      
      
        <h3> Email:</h3>
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='digite seu e-mail'/>
      
    
      
        <h3>Password:</h3>
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='digite sua senha' />
      
     
      <button className='loginBtn' >cadastre-se </button>
    </form>
      </div>
    );
  };
  
  export default Cadastro;

 