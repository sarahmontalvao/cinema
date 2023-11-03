import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './componentes/header'
import Index from './pages/index.tsx'
import Perfil from './pages/perfil.tsx'
import Login from './pages/login.tsx';
import Favs from './pages/favs.tsx';
import InfoPage from './pages/infoPage.tsx';
import Result from './pages/result.tsx';
import Cadastro from './pages/cadastro.tsx';
import Footer from './componentes/footer.tsx';

import './App.css'


function App() {

  const [isAuthenticated, setIsAuthenticated]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  const [filmes, setFilmes] = useState([])

  const moviesUrl = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;



const getFilms = async (url: string) =>{
  const res = await fetch(url);
  const data = await res.json()
 setFilmes(data.results)
};

useEffect(()=>{
  const filmsUrl = `${moviesUrl}top_rated?api_key=${apiKey}&language=pt-br`;

    getFilms(filmsUrl)
    
},[])


  return (
   
    <div className='app'>
       <Router>
        <Header filmes={filmes}/>
          <Routes>
            <Route path="/" element={<Index  filmes={filmes}/>} />

            <Route path="/perfil" 
            element={<Perfil isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
            
            <Route path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} />

            <Route path="/cadastro" 
            element={<Cadastro setIsAuthenticated={setIsAuthenticated} />} />
            
            
            <Route path="/favs" element={<Favs />} />

            <Route path="/result" element={<Result filmes={filmes} />} />

            <Route path="/infoPage/:id" element={<InfoPage  />} />

          </Routes>
      </Router>
      <Footer/>
       
    
    </div>
       
   
  )
}

export default App
