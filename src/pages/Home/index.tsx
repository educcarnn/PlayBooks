import { useHistory } from "react-router-dom";
import { HomeDiv } from "./style";

export function Home() {
  let history = useHistory();
  const handleContents = () => {
    history.push("/contents");
  };

  return (
    <HomeDiv>
      <div>
        <span className="tittle">Play Books</span>
        <span>
          Bem-vindo ao mundo da leitura, espaço dedicado à leitura, a melhorar
          seu conhecimento e proatividade
        </span>
      </div>
      <span>"A leitura engrandece a alma." - Voltaire</span>
      <div>
        <button onClick={handleContents}>Ir para conteúdos</button>
      </div>
      {/* <div>
        <span>Planos</span>
        <div>
          <span>Plano FãLeitura</span>
          <span> - Acesso a novidades em seu e-mail</span>
          <div>
            <div>Dicas de leituira</div>
            <div>Recomendações toda sexta</div>
            <div>Resumo de livros</div>
          </div>
          <span>Ligue para (xx)99999-9999</span>
        </div> */}
        {/* <div>   
                <span>Plano</span>
                <span> - Acesso a novidades em seu e-mail</span>
                <div>
                    <div>RECE/div>
                    <div>Recomendações toda sexta</div>
                    <div>Resumo de livros</div>
                </div>
                <button>Seja um fã leitura</button>
            </div> */}
      
    </HomeDiv>
  );
}
