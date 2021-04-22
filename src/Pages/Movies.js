import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBox from "../Components/SearchBox";
import MovieModel from "../Model/MovieModel";
import MovieCard from "../Components/MovieCard";
import "../Styles/Movies.css";

function Movies(props) {
  const [movies, setMovies] = useState([
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
    new MovieModel("test", "90", "test", "test", "test"),
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResults] = useState(["Result1", "Result2", "Result3"])
  return (
    <div className="p-movies">
      <Container>
        <SearchBox
          placeholder="Add Movie..."
          searchText={searchText}
          onSearchChange={(newSearchText) => setSearchText(newSearchText)}
          results={searchResult}
        />
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Container>
    </div>
  );
}

export default Movies;
