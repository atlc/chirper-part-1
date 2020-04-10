import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

class TopPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            buttonOneText: 'Login',
            buttonTwoText: 'Sign up',
            user: this.props.userName
        }
        this.initialState = this.state;
    }

    async handleSignupDelete() {
        if (!this.state.isLoggedIn) {
            this.handleLoginLogout();
        } else {
            this.props.setUserName(null);
            this.setState(this.initialState);
        }
    }

    async handleLoginLogout() {
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
                this.props.setUserName(name);
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
            <Row className="justify-content-end margin-top-10 margin-bot-20 hr-thin pad-bot-10">
                <Col md={2}><Button onClick={() => this.handleLoginLogout()} className="badge-pill" variant="outline-info">{this.state.buttonOneText}</Button></Col>
                <Col md={2}><Button onClick={() => this.handleSignupDelete()} className="badge-pill" variant="info">{this.state.buttonTwoText}</Button></Col>
            </Row>
        );
    }
}

export default TopPanel;