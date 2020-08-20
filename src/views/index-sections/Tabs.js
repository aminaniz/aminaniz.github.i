import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">LEARN MORE</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                       1
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        2
                      </NavLink>
                    </NavItem>
                   
                   
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center" color="blue"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      BOOKXAPP is a community for exchanging used books.
                      BOOKXAPP lets you give away books you no longer need in 
                      exchange for books you really want.<br/>
                      <mark>WHY CREATE THIS?:</mark> if you're passionate about books, you know how 
                      emotionally difficult it is to throw a book away, even if you will 
                      never read it again. You want to find a good home for your books, 
                      have them find someone who appreciates them. Also, you may be interested
                       in trying a lot of books out, and keep the ones that are great. It's a 
                       great crime to have a book disappear, out of print, for none to read. 
                       BOOKXAPP keeps books in circulation, and finds new readers for them.
                       
                     
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      <mark>Give & receive:</mark> Every time you give someone a book,
                       you earn a credit and can get any book you want from anyone else at BOOKXAPP.
                        Once you've read a book, you can keep it forever or put it back into BOOKXAPP
                         for someone else, as you wish.<br/>

                      <mark>No cost:</mark> there is no cost to join or 
                      use this web site: your only cost is sending your books to others.<br/>
                      <mark>World wide:</mark> You can request books from other countries, 
                      in other languages.


                      </p>
                    </TabPane>
                    
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
