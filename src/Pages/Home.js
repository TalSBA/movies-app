import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles/Home.css";

function Home(props) {
  return (
    <div className="p-home">
      <h1>Actors & Movies Gallery</h1>
      <div className="home-image"></div>
    </div>
  );
}

export default Home;
