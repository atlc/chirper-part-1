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

    handleChirpTextUpdate = (newText) => {
        this.setState({chirpText: newText.target.value});
    }

    render() {
        let chirpButtonAndIcon;
        if (this.props.MainBody.isLoggedIn) {
            chirpButtonAndIcon =
                <Col>
                    <img className="bg-info" src={"https://image.flaticon.com/icons/png/128/92/92031.png"} height={64} width={64} alt="Icon of a raven" />
                    <Button className="badge-pill w-100 margin-top-10" variant="info" href="https://twitter.com/compose/tweet">Chirp</Button>
                </Col>
        }

        return (
            <>
                <Row>
                    <Col><h1 className="text-center text-white hr-thin pad-bot-10">{this.props.MainBody.isLoggedIn ? 'Home' : 'Trends Around The Globe'}</h1></Col>
                </Row>
                <Row className="margin-top-5 margin-bot-10">
                    {chirpButtonAndIcon}
                    <Col>
                        <textarea id="chirp-textarea" disabled={!this.props.MainBody.isLoggedIn} onChange={this.handleChirpTextUpdate} placeholder={`${this.props.MainBody.user ? "What's happening, " + this.props.MainBody.user + "?" : "Log in to tell us what's good in the world."}`} maxLength="280" className="opaque-white-bg pad-bot-20 text-white hr-thin vr-thin" rows="4" cols="50"></textarea>
                    </Col>
                </Row>
                <Row><Col><p className="hr-thicc"></p></Col></Row>
            </>
        );
    }
}

export default CreateChirp;