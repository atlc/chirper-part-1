import React, { Component } from 'react';
import Chirp from './Chirp';

class PrerenderedChirps extends Component {
    state = {
        users: [],
        quotes: []
    }

    componentDidMount = async () => {
        await fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(json => this.setState({users:[...json.data]}))
            .then(() => fetch('https://reqres.in/api/users?page=2')
                .then(response => response.json())
                .then(json => this.setState({users: [...this.state.users, ...json.data]})));

        await fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(json => this.setState({quotes: json.splice(0,12)}));
    }

    render() {
        return (
            this.state.users.map((chirpData, i) => {
                return (
                    <Chirp
                        id={`${Math.random().toString(36).substr(2, 16)}_${Date.now().toString(36)}`}
                        avatar={chirpData.avatar}
                        firstName={chirpData.first_name}
                        lastName={chirpData.last_name}
                        username={`${chirpData.first_name.toLowerCase()}.${chirpData.last_name.toLowerCase()}`}
                        text={this.state.quotes[0] ? 
                            `"${this.state.quotes[i].text}" ${String.fromCharCode(160)} — ${String.fromCharCode(160)} ${this.state.quotes[i].author}`
                            : ''
                        }
                    />
                );
            })
        );
    }
};

export default PrerenderedChirps;