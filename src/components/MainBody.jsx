import React, { Component } from 'react';
import ChirpPane from './ChirpPane';
import CreateChirp from './CreateChirp';

class MainBody extends Component {
    render() {
        return (
            <>
                <CreateChirp MainBody={this.props.App} />
                <ChirpPane />
            </>
        );
    }
}

export default MainBody;