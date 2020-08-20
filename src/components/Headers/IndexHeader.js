/*eslint-disable*/
import React, { useState } from 'react';

// reactstrap components
import { Container } from "reactstrap";
// core components
const jsondata='';
function IndexHeader() {
  const [data, setData] = useState();
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/s2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            
            <h1 className="h1-seo"color="black" >BOOKXAP</h1>
            <h3  onClick={() => {debugger;
                fetch("http://localhost:3000/getposts", {
                  method: 'GET',
                  headers:{
                    'X-Requested-With': 'XMLHttpRequest'}
                  })
                  .then(response => response.json())
                  .then(jsondata => {
                    console.log(jsondata);
                    setData(jsondata);
                    console.log(data);}
                   )
              }}>Sharing is power</h3>


          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
