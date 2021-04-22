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
  const [results, setResults] = useState([])
  //"Result1", "Result2", "Result3"

  function handleSearchChange(newSearchText){
    setSearchText(newSearchText);
    if(newSearchText){
        setResults(["Result1", "Result2", "Result3"]);
    }
    else{
        setResults([]);
    }
  }
  function AddMovie(resultIndex){
    setMovies(movies.concat(new MovieModel(results[resultIndex])));
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
          results={results}
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
