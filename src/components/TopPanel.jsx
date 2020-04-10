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
            const { value: name } = await Swal.fire({
                title: 'Input username',
                input: 'text',
                inputPlaceholder: 'Enter your desired username'
            });
            if (name) {
                this.props.setUserName(name);
            }
        }
        this.handleLoginLogout();
    }

    handleLoginLogout() {
        if (!this.state.isLoggedIn) {
            this.setState({
                isLoggedIn: true,
                buttonOneText: 'Logout',
                buttonTwoText: `Delete @${this.state.user}`
            });
        } else {
            this.setState(this.initialState);
        }
    }

    render() {
        return (
            <Row style={{marginTop: 10+'px'}} className="justify-content-end">
                <Col md={2}><Button onClick={() => this.handleLoginLogout()} className="badge-pill" variant="outline-info">{this.state.buttonOneText}</Button></Col>
                <Col md={2}><Button onClick={() => this.handleSignupDelete()} className="badge-pill" variant="info">{this.state.buttonTwoText}</Button></Col>
            </Row>
        );
    }
}

export default TopPanel;