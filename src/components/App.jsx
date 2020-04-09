import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopPanel from './TopPanel';


class App extends Component {
    render() {
        return (
            <Container>
                <TopPanel />
            </Container>
        );
    }
}

export default App;