import { useHistory } from "react-router-dom";
import { HomeDiv } from "./style";

export function Home() {
  let history = useHistory();
  const handleContents = () => {
    history.push("/contents");
  };

  return (
    <HomeDiv>
      <div className="contentItem">
        <span className="tittle">Play Books</span>
        <span>
          Bem-vindo ao mundo da leitura, espaço para melhorar
          seu conhecimento e proatividade
        </span>
      </div>
      <span>"A leitura é, provavelmente, uma outra maneira de estar em um lugar." - José Saramago</span>
      <div>
        <button onClick={handleContents}>Ir para conteúdos</button>
      </div>
  </HomeDiv>
  );
}
