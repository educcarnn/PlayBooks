import { SetStateAction, useContext } from "react";
import { HeaderDiv } from "./style";
import { userAddStates } from "../../providers/States";
import { useHistory } from "react-router-dom";
import { HeaderContent } from "../../pages/Home/style";
export function Header() {
  const { value, setValue } = useContext(userAddStates);
  const FilterValueItens = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  let history = useHistory();
  const handleHome = () => {
    history.push("/");
  };
  const clearBooks = () => {
    setValue("");
  };

  return (
    <HeaderContent>
      <HeaderDiv>
        <span onClick={handleHome} className="spanTittle">
          Play Books
        </span>
      </HeaderDiv>
      <div className="elements">
        <button className="spanRotina">Rotina</button>
        <button className="spanRotina">Artigos</button>
      </div>
      <div>
        <div className="elements">
          <label>Pesquise o seu livro</label>
          <input
            type="text"
            placeholder="Nome do livro ou idioma"
            onChange={FilterValueItens}
          />
        </div>
        {value !== "" ? (
          <div className="elements">
            <span>Resultados para: {value}</span>
            <button onClick={clearBooks}>Mostrar todos os livros</button>
          </div>
        ) : null}
      </div>
    </HeaderContent>
  );
}
