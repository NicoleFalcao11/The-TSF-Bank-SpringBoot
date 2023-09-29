import React from "react";
import NavBar from "./NavBar";
import {Row, Col,Container } from 'reactstrap';

function Header() {
    return(
        <div>
             <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>

        <Row>
          <Col>
            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                height: '15vh'
              }}
            >
              <div className="jumbotron-container">
                <Container>
                  <h1 className="jumbotron-heading">
                    Welcome To The TSF Bank
                  </h1>
                  <p className="jumbotron-text">
                    Transactions Made Easy
                  </p>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
        </div>
    );
}
export default Header