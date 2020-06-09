import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default class News extends React.Component {
  render() {
    return (
      this.props.hidden === false ? (
      <Container fluid className="news">
        <Row>
          <Col>
            <h5>News</h5>
          </Col>
        </Row>

        <Row >

          <Col id="current-news" xs={10} sm={8} md={8} lg={8} xl={8}>
            <p>
              Welcome to wonder-junk! This site is currently under construction
              if it's not already obvious. Please be patient while we develop the 
              requested features
            </p>
          </Col>

        </Row>
      </Container>) : (<div>Nothing to see here ;)</div>)
    )
 }}
