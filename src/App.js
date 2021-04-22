import "./Styles/App.css";
import Actors from "./Pages/Actors";
import Movies from "./Pages/Movies";

import { Container } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Actors />
      <Movies />
    </Container>
  );
}

export default App;
