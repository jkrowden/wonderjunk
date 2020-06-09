import React from "react";
import Navbar from "./Navbar";
import Friends from "./Friends";
import Player from "./Player";
import News from "./News";
import Chats from "./Chats";
import Account from "./Account";
import Support from "./Support";

import "./Dashboard.css";
import { Row, Col, Container } from "react-bootstrap";

class Dashboard extends React.Component {
  state = {
    hidden: false,
    confirmed: false,
    layers: 0,
  };

  toggleConfirmed = (prop) => {
    this.setState({ confirmed: prop });
  };

  setLayers = (prop) => {
    this.setState({ layers: prop });
  };

  getLayers = () => {
    return this.state.layers;
  };

  render() {
    switch (this.props.page) {
      // Main page 0
      case 0:
        return (
          <div id="dashboard">
            {/* Navbar */}
            <Row>
              <Col>
                <Navbar
                  username={this.props.username}
                  statusText={this.props.statusText}
                />
              </Col>
            </Row>

            <Row className="spacer-lg"></Row>

            {/* Friends/Player */}
            <Row>
              <Col></Col>
              <Col xs={12} sm={5} md={4} lg={4} xl={3}>
                <Friends />
              </Col>
              <Col xs={12} sm={5} md={6} lg={4} xl={3}>
                <Player />
              </Col>
              <Col></Col>
            </Row>
            <Row className="spacer-lg"></Row>
            {/* News */}
            <Row>
              <Col></Col>
              <Col xs={10} sm={5} md={6} lg={4} xl={4}>
                <News hidden={this.state.hidden} />
              </Col>
              <Col></Col>
            </Row>
          </div>
        );
      // Chats page 1
      case 1:
        return (
          <div id="dashboard">
            <Row>
              <Col>
                <Navbar
                  username={this.props.username}
                  statusText={this.props.statusText}
                />
              </Col>
            </Row>
            <Row className="spacer-sm"></Row>
            <Row>
              <Col></Col>
              <Col xs={12} sm={5} md={4} lg={4} xl={3}>
                <Chats />
              </Col>
              <Col></Col>
            </Row>
          </div>
        );
      // Your stuff/things to do page 2
      case 2:
        return (
          <div id="dashboard">
            <Row>
              <Col>
                <Navbar
                  username={this.props.username}
                  statusText={this.props.statusText}
                />
              </Col>
            </Row>
            <Row className="spacer-sm"></Row>
            <Row>
              <Col>Stay Sexy</Col>
            </Row>
          </div>
        );

      //Account page 3
      case 3:
        return (
          <div id="dashboard">
            <Row>
              <Col>
                <Navbar
                  username={this.props.username}
                  statusText={this.props.statusText}
                />
              </Col>
            </Row>
            <Row className="spacer-sm"></Row>
            <Row>
              <Col>
                <Account
                  confirmed={this.state.confirmed}
                  toggleConfirmed={this.toggleConfirmed}
                />
              </Col>
            </Row>
          </div>
        );
      // Support
      case 4:
        return (
          <div id="dashboard">
            <Row>
              <Col>
                <Navbar
                  username={this.props.username}
                  statusText={this.props.statusText}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Support />
              </Col>
            </Row>
          </div>
        );

      default:
        return (
          <div id="dashboard">
            <Row>
              <Col>Stay Sexy</Col>
            </Row>
          </div>
        );
    }
  }
}

export default Dashboard;
