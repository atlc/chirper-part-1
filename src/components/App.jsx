import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import LoginPanel from './LoginPanel';

class App extends Component {
    constructor(props) {
        super(props);
        this.setUserName = this.setUserName.bind(this);
        this.state = {
            userName: null
        };
    }

    setUserName(name) {
        this.setState({userName: name});
    }

    render() {
        return (
            <Container>
                <LoginPanel setUserName={this.setUserName} />
            </Container>
        );
    }
}

export default App;