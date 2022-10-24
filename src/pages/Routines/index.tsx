import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutinesDiv } from "./style";

function Routines() {
  const handleClear = () => {

  
  }
  let history = useHistory();
  const handleHome = () => {
    history.push("/contents");
  };
  interface nameProps{
    name: string;
    autor: string;
  }
  const [nameBook, setNameBook] = useState();

 
  return (
    <RoutinesDiv>
      <div className="play" onClick={handleHome}>Play Book</div>
      <div>
        Liste as suas leituras e temporize o seu tempo, para melhorar seu foco e
        concentração
      </div>
      <div>
        <input type="text" placeholder="Escreva o nome do seu livro" />
        <button>Adicionar livro</button>
        <button>Digite o autor do livro</button>
        <button onClick={handleClear}>Excluir Livro</button>
      </div>
    
      <div></div>
    </RoutinesDiv>
  );
  
}
export default Routines;
