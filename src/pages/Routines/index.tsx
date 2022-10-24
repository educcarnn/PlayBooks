import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import { RoutinesDiv } from "./style";

function Routines() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({autoStart: false});
  const handleClear = () => {};
  let history = useHistory();
  const handleHome = () => {
    history.push("/contents");
  };
  interface nameProps {
    name: string;
    autor: string;
  }
  const [nameBook, setNameBook] = useState();

  return (
    <RoutinesDiv>
      <div className="play" onClick={handleHome}>
        Play Book
      </div>
      <div>
        Liste as suas leituras e temporize o seu tempo, para melhorar seu foco e
        concentração
      </div>
      <div>
        <input type="text" placeholder="Escreva o nome do seu livro" />
        <button>Adicionar livro</button>
        <button>Digite o autor do livro</button>
        <button onClick={handleClear}>Excluir Livro</button>
      </div>

      <div>
        <div>Temporizador</div>
        <div style={{ textAlign: "center" }}>
          <h1>react-timer-hook</h1>
          <p>Stopwatch Demo</p>
          <div style={{ fontSize: "100px" }}>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
            <span>{seconds}</span>
          </div>
          <p>{isRunning ? "Running" : "Not running"}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          {/* <button onClick={reset}>Reset</button>  */}
        </div>
      </div>
    </RoutinesDiv>
  );
}
export default Routines;
