import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import { RoutinesDiv } from "./style";

function Routines() {
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  let history = useHistory();
  const handleHome = () => {
    history.push("/contents");
  };
  interface listProps {
    name: string;
    autor: string;
  }
  const [list, setList] = useState<listProps[]>([]);
  const [name, setName] = useState<string>("");
  const [autor, setAutor] = useState<string>("");

  const handleSubmit = (name: string, autor: string) => {
    const book = { name, autor };

    setList([...list, book]);
  };

  const handleClear = () => {
    setList([]);
  };

  if (list.length === 3) {
    return (
      <RoutinesDiv>
        <div className="play" onClick={handleHome}>
          Play Books
        </div>
        <div>
          Liste as suas leituras e temporize o seu tempo, para melhorar o foco
          e concentração
        </div>
        <div className="tempError">
          Máximo de 3 livros adicionado (Remover livros para adicionar mais)
        </div>
        <div className="elemsBooks">
          <input
            type="text"
            className="inputButton"
            placeholder="Nome do seu livro"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="inputButton"
            placeholder="Autor do seu livro"
            onChange={(e) => setAutor(e.target.value)
            }
          />
          <div className="elemsButtons">
            <button className="buttonElem">Adicionar livro</button>
            <button onClick={handleClear} className="buttonElem">
              Remover livros
            </button>
          </div>

          <ul className="ulList">
            {list?.map((item, index) => (
              <li key={index}>
                <div>Nome: {item.name}</div>
                <div>Autor: {item.autor}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="temp">
          <div>Temporizador</div>
          <div className="elemsButtons">
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={() => reset()}>Reset</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "72px" }}>
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </div>
        </div>
      </RoutinesDiv>
    );
  } else {
    return (
      <RoutinesDiv>
        <div className="play" onClick={handleHome}>
          Play Books
        </div>
        <div>
          Liste as suas leituras e temporize o seu tempo, para melhorar o foco
          e concentração
        </div>
        <div className="elemsBooks">
          <input
            type="text"
            className="inputButton"
            placeholder="Nome do seu livro"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="inputButton"
            placeholder="Autor do seu livro"
            onChange={(e) => setAutor(e.target.value)}
          />
          <div className="elemsButtons">
            <button
              onClick={() => handleSubmit(name, autor)}
              className="buttonElem"
            >
              Adicionar livro
            </button>
            <button onClick={handleClear} className="buttonElem">
              Remover livros
            </button>
          </div>

          <ul className="ulList">
            {list?.map((item, index) => (
              <li key={index}>
                <div>Nome: {item.name}</div>
                <div>Autor: {item.autor}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="temp">
          <div>Temporizador</div>
          <div className="elemsButtons">
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={() => reset()}>Reset</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "72px" }}>
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
          </div>
        </div>
      </RoutinesDiv>
    );
  }
}
export default Routines;
