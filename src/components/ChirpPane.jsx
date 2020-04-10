import React, { Component } from 'react';

class ChirpPane extends Component {
    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="www.google.com">CHIRP CHIRP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">CHIRP CHIRP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.google.com">CHIRP CHIRP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="www.google.com">CHIRP CHIRP</a>
                </li>
            </ul>
        );
    }
}

export default ChirpPane;