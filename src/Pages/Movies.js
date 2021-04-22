import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBox from '../Components/SearchBox';
import "../Styles/Movies.css";

function Movies(props) {
    return (
        <div className="p-movies">
            <Container>
                <SearchBox/>
                
            </Container>
        </div>
    );
}

export default Movies;