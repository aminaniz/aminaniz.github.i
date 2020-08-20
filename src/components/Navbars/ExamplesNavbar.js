import React ,{ useState }from "react";
import { Link,withRouter } from "react-router-dom";
import useForm from "react-hook-form";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  ModalBody,
  Modal,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar(props) {
 
    
  const [modal1, setModal1] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [searchvalue, setValue] = useState("");
  const [details, setData] = useState("");
  const [bdetails, setBdata] = useState("");
  const [status, setStatus] = useState("");
  const [pid, setPid] = useState("");
  const [user, setUser] = useState("");
  const { handleSubmit, register, errors } = useForm();
  const [note,setNote]=React.useState("");
  //console.log(props.user);
  const onOwner = values => {
    
      
    return props.history.push({
      pathname:"/otherprofile",
      state:{
       user:user
      }})
  

}

const onAccept = values => {
    
      
  let body = {
    pid:pid
  }
  
fetch("http://localhost:3000/accept", {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },body:   JSON.stringify(body)
})

    .then(response => response.json())
    .then(details => {
      console.log(details);
      setData(details);
   
    //  console.log(data.bookname);
   
}
     )

}

const onDecline = values => {
    
      
  let body = {
    pid:pid
  }
  
fetch("http://localhost:3000/decline", {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },body:   JSON.stringify(body)
})

    .then(response => response.json())
    .then(details => {
      console.log(details);
      setData(details);
   
    //  console.log(data.bookname);
   
}
     )


}
  const onSubmit = values => {
    console.log(values);
    
   
    return props.history.push({
      pathname:"/add",
      state:{
       name:props.user
      }})}

      const onGet = values => {
        let body = {
          id:props.location.state.id
        }
        
      fetch("http://localhost:3000/getbook", {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },body:   JSON.stringify(body)
      })
     
          .then(response => response.json())
          .then(details => {
            console.log(details);
            setData(details);
         
          //  console.log(data.bookname);
         
      }
           )
  }

      const onNote = values => {
        console.log(values);
        
        let body = {
          name:props.user
        }
      
        fetch("http://localhost:3000/process", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:   JSON.stringify(body)
        })
        .then(response => response.json())
        .then(note => {
          console.log(note);
          console.log(note.pid);
          setPid(note.pid);
          setStatus(note.status);
          setUser(note.user);
          let body = {
            id:note.pid
          }
          
        fetch("http://localhost:3000/getbook", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },body:   JSON.stringify(body)
        })
       
            .then(response => response.json())
            .then(bdetails => {
              console.log(bdetails);
              setBdata(bdetails);
           
            //  console.log(data.bookname);
           
        }
             )
          //console.log(note.id);
          
         /* if(data.error)
          {
            return alert("Invalid");
          }
          else{
            console.log(data.id);
            
            return props.history.push({
              pathname:"/search-page",
              state:{
                id:data.id,
                user:props.user
              }})
            }*/
          });
        }
      const onSearch = values => {
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
                id:data.id,
                user:props.user
              }})
            }
          });
        }
  React.useEffect(() => {
    let body = {
        id:props.location.state.id
      }
      
    fetch("http://localhost:3000/getbook", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },body:   JSON.stringify(body)
    })
   
        .then(response => response.json())
        .then(data => {
          //console.log(data);
          setData(data);
       
        //  console.log(data.bookname);
       
    }
         )
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
        
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            
          </UncontrolledDropdown>
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
            
               
               <UncontrolledDropdown nav>
               <DropdownToggle
                 caret
                 color="default"
                 href="#pablo"
                 nav
                 onClick={handleSubmit(onNote)}
               >
                 <i className="now-ui-icons users_circle-08 mr-1"></i>
                 
               </DropdownToggle>

               <DropdownMenu>
               <DropdownItem onClick={() => setModal1(true)}
                //tag={Link}
               >
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                   Notification 1
                 </DropdownItem>
                 <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  
                  <h4 className="title title-up">{status}</h4>
                </div>
                <ModalBody>
                  <p>
                  Book Name : {bdetails && bdetails.map(item=>(
<p>{item.bookname} </p>))}
                  </p>
                  <p>
                  User <Link  to="/otherprofile"  onClick={handleSubmit(onOwner)}>{user}</Link >
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" 
                  type="submit"
                  onClick={handleSubmit(onAccept)}>
                    Accept
                  </Button>
                  <Button
                    color="danger"
                    type="submit"
                    onClick={handleSubmit(onDecline)}
                    //onClick={() => setModal1(false)}
                  >
                    Decline
                  </Button>
                </div>
              </Modal>
                 <DropdownItem to="/index" tag={Link}>
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                   Notification 2
                                    </DropdownItem>
                 <DropdownItem to="/reset" tag={Link}>
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                   Notification 3
                 </DropdownItem>
                 <DropdownItem to="/index" tag={Link}>
                  
                 
                   <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  Notification 4
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
             </NavItem>
             <NavItem>
                <NavLink 
                onClick={handleSubmit(onSubmit)}
               to="/add" tag={Link}
               >
                 Add books
                </NavLink>
              </NavItem>
             
              <NavItem>
  
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"
                    onChange={e => setValue(e.target.value)} 
                    value={searchvalue}
                    />
                    <NavLink  
                    onClick={handleSubmit(onSearch)}
                    to="/search-page" tag={Link}
                     >
               <MDBIcon icon="search" />
                </NavLink>
                    </NavItem>
              <NavItem>
                
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
                  {props.user}
                </DropdownToggle>

                <DropdownMenu>
                <DropdownItem  to="/editprofile" tag={Link}>
                    <i className="now-ui-icons users_circle-08 mr-1"></i>
                    Edit Profile
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Credits-{props.credit}
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

export default withRouter(ExamplesNavbar);
