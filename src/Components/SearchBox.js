import React from 'react';
import { Form } from 'react-bootstrap';
import "../Styles/SearchBox.css";

function SearchBox({placeholder}) {
    return (
        <div className="c-searchBox">
            <Form.Control type="text" placeholder={placeholder} />
        </div>
    );
}

export default SearchBox;