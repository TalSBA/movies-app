import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBox from '../Components/SearchBox';
import MovieModel from '../Model/MovieModel';
import MovieCard from '../Components/MovieCard';
import "../Styles/Movies.css";

function Movies(props) {
    const[movies, setMovies] = useState([
        new MovieModel("test", "90", "test", "test", "test"),
        new MovieModel("test", "90", "test", "test", "test"),
        new MovieModel("test", "90", "test", "test", "test"),
        new MovieModel("test", "90", "test", "test", "test")
    ])
    const [searchText, setSearchText] = useState("");
    return (
        <div className="p-movies">
            <Container>
                <SearchBox placeholder="Add Movie..." searchText={searchText}/>
                {movies.map(movie => <MovieCard movie={movie}/>)}
            </Container>
        </div>
    );
}

export default Movies;