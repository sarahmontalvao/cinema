import React from "react";

interface Props {
  onClose: () => void;
}

const SalaPopup: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="titulo">Conheça nossas salas</h2>
        <div>
       <p> Nossas salas de cinema são mais do que simples espaços com poltronas e telas; são portais para outras realidades. Quando você entra, é como se o mundo lá fora desaparecesse e você se encontrasse em um universo completamente novo, pronto para ser explorado.
       </p>
      <p>  Imagine-se em uma poltrona confortável, a luz suavemente se atenuando enquanto a tela ganha vida. Os sons envolventes o transportam para o coração da ação, enquanto as imagens detalhadas contam histórias que cativam sua mente e seu coração. Você se vê rindo em uma comédia, segurando a respiração durante um suspense ou deixando as lágrimas escaparem em um momento emocionante.
      </p>

        </div>
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default SalaPopup;
