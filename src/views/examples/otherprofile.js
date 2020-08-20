import React,{ useState } from "react";


// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import Navbar from "components/Navbars/OtherNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DarkFooter from "components/Footers/DarkFooter";

function OtherProfile(props) {
  console.log(props.location.state.user);
  let user=props.location.state.user;
  console.log(user); 

  const [state,setState]=useState({

    user:props.location.state.user
  });
  console.log(state.user);
  console.log(state);
  const [pills, setPills] = React.useState("2");

  React.useEffect(() => {
    
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
    document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  return (
    <>
      
      <div className="wrapper">
        <ProfilePageHeader {...state} />
        <div className="section">
          <Container>
            
            
            
            <center>
            <Button className="btn-round" color="info" type="button"  id="tp1" size="lg" to="/donated" tag={Link}>
                Donated Books
             
              
                
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tp1"
              >
                Books you have donated
              </UncontrolledTooltip><br/>
              <Button className="btn-round" color="info" type="button"size="lg"id="tp2" to="/acceptedbooks" tag={Link}>
                Accepted Books
              </Button><UncontrolledTooltip
                delay={0}
                placement="left"
                target="tp2"
              >
                Books you have accepted
              </UncontrolledTooltip><br/>
              <Button className="btn-round" color="info" id="tp3" type="button" size="lg" to="/bookshelf" tag={Link}>
                Bookshelf
              </Button><UncontrolledTooltip
                delay={0}
                placement="left"
                target="tp3"
              >
                books you wish to donate
              </UncontrolledTooltip><br/>
              
              </center>
           
          </Container>
        </div>
        <DarkFooter />
      </div>
     
    </>
  );
}

export default OtherProfile;
//export {user};
