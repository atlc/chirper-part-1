import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TrendsPane extends Component {
    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10">
                <li className="nav-item">
                    <Button className="badge-pill" variant="info">$LOCALE Trendz</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info"href="https://twitter.com/home"> Home</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info"href="https://twitter.com/explore"> Explore</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/notifications"> Notifications</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/messages"> Messages</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/bookmarks"> Bookmarks</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/lists"> Lists</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/profile"> Profile</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill w-100" variant="info" href="https://twitter.com/compose/tweet">Chirp</Button>
                </li>
            </ul>
        );
    }
}

export default TrendsPane;