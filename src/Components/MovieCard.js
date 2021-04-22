import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card className="actorCard">
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>
          {/* <a href={movie.imdbLink} target="_blank">
            {movie.firstName + " " + movie.lastName}
          </a> */}
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
