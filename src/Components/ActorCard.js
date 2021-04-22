import React from "react";
import { Card } from "react-bootstrap";

function ActorCard({ actor }) {
  return (
    <Card className="actorCard" border="warning">
      <Card.Img variant="top" src={actor.image} />
      <Card.Body>
        <Card.Title>
          <a href={actor.imdbLink} target="_blank">
            {actor.firstName + " " + actor.lastName}
          </a>
        </Card.Title>
        <Card.Text>Age: {actor.Age()}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ActorCard;
