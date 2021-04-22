import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBox from "../Components/SearchBox";
import MovieModel from "../Model/MovieModel";
import MovieCard from "../Components/MovieCard";
import "../Styles/Movies.css";
import axios from "axios";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  //   const [movieDetails, setMovieDetails] = useState([]);
  //   const [movieCredits, setMovieCredits] = useState([]);

  let movieDetails;
  let movieCredits;

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
    if (newSearchText) {
      const searchMovieURL =
        "https://api.themoviedb.org/3/search/movie?api_key=396cbe7ed4649f8d87456e09437c030b&query=" +
        newSearchText;
      axios.get(searchMovieURL).then((response) => {
        setResults(response.data.results);
      });
    } else {
      setResults([]);
    }
  }

  function AddMovie(resultIndex) {
    const getDetailsURL = `https://api.themoviedb.org/3/movie/${results[resultIndex].id}?api_key=396cbe7ed4649f8d87456e09437c030b`;
    const getCreditsURL = `https://api.themoviedb.org/3/movie/${results[resultIndex].id}/credits?api_key=396cbe7ed4649f8d87456e09437c030b`;
    axios
      .get(getDetailsURL)
      .then((response) => {
        movieDetails = response.data;
        console.log(movieDetails);
      })
      .then(() => {
        axios.get(getCreditsURL).then((response) => {
          movieCredits = response.data;
          setMovies(
            movies.concat(
              new MovieModel(
                results[resultIndex].original_title,
                movieDetails.runtime,
                results[resultIndex].poster_path,
                movieCredits.crew[1].name,
                [
                  movieCredits.cast[0].name,
                  movieCredits.cast[1].name,
                  movieCredits.cast[2].name,
                ],
                movieDetails.overview
              )
            )
          );
          setSearchText("");
          setResults([]);
        });
      });
  }
  return (
    <div className="p-movies">
      <Container>
        <SearchBox
          placeholder="Add Movie..."
          searchText={searchText}
          onSearchChange={handleSearchChange}
          results={results.map((result) => result.original_title)}
          onResultSelected={AddMovie}
        />
        <Row>
          {movies.map((movie) => (
            <Col lg={6} md={7}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
