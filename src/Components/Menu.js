import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Redirect } from "react-router";
import { BsFilm } from "react-icons/bs";

function Menu({ items }) {
  const [redirectTo, setRedirect] = useState();

  return !redirectTo ? (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#/">
          <BsFilm />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {items.map((item) => {
            return (
              <Nav.Link href={`#/${item}`} >
                {item}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>
    </div>
  ) : (
    <Redirect to={redirectTo} />
  );
}

export default Menu;
