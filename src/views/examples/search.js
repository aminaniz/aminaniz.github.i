import React ,{ useState }from "react";
import { Link } from 'react-router-dom';

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
import SearchHeader from "components/Headers/searchheader";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import useForm from "react-hook-form";
import OtherProfile from "views/examples/otherprofile";

function Search(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [iconPills, setIconPills] = React.useState("1");
  const { handleSubmit, register, errors } = useForm();
  const [pills, setPills] = React.useState("1");
  const [data, setData] = useState("");
  const [owner, setOwner] = useState("");
  const [bookid, setId] = useState("");
  const [state,setState]=useState({
    id:props.location.state.id
  });
  
  const onOwner = values => {
    
      
    return props.history.push({
      pathname:"/otherprofile",
      state:{
       user:owner
      }})
  

}
  const onSubmit = values => {
    console.log(values);
   
       // console.log(bookid);
  
    //console.log(body);
    let body = {
        bookid:bookid,
        owner:owner,
        user:props.location.state.user
       }
    fetch("http://localhost:3000/request", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
       return;
        

     
 
     };
 // React.useEffect(() => {
  
     // return () => {
       //   cleanup
      //};
  //});//, [input]);
  //ComponentDidMount(()=>{
    

  //})
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
          console.log(data);
          setData(data);
          {data && data.map(item=>(
            setOwner(item.username),
            setId(item.bookid) 
          //bookid=item.bookid
             ))}
        //  console.log(data.bookname);
      
    }
         )

       
         
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
        <SearchHeader />
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
                     Title:<br/>{data && data.map(item=>(
<p>{item.bookname}</p>))}
                     Author:<br/>{data && data.map(item=>(
<p>{item.author}</p>))}
                     edition:<br/>{data && data.map(item=>(
<p>{item.version}</p>))}
                     publisher:<br/>{data && data.map(item=>(
<p>{item.publisher}</p>))}

Owner:<br/><Link to="/otherprofile"  onClick={handleSubmit(onOwner)}>{data && data.map(item=>(
<u>{item.username}</u>))}</Link>
</h4>

                       
                     
                      </p>
                      <Button color="default" 
                      type="button"
                      onClick={handleSubmit(onSubmit)}>
                    Request
                  </Button>
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

export default Search;
