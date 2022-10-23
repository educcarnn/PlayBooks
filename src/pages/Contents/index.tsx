import ListItems from "../../components/ListItems";
import FilteredItems from "../../components/FilteredItems";
import { useContext } from "react";
import { userAddStates } from "../../providers/States";
import { Header } from "../../components/HeaderContent";
import Quotes from "../../components/Quotes";

import ReactPlayer from "react-player/lazy";
import Articles from "../../components/Articles";
import { ContentsHome } from "./style";


export function Contents() {
  const { value } = useContext(userAddStates);

  return (
    <ContentsHome>
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
      <div className="reactPlayer">
        <ReactPlayer url="http://www.youtube.com/shorts/lRjDjgwsR2U"  width='50%'/>
      </div>
      <Articles />
      <Quotes />
    </ContentsHome>
  );
}
