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
    const promise1 = axios.get(getDetailsURL);
    const promise2 = axios.get(getCreditsURL);

    Promise.all([promise1, promise2]).then((responses) => {
      const details = responses[0].data;
      const credits = responses[1].data;

      setMovies(
        movies.concat(
          new MovieModel(
            results[resultIndex].original_title,
            details.runtime,
            results[resultIndex].poster_path,
            credits.crew[1].name,
            [credits.cast[0].name, credits.cast[1].name, credits.cast[2].name],
            details.overview
          )
        )
      );
      setSearchText("");
      setResults([]);
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
          {movies.map((movie, index) => (
            <Col key={index} lg={6} md={7}>
              <MovieCard key={index} movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
