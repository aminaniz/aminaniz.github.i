/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container , NavLink } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            
          <NavLink to="/contact" tag={Link}>
                  Contact
                </NavLink>
            
          </ul>
        </nav>
        
      </Container>
    </footer>
  );
}

export default DarkFooter;
