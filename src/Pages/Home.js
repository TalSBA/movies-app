import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "../Styles/Home.css";
import movie1 from "../Styles/movies/movie1.jpg";
import movie2 from "../Styles/movies/movie2.jpg";
import movie3 from "../Styles/movies/movie3.jpg";
import movie4 from "../Styles/movies/movie4.jpg";

function Home(props) {
  const movies = [movie1, movie2, movie3, movie4];

  return (
    <div className="p-home">
      <h1>Actors & Movies Gallery</h1>
      {/* <div className="home-image"></div> */}
      <Carousel>
        {movies.map((movie) => {
          return (
            <Carousel.Item interval={3000}>
              <img className="d-block" src={movie} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;
