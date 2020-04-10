import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopPanel from './TopPanel';

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
                <TopPanel setUserName={this.setUserName} user={this.state.userName}/>
            </Container>
        );
    }
}

export default App;