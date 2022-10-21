import { useContext } from "react";
import { userAddApi } from "../../providers/Api";
import { userAddStates } from "../../providers/States";

function SelectItens() {
  const { category, setFilter, filter } = useContext(userAddApi);
  const { value, setValue } = useContext(userAddStates);

  const handleFruitChange = (e: any) => {
    setValue(e.target.value);
  };

  console.log(category);

  return (
    <div>
      <div>
        <label>Filtre pelo ano da publicação</label>
        <select onChange={handleFruitChange}>
          <option value="Selecione a categoria do livro">
            Ano da publicação
          </option>
          {category?.map((fruit: any) => (
            <option key={fruit.id} value={fruit.volumeInfo?.publishedDate}>
              {fruit.volumeInfo?.publishedDate}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default SelectItens;
