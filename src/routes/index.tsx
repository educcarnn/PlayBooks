
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ImportanceReading from "../pages/ArticlesPages/ImportanceReading";
import LessReaders from "../pages/ArticlesPages/LessReaders";
import { Contents } from "../pages/Contents";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contents">
          <Contents />
        </Route>
        <Route path="/importancia-da-leitura">
          <ImportanceReading />
        </Route>
        <Route path="/menos-leitores">
          <LessReaders/>
        </Route>
        <Route path="*">
          <div>
            <div>Página não encontrada</div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
