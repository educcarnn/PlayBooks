import ListItems from "../../components/ListItems";
import FilteredItems from "../../components/FilteredItems";
import React, { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { Header } from "../../components/HeaderContent";
import Quotes from "../../components/Quotes";
import SelectItens from "../../components/SelectItens";
import ReactPlayer from "react-player/lazy";
import Articles from "../../components/Articles";

export function Contents() {
  const { value } = useContext(userAddStates);

  return (
    <div>
      {value !== "" ? (
        <div>
          <Header />
          <SelectItens />
          <FilteredItems />
        </div>
      ) : (
        <div>
          <Header />
          <SelectItens />
          <ListItems />
        </div>
      )}
      <div>
        <ReactPlayer url="https://www.youtube.com/shorts/lRjDjgwsR2U" />
      </div>
      <Articles />
      <Quotes />
    </div>
  );
}
