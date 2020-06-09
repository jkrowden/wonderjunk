import React, { Component } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Interesting title here", read: false };
  }
  render() {
    return (
      <div className="chatListItem">
        <Row>
          <Col>
            <h6>
              {this.state.title}
            </h6>
          </Col>
          <Col><Badge variant="secondary">New</Badge></Col>
          <Col>30 mins</Col>
        </Row>
      </div>
    );
  }
}

export default Chat;
