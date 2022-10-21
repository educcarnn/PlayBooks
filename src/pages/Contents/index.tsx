import ListItems from "../../components/ListItems";
import FilteredItems from "../../components/FilteredItems";
import { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { Header } from "../../components/HeaderContent";
import Quotes from "../../components/Quotes";
import SelectItens from "../../components/SelectItens";

export function Contents() {
  const { value } = useContext(userAddStates);
  console.log(value)

  return (
    <div>
      {value !== "" ? (
        <div>
          <Header/>
          <SelectItens/>
          <FilteredItems />
        </div>
      ) : (
        <div>
          <Header/>
          <SelectItens/>
          <ListItems />
        </div>
      )}
      <Quotes/>
      
    </div>
  );
}
