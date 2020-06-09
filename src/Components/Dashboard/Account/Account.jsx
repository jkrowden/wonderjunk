import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

class Account extends React.Component {
  state = { page: 0, location: "here" };

  submit(event) {
    event.preventDefault();
    console.log(this.props.confirmed);
    if (
      this.state.formSecret &&
      this.state.formSecret.toUpperCase() === "DANDELION" &&
      this.props.confirmed === false
    ) {
      alert("You have the passcode, now wait for implementation ;)");
      this.props.toggleConfirmed(true);
    } else if (this.props.confirmed === true) {
      alert(
        this.state.formName +
          ", aka " +
          this.state.formUsername +
          ". Emaile:" +
          this.state.formEmail
      );
    } else {
      alert("That is definitely NOT the passcode");
    }
  }

  handleOnChange(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value }, null);
  }

  render() {
    if (this.props.username) {
      return <Container fluid id="account"></Container>;
    } else {
      return (
        <Router>
          <Container fluid id="account">
            <Switch>
              <Route path="/signin">Sign in</Route>
              <Route path="/signup">
                <Row>
                  <Col id="signup-col" xs={12} sm={12} md={6} lg={6} xl={4}>
                    <Form id="signup">
                      <Form.Group
                        hidden={!this.props.confirmed}
                        controlId="formName"
                      >
                        <Form.Label>Real Name</Form.Label>
                        <Form.Control
                          onChange={this.handleOnChange.bind(this)}
                          placeholder="Enter name"
                        />
                      </Form.Group>
                      <Form.Group
                        hidden={!this.props.confirmed}
                        controlId="formUsername"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          onChange={this.handleOnChange.bind(this)}
                          placeholder="Enter username"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                      <Form.Group
                        hidden={!this.props.confirmed}
                        controlId="formEmail"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          hidden={!this.props.confirmed}
                          onChange={this.handleOnChange.bind(this)}
                          type="email"
                          placeholder="Enter email"
                        />
                        <Form.Group
                          hidden={!this.props.confirmed}
                          controlId="formPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            hidden={!this.props.confirmed}
                            onChange={this.handleOnChange.bind(this)}
                            type="password"
                            placeholder="Enter password"
                          />
                        </Form.Group>

                        <Form.Group
                          hidden={!this.props.confirmed}
                          controlId="formPasswordAgain"
                        >
                          <Form.Label>Password AGAIN!</Form.Label>
                          <Form.Control
                            hidden={!this.props.confirmed}
                            onChange={this.handleOnChange.bind(this)}
                            type="password"
                            placeholder="Enter password.. AGAIN"
                          />
                        </Form.Group>
                        <Form.Text className="text-muted">
                          We'll never share any of this with anyone
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        hidden={this.props.confirmed}
                        controlId="formSecret"
                      >
                        <Form.Label>Secret Passphrase</Form.Label>
                        <Form.Control
                          onChange={this.handleOnChange.bind(this)}
                          placeholder="Enter passphrase"
                        />
                        <Form.Text className="text-muted">
                          This should be given to you by word of mouth.
                        </Form.Text>
                      </Form.Group>

                      <Button type="submit" onClick={this.submit.bind(this)}>
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Route>
              <Route path="/">
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button>
                      <Link to="/signin" id="signin">
                        Sign In
                      </Link>
                    </Button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Link to="/signup" id="signup">
                      Sign Up
                    </Link>
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Container>
        </Router>
      );
    }
  }
}

export default Account;
