import { useState, useEffect } from "react";
import { words } from "../../services/words";

function Quotes() {

  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === words.length - 1) {
        return setIndex(0);
      }
      return setIndex(index + 1);
    }, 8000);
  });

  return (
    <div>
        <div>{words[index]}</div>
    </div>
  );
}

export default Quotes;
