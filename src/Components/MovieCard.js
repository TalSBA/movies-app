import React from "react";
import { Card, Container } from "react-bootstrap";
import "../Styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    // <Card className="movieCard" border="warning">
    //   <Card.Img src={movie.poster} />
    //   <Card.Body>
    //     <Card.Title>{movie.movieName}</Card.Title>
    //     <Card.Text>{movie.plot}</Card.Text>
    //   </Card.Body>
    //   <Card.Body>
    //     <span className="bold-title">Run Time: </span>
    //     <cite title="Source Title">{movie.duration} </cite>
    //     <br />
    //     <span className="bold-title">Director: </span>{" "}
    //     <cite title="Source Title">{movie.director}</cite>
    //     <br />
    //     <span className="bold-title">Stars: </span>{" "}
    //     <cite title="Source Title">{movie.mainStars}</cite>
    //   </Card.Body>
    // </Card>
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={movie.poster} />
          <h1>{movie.movieName}</h1>
          <h4>By {movie.director}</h4>
          <span className="minutes">{movie.duration} min</span>
          {/* <p className="type">Action, Crime, Fantasy</p> */}
        </div>
        <div className="movie_desc">
          <p className="text">{movie.plot}</p>
        </div>
        <div className="movie_social">
          <ul>
            {movie.mainStars.map((star) => (
              <li>{star}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="blur_back"
        style={{ background: `url(${movie.poster})` }}
      ></div>
    </div>
  );
}

export default MovieCard;
