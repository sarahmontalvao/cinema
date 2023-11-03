import { useState } from "react";
import SalaPopup from "./salaPopup";
import HistoriaPopup from "./historiaPopup";
import EnderecoPopup from "./enderecoPopup";

function Footer(){
    const [popupType, setPopupType] = useState<string | null>(null);

    const renderPopup = () => {
      switch (popupType) {
        case "sala":
          return <SalaPopup onClose={() => setPopupType(null)} />;
        case "historia":
          return <HistoriaPopup onClose={() => setPopupType(null)} />;
        case "endereco":
          return <EnderecoPopup onClose={() => setPopupType(null)} />;
        default:
          return null;
      }
    };

return (
<footer className="footerContainer">
<div  className="FooterAbout one">
    <h4 className="titulo">Sobre o nosso cinema</h4>
    <ul>
    <li>Fundado em 1981</li>
    <li>Filmes premiados em nosso acervo.</li>
    <li>Eventos em datas comemorativas</li>
  
    </ul>

</div>
<div className="logo">
   <a href="#"><img src="/img/tickets-logo.png" alt="cinema logo" />
   </a> 
</div>
<div className="FooterAbout ">
<h4 className="titulo">Sobre o nosso cinema</h4>
<ul>
          <li><a  onClick={() => setPopupType("sala")}>Conheça nossas salas</a></li>
          <li><a  onClick={() => setPopupType("historia")}>Nossa história</a></li>
          <li><a  onClick={() => setPopupType("endereco")}>Nosso endereço</a></li>
</ul>
</div>
<div className="copyRight">
<p>&copy; 2023 Site Fictício. Todos os direitos reservados.</p>
</div>
{renderPopup()}
</footer>
)
}
export default Footer;