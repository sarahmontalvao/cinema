import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import buscarFilmes from "./script.tsx";



import Header from './componentes/header'
import Index from './pages/index.tsx'
import Perfil from './pages/perfil.tsx'
import Login from './pages/login.tsx';
import Favoritos from './pages/favoritos.tsx';
import InfoPage from './pages/infoPage.tsx';

import Result from './pages/result.tsx';
import './App.css'
import Cadastro from './pages/cadastro.tsx';



function App() {

  const [isAuthenticated, setIsAuthenticated]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    buscarFilmes()
    .then(data => {
      setFilmes(data);
    })
    .catch(error => {
      console.error('Erro ao buscar filmes:', error);
    });
}, []);


  return (
   
    <div className='app'>
       <Router>
        <Header filmes={filmes}/>
          <Routes>
            <Route path="/" element={<Index  filmes={filmes}/>} />

            <Route path="/perfil" 
            element={<Perfil isAuthenticated={isAuthenticated}/>} />
            
            <Route path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route path="/cadastro" 
            element={<Cadastro setIsAuthenticated={setIsAuthenticated} />} />
            
            
            <Route path="/favoritos" element={<Favoritos />} />

            <Route path="/result" element={<Result filmes={filmes} />} />

            <Route path="/infoPage/:id" element={<InfoPage  />} />

          </Routes>
      </Router>
       
    
    </div>
       
   
  )
}

export default App
