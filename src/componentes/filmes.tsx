import FilmesCards from "./filmesCard";

import { Filme } from '../interfaces';

import '../App.css'

interface Props {
  filmes: Filme[];
}

const Filmes: React.FC<Props> = ({ filmes }) => {
  return(
    <div className="filmeContainer"> 
    <h2>Classicos</h2>

        <FilmesCards  filmes={filmes}/>

    </div>
)

    };
     
export default Filmes;