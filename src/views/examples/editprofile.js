import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
import validate from '../index-sections/LoginFormValidationRules.js';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// core components

function EditProfile() {
  const { handleSubmit, register, errors } = useForm();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    values,
   
    handleChange,
    
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }
  const onSubmit = values => {
    console.log(values);
    let body = {
      fname:fname,
      lname:lname,
      email:email,
      address:address,
      username:username,
      password:password,
    }
    
    fetch("http://localhost:3000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
       
        

     
 
     };
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/book3.jpg") + ")",
          backgroundSize: "cover",
         backgroundPosition: "top center",
          minHeight: "700px"
        }}
      ><ExamplesNavbar/>
        
        <Container >
          <Row md="30">
            <Card className="card-signup" data-background-color="black">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h2">
                   EDIT
                  </CardTitle>
                  <div className="social-line">
                   
                    
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      value={fname}
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setFname(e.target.value)}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      value={lname}
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setLname(e.target.value)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      
                      placeholder="Email..."
                      value={email}
                      type="email"
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control"
    value={address}
      ref={register({
        required: 'Required',
        
      })}
     onChange={e => setAddress(e.target.value)} 
     id="exampleFormControlTextarea1" 
     rows="3"></textarea>
  </div>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    
                    <Input
                      
                      placeholder="Username"
                      value={username}
                      type="text"
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setUsername(e.target.value)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      value={password}
                      type="text"
                      ref={register({
                        required: 'Required',
                        
                      })}
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  
                </CardBody>
                <CardFooter className="text-center">
              
                  <Button
                    className="btn-neutral btn-round"
                    onSubmit={handleSubmit(onSubmit)}
                    color="info"
                    to="/profile-page"
                    tag={Link}
                    type="submit"
                    size="lg"
                  >  <button type="submit">Submit</button>
                    SAVE
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          
        </Container>
       
      </div>
    </>
  );
}

export default EditProfile;
