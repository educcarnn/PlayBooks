import ListItems from "../../components/ListItems";
import FilteredItems from "../../components/FilteredItems";
import React, { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { Header } from "../../components/HeaderContent";
import Quotes from "../../components/Quotes";

import ReactPlayer from "react-player/lazy";
import Articles from "../../components/Articles";

export function Contents() {
  const { value } = useContext(userAddStates);

  return (
    <div>
      {value !== "" ? (
        <div>
          <Header />
         
          <FilteredItems />
        </div>
      ) : (
        <div>
          <Header />
       
          <ListItems />
        </div>
      )}
      <div>
         <ReactPlayer url="http://www.youtube.com/shorts/lRjDjgwsR2U" /> 
      </div>
      <Articles />
      <Quotes />
    </div>
  );
}
