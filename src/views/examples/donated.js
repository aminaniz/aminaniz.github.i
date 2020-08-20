import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Col
} from "reactstrap";

// core components
import NavbarDonated from "components/Navbars/navbardonated";
import DonatedHeader from "components/Headers/donatedheader";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Donated() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavbarDonated />
      <div className="wrapper">
        <DonatedHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10" xl="4">
              <p className="category">books:</p>
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
                   
                    
                   
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center" color="blue"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p><h4>
                     Title:<br/>
                     Author:<br/>
                     edition:<br/>
                     publisher:<br/></h4>
                       
                     
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
       
      </div>
    </>
  );
}

export default Donated;
