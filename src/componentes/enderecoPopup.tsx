import React from "react";

interface Props {
  onClose: () => void;
}

const enderecoPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="titulo adress">Venha nos visitar</h2>
        <h3>Rua da Cinemateca, 123, Cidade do Cinema, CEP: 98765-432</h3>

       <p>Esperamos recebê-lo em breve para uma experiência cinematográfica verdadeiramente memorável!</p> 
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default enderecoPopup;
