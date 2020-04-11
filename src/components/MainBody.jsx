import React, { Component } from 'react';
import ChirpPane from './ChirpPane';
import CreateChirp from './CreateChirp';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            isLoggedIn: this.props.isLoggedIn
        }
    }

    componentDidMount() {
        this.setState({
            user: this.props.user,
            isLoggedIn: this.props.isLoggedIn
        });
    }

    render() {
        return (
            <React.Fragment>
                <CreateChirp props={this.state} />
                <ChirpPane />
            </React.Fragment>
        );
    }
}

export default MainBody;