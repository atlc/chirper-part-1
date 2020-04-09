import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class TopPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            buttonOneText: 'Login',
            buttonTwoText: 'Sign up'
        }
        this.initialState = this.state;
    }

    handleLoginLogout() {
        console.log(this.state);
        if (!this.state.isLoggedIn) {
            this.setState({
                isLoggedIn: true,
                buttonOneText: 'Explore',
                buttonTwoText: 'Logout'
            });
        } else {
            this.setState(this.initialState);
        }
    }

    render() {
        return (
            <Row style={{marginTop: 10+'px'}} className="justify-content-end">
                <Col md={2}><Button onClick={() => this.handleLoginLogout()} className="badge-pill" variant="outline-info">{this.state.buttonOneText}</Button></Col>
                <Col md={2}><Button onClick={() => this.handleLoginLogout()} className="badge-pill" variant="info">{this.state.buttonTwoText}</Button></Col>
            </Row>
        );
    }
}

export default TopPanel;