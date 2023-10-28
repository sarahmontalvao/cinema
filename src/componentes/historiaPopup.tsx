import React from "react";

interface Props {
  onClose: () => void;
}

const historiaPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="titulo">Um pouco da nossa historia</h2>
       <div><p>Em 1981, nossa sala de cinema surgiu como uma joia escondida, oferecendo aos cinéfilos uma experiência íntima e única. Desde então, temos nos dedicado a compartilhar filmes premiados e diretores visionários com nossa comunidade apaixonada por cinema.
       </p>
        <p> Nosso espaço acolhedor tornou-se um refúgio para os amantes da sétima arte, proporcionando noites inesquecíveis de entretenimento e inspiração. A cada exibição, continuamos a celebrar a magia do cinema, mantendo viva a chama do encanto e da maravilha que só os filmes podem oferecer.
        </p>
          <p>Venha se juntar a nós nessa jornada cinematográfica, onde as histórias ganham vida e os sonhos ganham asas.
          </p>
          </div>
          
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default historiaPopup;
