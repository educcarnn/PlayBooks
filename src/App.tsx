import "../src/styles/App.css";
import { Routes } from "./routes";
import { ApiProvider } from "./providers/Api";
import StatesProvider from "./providers/States";

function App() {
  return (
    <div className="App-header">
      <ApiProvider>
        <StatesProvider>
          <Routes />
        </StatesProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
