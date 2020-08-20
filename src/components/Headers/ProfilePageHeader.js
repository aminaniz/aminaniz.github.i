import React, {  useState  , useEffect,useCallback,useMemo}from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();
  //let user=props.location.state.user;
  const [name, setName] = useState(props);
 // console.log(name);
  //console.log(name.user);
  const [data, setData] = useState([]);
 // const [loading, setLoading] = useState(true);
 React.useEffect(() => {
  let body = {
    user:props.user
    
  }
  
fetch("http://localhost:3000/details", {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },body:   JSON.stringify(body)
})

    .then(response => response.json())
    .then(data => {
      //console.log(data);
      setData(data);
      //console.log(data);
    }
     )});

   /* if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }*/
   
    

    
    
 
  return (
    <>
    
      <div
        className="page-header clear-filter page-header-small"
        filter-color="orange"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
 
        <br></br>
             
          <div className="photo-container">
            <img alt="shit" src={require("assets/img/64572.png")}></img>
          </div>

          <h2 className="title">{data && data.map(item=>(
<p>{item.fname} {item.lname}</p>))}</h2>
         
          <div className="content">
            
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;

