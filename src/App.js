import "./Styles/App.css";
import Actors from "./Pages/Actors";
import Movies from "./Pages/Movies";

import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path="/actors">
            <Actors />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
        </Switch>
      </HashRouter>
    </Container>
  );
}

export default App;
