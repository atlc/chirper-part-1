import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from './LeftSidebar';
import ChirpPane from './ChirpPane';
import TrendsPane from './TrendsPane';
import LoginPanel from './LoginPanel';
import '../styles/helpers.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleToggleLoginStatus = this.handleToggleLoginStatus.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.state = {
            userName: null,
            isLoggedIn: false
        };
    }

    handleToggleLoginStatus() {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
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
                        <LeftSidebar handleToggleLoginStatus={this.handleToggleLoginStatus} />
                    </Col>
                    <Col md={7} className="justify-content-md-center text-center vr-thin">
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