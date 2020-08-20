import React,{ useState } from "react";
import { Link ,withRouter } from "react-router-dom";
import useForm from "react-hook-form";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import Search from "views/index-sections/search";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function IndexNavbar(props) {
  const onSubmit = values => {
    console.log(values);
    
    let body = {
      searchvalue:searchvalue
    }
  
    fetch("http://localhost:3000/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:   JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.error)
      {
        return alert("Invalid");
      }
      else{
        console.log(data.id);
        
        return props.history.push({
          pathname:"/search-page",
          state:{
            id:data.id
          }})
        }
      });
    }
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [searchvalue, setValue] = useState("");
  const { handleSubmit, register, errors } = useForm();
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info" height="">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              target="_blank"
              id="navbar-brand"
            >
              BOOKXAP
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              WORLDS LARGEST BOOK EXCHANGE WEBSITE
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
              <Button
                  className="nav-link btn-neutral"
                  color="info"
                  to="/login-page"
                  id="login"
                  //onClick={e => e.preventDefault()}
                  tag={Link}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>LOGIN</p>
                </Button><br/>
                
              </NavItem>
              
             
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  to="/register"
                  id="register"
                  //onClick={e => e.preventDefault()}
                  tag={Link}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>REGISTER</p>
                </Button>
                
                <UncontrolledTooltip target="#register">
                  JOIN US!!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                
              </NavItem>
              <NavItem>
               
                
              </NavItem>
              <NavItem>
               
               
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(IndexNavbar);
