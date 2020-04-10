import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CreateChirp extends Component {
    componentDidUpdate() {
        // Add component for progress bar for character count/280
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col><h1 className="text-left text-white hr-thin pad-bot-10">Home</h1></Col>
                </Row>
                <Row className="margin-top-5 margin-bot-10">
                    <Col>
                        <img className="bg-info" src={"https://image.flaticon.com/icons/png/128/92/92031.png"} height={64} width={64} alt="Icon of a raven" />
                        <Button className="badge-pill w-100 margin-top-10" variant="info" href="https://twitter.com/compose/tweet">Chirp</Button>
                    </Col>
                    <Col>
                        <textarea id="chirp-textarea" maxLength="280" className="opaque-white-bg pad-bot-20 text-white" rows="4" cols="50">What's happening?</textarea>
                    </Col>
                </Row>
                <Row><Col><p className="hr-thicc"></p></Col></Row>
            </React.Fragment>
        );
    }
}

export default CreateChirp;