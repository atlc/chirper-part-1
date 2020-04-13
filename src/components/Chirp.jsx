import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Chirp extends Component {
    render() {
        return (
            <Row key={this.props.id} className="justify-content-center margin-top-5 margin-bot-5">
                <Card className="hr-thin vr-thin w-75 margin-bot-10 opaque-white-bg">
                    <Card.Header className="text-left">
                        <Col>
                            <img src={this.props.avatar} height={48} width={48} className="img-round" alt=''></img>
                        </Col>
                        <Col>
                            <div className="text-white font-weight-bold">{this.props.firstName} {this.props.lastName}</div>
                            <div className="text-muted font-italic">@{this.props.username}</div>
                        </Col>
                    </Card.Header>
                    <Card.Body>
                            <div className="text-center text-white">{this.props.text}</div>
                    </Card.Body>
                </Card>
            </Row>
        );
    }
}

export default Chirp;