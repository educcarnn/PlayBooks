import { useState } from "react";

function Routines() {
  const [nameBook, setNameBook] = useState(
    JSON.parse(localStorage.getItem("books") as string)
  );

  const submitHandler = () => {
    
  };
  return (
    <div>
      <div>
        Liste as suas leituras e temporize o seu tempo, para melhorar a leitura
        e aperfeiçoamento
      </div>
      <div>
        <input type="text" placeholder="Escreva o nome do seu livro" />
        <button onClick={submitHandler}></button>
      </div>

      <div>
        <div>Livros</div>
        {/* {nameBook?.map(() = > ({

        ))} */}
      </div>
    </div>
  );
}
export default Routines;
