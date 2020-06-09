import React from "react";
import { Container } from "react-bootstrap";

class Navbar extends React.Component {
    state = { logged: false }
    style = {
        fontWeight: "bold"
    }

    render() { 
        return ( 
            <Container>
                <Container fluid>
                    <h4 style={this.style}>{this.props.statusText ? this.props.statusText : "Welcome to wonder-junk!"}</h4>
                </Container>
            </Container>

        );
    }
}
 


export default Navbar;