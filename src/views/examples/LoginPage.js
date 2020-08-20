import React ,{ useState }  from "react";
import { withRouter,Link } from "react-router-dom";
import useForm from "react-hook-form";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
// core components
import NavbarLogin from "components/Navbars/navbarlogin";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { equal } from "assert";
import AlertExample from "views/examples/alert.js"
import { Alert } from 'reactstrap';

function LoginPage(props) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    
    let body = {
      username:username,
      password:password,
    }


    fetch("http://localhost:3000/login", {
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
        
        return <AlertExample />
          
          
         
         // <Alert color="info" isOpen={visible} toggle={onDismiss}>
           // Invalid Credentials
          //</Alert>
        
      }
      else{
        console.log(data.user);
        let user=data.user;
        return props.history.push({
          pathname:"/profile-page",
          state:{
           user:data.user
          }})
      
    }
    });
  }

   const [firstFocus, setFirstFocus] = React.useState(false);
   const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavbarLogin />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/book5.jpg") + ")"
          }}
        ></div>
        <div className="content">
         
          <Container>
            <Col className="ml-auto mr-auto" md="5">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/bookxapp.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
    <form onSubmit={handleSubmit(onSubmit)}>
  
            <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username"
                        type="text"
                        //value={user}
                       // onChange={() => setUser(user)}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        name="user"
        value={username}
        
        onChange={e => setName(e.target.value)}
        ref={register({
          required: 'Required', })}
          
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                       
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        value={password}
        
        ref={register({
          required: 'Required',
        })}
     
                      ></Input>
                    </InputGroup>  </form>
            
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      
                      className="btn-round"
                      color="info"
                      type="submit"
                      size="lg"
                    >
              login
                    </Button>
                    <div className="pull-left">
                      <h6>
                      <Button className="btn-link" color="white" to="/register" tag={Link}>
                      Create Account
              </Button>
                         
                        
                      </h6>
                    </div>

                  </CardFooter>
                </Form>
              </Card>
            </Col>
            
          </Container>
          
        </div>
        
        <TransparentFooter />
            
      </div>
    </>
  );

};

export default withRouter(LoginPage);

