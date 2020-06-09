import React from 'react';
import {Container} from 'react-bootstrap';
import Chat from "./Chat";

class Chats extends React.Component {
    state = {  }
    chatSessions = [0, 1, 2, 3, 4];
    render() { 
        return ( <Container fluid id="chats">
            {this.chatSessions.map( i => (
                <Chat key={this.chatSessions[i]}/>
            ))}
        </Container> );
    }
}
 
export default Chats;