import { SetStateAction, useContext} from "react";
import { HeaderDiv } from "./style";




import { userAddStates } from "../../providers/States";
export function Header() {

  const {value, setValue} = useContext(userAddStates)
  const FilterValueItens = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };

  return (
    <HeaderDiv>
      <div>Play Books</div>
      <div>
        <input
          type="text"
          placeholder="Pesquiso o nome do seu livro"
          onChange={FilterValueItens}
        />
      </div>
      {console.log(value)}
      {value !== "" ? (
        <div>
          <span>Resultados para: {value}</span>
        </div>
      ) : null}
    </HeaderDiv>
  );
}
