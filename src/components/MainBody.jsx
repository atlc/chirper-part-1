import React, { Component } from 'react';
import ChirpPane from './ChirpPane';
import CreateChirp from './CreateChirp';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render() {
        return (
            <React.Fragment>
                <CreateChirp isLoggedIn={this.state.isLoggedIn} />
                <ChirpPane />
            </React.Fragment>
        );
    }
}

export default MainBody;