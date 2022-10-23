import { useState, useEffect } from "react";
import { words } from "../../services/words";
import { QuotesDiv } from "./style";

function Quotes() {

  const [index, setIndex] = useState(0 as number);

  useEffect(() => {
    setTimeout(() => {
      if (index === words.length - 1) {
        return setIndex(0);
      }
      return setIndex(index + 1);
    }, 8000);
  });

  return (
    <QuotesDiv>
        <div>{words[index]}</div>
    </QuotesDiv>
  );
}

export default Quotes;
