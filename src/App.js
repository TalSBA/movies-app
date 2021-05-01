import "./Styles/App.css";
import Actors from "./Pages/Actors";
import Movies from "./Pages/Movies";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <Menu items={["Home", "Actors", "Movies"]} />
      <HashRouter>
        <Switch>
          <Route exact path="/actors">
            <Actors />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path={["/", "/home"]}>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
