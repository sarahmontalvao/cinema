import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import buscarFilmes from "./script.tsx";



import Header from './componentes/header'
import Index from './componentes/index.tsx'
import Perfil from './componentes/perfil'
import Login from './componentes/login';
import Favoritos from './componentes/favoritos';
import Filmes from './componentes/filmes';
import './App.css'


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
        <Header />
          <Routes>
            <Route path="/" element={<Index  filmes={filmes}/>} />

            <Route path="/perfil" 
            element={<Perfil isAuthenticated={isAuthenticated}/>} />
            
            <Route path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
      </Router>
      <Filmes filmes={filmes}/>

      {/* talvez adicionar o map aqui */}
    
    </div>
       
   
  )
}

export default App
