import React from "react";
import { Row, Col, Container } from "react-bootstrap";

class Player extends React.Component {
  state = {};
  render() {
    return (
      <Container fluid id="player">
        <div>
          <Row>
            <Col>
              <h5>guest(demo)</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://picsum.photos/125" alt="you" />
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Player;
