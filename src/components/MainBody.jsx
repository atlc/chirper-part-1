import React, { Component } from 'react';
import ChirpPane from './ChirpPane';
import CreateChirp from './CreateChirp';

class MainBody extends Component {

    render() {
        return (
            <React.Fragment>
                <CreateChirp />
                <ChirpPane />
            </React.Fragment>
        );
    }
}

export default MainBody;