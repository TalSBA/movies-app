import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBox from "../Components/SearchBox";
import MovieModel from "../Model/MovieModel";
import MovieCard from "../Components/MovieCard";
import "../Styles/Movies.css";
import axios from "axios";

function Movies(props) {
  const [movies, setMovies] = useState([
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
  ]);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
    if (newSearchText) {
      const searchURL =
        "https://api.themoviedb.org/3/search/movie?api_key=396cbe7ed4649f8d87456e09437c030b&query=" +
        newSearchText;
      axios.get(searchURL).then((response) => {
        setResults(response.data.results);
      });
    } else {
      setResults([]);
    }
  }
  function AddMovie(resultIndex) {
    setMovies(movies.concat(new MovieModel(results[resultIndex].original_title)));
    setSearchText("");
    setResults([]);
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
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Container>
    </div>
  );
}

export default Movies;
