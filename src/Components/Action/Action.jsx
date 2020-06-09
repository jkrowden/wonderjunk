import React, { Component } from "react";
import "./Action.css";
import { ButtonGroup, Button, Row, Col } from "react-bootstrap";

var phantom = {
  display: "block",
  bottom: "0",
};

class Action extends Component {
  state = {
    buttons: [0, 1, 2, 3, 4]
  };

  doSomething() {}

  rightClick() {
    if (this.props.page < 4) {
      this.props.switch(this.props.page + 1);
      this.scrollToTop();
    }
  }

  leftClick() {
    if (this.props.page > 0) {
      this.props.switch(this.props.page - 1);
      this.scrollToTop();
    }
  }

  click(x) {
    console.log("button clicked--" + x);
    this.props.switch(x);
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Col id="action" style={phantom}>
        <ButtonGroup className="action-butttons">
          {this.state.buttons.map((e) => (
            <Button
              onClick={() => this.click(e)}
              key={"action-button-" + e}
              className="action-btn"
              text="text"
            >
              {e}
            </Button>
          ))}
        </ButtonGroup>

        <Row id="footer">
        <Col></Col>
          <Col>
            {this.props.page > 0 ? (
              <Button onClick={() => this.leftClick()}>Left</Button>
            ) : (
              <div></div>
            )}
          </Col>
          <Col>
            {this.props.page < 4 ? (
              <Button onClick={() => this.rightClick()}>Right</Button>
            ) : (
              <div></div>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Col>
    );
  }
}

export default Action;
