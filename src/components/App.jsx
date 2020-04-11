import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSidebar from './LeftSidebar';
import MainBody from './MainBody';
import TrendsPane from './TrendsPane';
import LoginPanel from './LoginPanel';
import '../styles/helpers.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.isLoggedIn = React.createRef();
        this.user = React.createRef();
        this.state = {
            userName: null,
            isLoggedIn: false
        };
    }


    componentDidUpdate() {
        this.setState({
            isLoggedIn: this.isLoggedIn.current.state.isLoggedIn,
            userName: this.user.current.state.user
        });
    }

    render() {
        return (
            <Container>
                <LoginPanel ref={this.isLoggedIn} />
                <Row>
                    <Col md={2} className="justify-content-md-left">
                        <LeftSidebar ref={this.isLoggedIn} />
                    </Col>
                    <Col md={7} className="justify-content-md-center text-center vr-thin">
                        <MainBody ref={this.isLoggedIn} />
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