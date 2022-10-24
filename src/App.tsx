import { Routes } from "./routes";
import { ApiProvider } from "./providers/Api";
import StatesProvider from "./providers/States";
import { GlobalStyled } from "./styles/GlobalSyled";



function App() {
  return (
    <div>
      <GlobalStyled />
      <ApiProvider>
        <StatesProvider>
          <Routes />
        </StatesProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
