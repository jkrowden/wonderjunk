import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard";
import {Container, Row, Col} from "react-bootstrap";
import Action from "./Components/Action";

const firebase = require ("firebase/app");

var config = {
  projectId: "wonderjunk-79cff"
}
firebase.initializeApp(config);
var statuses = ["Welcome to wonder-junk!", "Chats", "Your spirit sprite:", "You're gonna scroll far, kid.", "Support" ];


class App extends React.Component {

  state = { page: 0, username:"", confirmed: false }

  switchPage = (page) => {
    this.setState({page: page, statusText: statuses[page]});
  }

  toggleConfirmed = (prop) => {
    console.log(this.state.confirmed);
    this.setState({confirmed: prop});
  }

  toggleAction = () => {

  }

  render(){

  return (
    <Container fluid className="App">
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

        <Dashboard page={this.state.page} toggleConfirmed={this.toggleConfirmed} toggleAction={this.toggleAction} statusText={this.state.statusText} username={this.state.username}/>

        <Action switch={this.switchPage} page={this.state.page}/>
      
    </Container>
  );
}}




export default App;
