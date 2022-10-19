import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Contents } from "../pages/Contents";
import { Home } from "../pages/Home";

export const Routes = () => {

  

  return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contents">
          <Contents />
        </Route>
        <Route exact path="*">
          <div>
            <div>Página não encontrada</div>
          </div>
        </Route>
      </Switch>
  </BrowserRouter>
  )
   

}