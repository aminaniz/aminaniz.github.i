import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Us</h2>
              <h5 className="description">
              "The aim of this project is to design a website to provide a platform to
               exchange books between users. The purpose of the website is a social platform
                where a community of book readers can be build. For a new user
                 there is provision  for registering and for existing user they can 
                 sign in .A user can add the details of the book he wish to donate as
                  well as request  books  from others. When a request is granted 
                  the user receives book  through  postal service.  Users  can search 
                  books  and view the  list of users with that book and request  for 
                  donation .To  ensure  quality  exchange  of  books, after  a 
                  book is received a user  can give review and rating about  the quality of the book. Before requesting a book owner which contain  the list of books he has accepted and donated. So, that the user can see the rating of the books and make sure the genuineness of the user .The decision to grant a request is the sole interest of the book owner .  After  viewing  the  profile of the user. He decides whether or not to accept the request. To avoid the situation of a single user continuously accepting  book, we have a feature of eligibility. It increases with donation and decreases with accepting .For a  first user eligibility is one. So that a first registered user can accept a book and to accept next book, he must donate a book."
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
