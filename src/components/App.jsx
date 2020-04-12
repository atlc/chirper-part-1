import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import LeftSidebar from './LeftSidebar';
import MainBody from './MainBody';
import TrendsPane from './TrendsPane';
import '../styles/helpers.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            buttonOneText: 'Login',
            buttonTwoText: 'Sign up',
            user: null
        }
        this.initialState = this.state;
    }

    handleSignupDelete = async () => {
        if (!this.state.isLoggedIn) {
            this.handleLoginLogout();
        } else {
            this.setState(this.initialState);
        }
    }

    handleLoginLogout = async () => {
        if (!this.state.isLoggedIn) {
            const { value: name } = await Swal.fire({
                title: 'Input username',
                html:
                    '<input id="username-input" type="text" placeholder="Enter your username here">' +
                    '<br /><br />' +
                    '<input type="password" placeholder="Enter your password here">'
                ,
                focusConfirm: false,
                preConfirm: () => {
                  return document.getElementById('username-input').value
                }
            });
            if (name) {
                this.setState({user: name});
                this.setState({
                    isLoggedIn: true,
                    buttonOneText: 'Logout',
                    buttonTwoText: this.state.user ? `Delete @${this.state.user}` : 'Haxx, you logged in without a real account!'
                });
            }
        } else {
            this.setState(this.initialState);
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10 vr-thin">
                    <Col md={2}><Button onClick={this.handleLoginLogout} className="badge-pill vr-thin" variant="outline-info">{this.state.buttonOneText}</Button></Col>
                    <Col md={2}><Button onClick={this.handleSignupDelete} className="badge-pill vr-thin" variant="info">{this.state.buttonTwoText}</Button></Col>
                </Row>
                <Row>
                    <Col md={2} className="justify-content-md-left">
                        <LeftSidebar App={this.state} />
                    </Col>
                    <Col md={7} className="justify-content-md-center text-center vr-thin">
                        <MainBody App={this.state} />
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