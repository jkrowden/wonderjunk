import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";


class Friends extends React.Component {
  state = {};
  clickHere = () => {
    alert("Do you know the secret passphrase? Head over to page 3 if you do!");
  };

  render() {
    return (
      <Container fluid id="friends">
        <Row>
          <Col>
            <h4>Top Friends</h4>
          </Col>
        </Row>

        <Row>
          <Col>Cool people wanted</Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={this.clickHere}>Click Here!</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Friends;
