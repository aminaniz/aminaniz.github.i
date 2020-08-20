import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
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

function NavbarDonated() {
 
    
  
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
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
      
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
        
          
          <div className="navbar-translate">
            <NavbarBrand
              to="/index"
              tag={Link}
              id="navbar-brand"
            >
              BOOKXAPP
            </NavbarBrand>
           
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
                <NavLink to="/index" tag={Link}>
                 search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  Contact
                </NavLink>
              </NavItem>

              <NavItem>
              <UncontrolledDropdown nav>
               <DropdownToggle
                 caret
                 color="default"
                 href="#pablo"
                 nav
                 onClick={e => e.preventDefault()}
               >
                 <i className="now-ui-icons users_circle-08 mr-1"></i>
                 
               </DropdownToggle>

               <DropdownMenu>
                 <DropdownItem to="/index" tag={Link}>
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                   Credits
                 </DropdownItem>
                 <DropdownItem to="/reset" tag={Link}>
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                   Reset Password
                 </DropdownItem>
                 <DropdownItem to="/index" tag={Link}>
                  
                 
                   <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                   Sign out
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
                
              </NavItem>
              
             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarDonated;
