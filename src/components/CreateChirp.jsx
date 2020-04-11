import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/helpers.css';


class CreateChirp extends Component {
    state = { chirpText: '' };

    componentDidUpdate() {
        // Add component for progress bar for character count/280
    }

    handleChirpTextUpdate(newText) {
        this.setState({chirpText: newText});
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col><h1 className="text-left text-white hr-thin pad-bot-10">{this.props.props.props.isLoggedIn ? 'Home' : 'Trends Around The Globe'}</h1></Col>
                </Row>
                <Row className="margin-top-5 margin-bot-10">
                    <Col>
                        <img className="bg-info" src={"https://image.flaticon.com/icons/png/128/92/92031.png"} height={64} width={64} alt="Icon of a raven" />
                        <Button className="badge-pill w-100 margin-top-10" variant="info" href="https://twitter.com/compose/tweet">Chirp</Button>
                    </Col>
                    <Col>
                        <textarea id="chirp-textarea" onChange={(e) => this.handleChirpTextUpdate(e.target.value)} defaultValue={`What's happening${this.props.props.props.user ? ', ' + this.props.props.props.user : ''}?`} maxLength="280" className="opaque-white-bg pad-bot-20 text-white" rows="4" cols="50"></textarea>
                    </Col>
                </Row>
                <Row><Col><p className="hr-thicc"></p></Col></Row>
            </React.Fragment>
        );
    }
}

export default CreateChirp;