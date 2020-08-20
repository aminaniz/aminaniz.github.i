import React,{ useState } from "react";
import useForm from "react-hook-form";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import validate from './LoginFormValidationRules';

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Add(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const { handleSubmit, register, errors } = useForm();
  const [bookname, setBname] = useState("");
  const [author, setAuthor] = useState("");
  const [version, setVersion] = useState("");
  const [publisher, setPublisher] = useState("");
  const {
    values,
   
    handleChange,
    
  } = useForm(login, validate);
  
  function login() {
    console.log('No errors, submit callback called!');
  }
  console.log(props.location.state.name);
  const [state,setState]=useState({

    user:props.location.state.name
  });

 
  const onSubmit = values => {
    console.log(values);
    console.log(props.location.state.name);
    let body = {
      bookname:bookname,
      author:author,
      version:version,
      publisher:publisher,
      username:state.user
    }
    
    fetch("http://localhost:3000/donate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
   /* return props.history.push({
      pathname:"/profile-page",
    })*/
    };

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
    
      <div className="section section-contact-us text-center" data-background-color="black">
      <br/><br/><br/><br/>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <h2 className="title">Donate books</h2>
            <p className="description">Feel free to donate.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  
                  <Input
                    placeholder="Book Name..."
                    type="text"
                      value={bookname}
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setBname(e.target.value)}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                
                <InputGroup>
                <Input
                    placeholder="Author"
                    type="text"
                    
                      value={author}
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setAuthor(e.target.value)}
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                  </InputGroup>
                  <InputGroup>
                  <Input
                    placeholder="Book Edition"
                    ttype="text"
                    value={version}
                    ref={register({
                      required: 'Required',
                      
                    })}
                    onChange={e => setVersion(e.target.value)}
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                  </InputGroup>
                  <InputGroup>
                  <Input
                    placeholder="Publisher"
                    type="text"
                      value={publisher}
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setPublisher(e.target.value)}
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                  </InputGroup>
                
               
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    type="submit"
                    onSubmit={handleSubmit(onSubmit)}
                    size="lg"
                  >
                    Donate
                  </Button>
               
                </div>
              </Col>
            </Row>
          </Container>
          </form>
          <br/><br/><br/><br/><br/><br/>
        </div>
    </>
  );
}

export default Add;
