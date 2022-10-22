import { SetStateAction, useContext } from "react";
import { userAddApi } from "../../providers/Api";
import { userAddStates } from "../../providers/States";

function SelectItens() {
  const { category } = useContext(userAddApi);
  const { setValue } = useContext(userAddStates);

  const handleItemChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Filtre pelo ano da publicação</label>
        <select onChange={handleItemChange}>
          <option value="">Ano da publicação</option>
          {category?.map((item) => (
            <option key={item.id} value={item.volumeInfo?.publishedDate}>
              {item.volumeInfo?.publishedDate}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default SelectItens;
