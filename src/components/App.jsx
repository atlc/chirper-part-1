import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from './LeftSidebar';
import ChirpPane from './ChirpPane';
import TrendsPane from './TrendsPane';
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
                <Row>
                    <Col md={2} className="justify-content-md-left">
                        <LeftSidebar />
                    </Col>
                    <Col md={7}>
                        <ChirpPane />
                    </Col>
                    <Col md={3}>
                        <TrendsPane />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;