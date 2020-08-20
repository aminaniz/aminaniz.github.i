import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="3" md="1">
            <div class="card text-center" style={{
                      width: "15rem"
                    }}>
  <div class="card-body">
    <h4 class="card-title" size="40px">STEP 1</h4>
    <p class="card-text">JOIN US<br/>
    type in books you want to give away</p>
    
  </div>
</div>
</Col>
<Col 
                    > 
<div class="card text-center" style={{
                      width: "15rem" , left:"0.001rem"
                    }}>
  <div class="card-body" >
    <h4 class="card-title" size="40px">STEP 2</h4>
    <p class="card-text">RECIEVE REQUESTS <br/>
    from others for your books</p>
    
  </div>
</div>
</Col>
<Col style={{
                      left:"0.1rem"
                    }}> 
<div class="card text-center" style={{
                      width: "15rem" , left:"0.001rem"
                    }}>
  <div class="card-body" >
    <h4 class="card-title" size="40px">STEP 3</h4>
    <p class="card-text">SEND
    <br/> your books and earn credits</p>
    
  </div>
</div>
</Col>
<Col style={{
                      left:"0.1rem"
                    }}> 
<div class="card text-center" style={{
                      width: "15rem" , left:"0.001rem"
                    }}>
  <div class="card-body" >
    <h4 class="card-title" size="40px">STEP 4</h4>
    <p class="card-text">ASK <br/>
    for books <br/>from others</p>
    
  </div>
</div>
</Col>

              
            
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
