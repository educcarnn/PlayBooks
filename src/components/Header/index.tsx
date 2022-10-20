import { useContext, useState } from "react";
import { HeaderDiv } from "./style";

import { userFavorites } from "../../providers/Favorites";
import { userAddApi } from "../../providers/Api";

export function Header() {
  const [valueFilter, setValueFilter] = useState<string>("");

  const { setFilter, filter } = useContext(userAddApi);

  return (
    <HeaderDiv>
      <div>Play Books</div>
      <div>
        <input type="text" placeholder="Pesquiso o nome do seu livro" />
      </div>
      {valueFilter !== "" ? (
        <div>
          <span>Resultados para: {valueFilter}</span>
        </div>
      ) : null}
    </HeaderDiv>
  );
}
