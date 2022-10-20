import ListItems from "../../components/ListItems";
import FilteredItems from "../../components/FilteredItems";
import { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { Header } from "../../components/Header";

export function Contents() {
  const { value } = useContext(userAddStates);

  return (
    <div>
      {value !== "" ? (
        <div>
          <Header/>
          <FilteredItems />
        </div>
      ) : (
        <div>
          
          <ListItems />
        </div>
      )}
    </div>
  );
}
