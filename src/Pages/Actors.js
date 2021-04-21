import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import ActorCard from "../Components/ActorCard";
import "../Styles/Actors.css";

function Actors(props) {
  const [filterText, setFilterText] = useState("");
  const [sortProperty, setSortBy] = useState("firstName");
  const [actors, setActors] = useState([]);

  //we want to fetch the actors data from JSON only once the component is mounting
  useEffect(() => {
    axios.get("actors.json").then(response => {
      console.error(response);
    }).catch(error => {
        console.error(error);
    });
}, []);

  function sortActorsBy(e) {
    setSortBy(e.target.value);
  }
  function filterActors(e) {
    setFilterText(e.target.value);
  }
  const actorCards = actors
    .filter((actor) => {
      return (
        actor.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
        actor.lastName.toLowerCase().includes(filterText.toLowerCase())
      );
    })
    .sort((actor1, actor2) => {
      let actor1Prop = actor1[sortProperty];
      let actor2Prop = actor2[sortProperty];
      if (sortProperty == "age") {
        actor1Prop = actor1.Age();
        actor2Prop = actor2.Age();
      }
      if (actor2Prop > actor1Prop) {
        return -1;
      } else if (actor1Prop > actor2Prop) {
        return 1;
      } else {
        return 0;
      }
    })
    .map((actor) => (
      <ActorCard key={actor.id + actor.imdbLink} actor={actor} />
    ));
  return (
    <Container className="p-actors">
      <h1 className="title">Actors Gallery</h1>
      <InputGroup>
        <FormControl
          placeholder="Filter by First Name and Last Name"
          aria-label="Filter by First Name and Last Name"
          aria-describedby="basic-addon2"
          onChange={filterActors}
        />
      </InputGroup>
      <Form className="sortBy">
        <span>Sort By:</span>
        <div key={"inline-radio"} className="mb-3">
          <Form.Check
            className="radioOpt"
            name="radio"
            type="radio"
            value="firstName"
            label="First Name"
            onChange={sortActorsBy}
          />
          <Form.Check
            className="radioOpt"
            name="radio"
            type="radio"
            value="lastName"
            label="Last Name"
            onChange={sortActorsBy}
          />
          <Form.Check
            className="radioOpt"
            name="radio"
            type="radio"
            value="age"
            label="Age"
            onChange={sortActorsBy}
          />
        </div>
      </Form>
      <Row>{actorCards && actorCards.length > 0 ? actorCards : ""}</Row>
    </Container>
  );
}

export default Actors;
