import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TrendsPane extends Component {
    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10 grandchildren-width-100">
                <li className="nav-item">
                    <Button className="badge-pill disabled" variant="info">Birmingham Trends</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://old.reddit.com/r/Birmingham/new/"> r/Birmingham</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://weather.com/weather/today/l/d20ef0ab981eddeccb6fd6a2d668969fb6fb6f2ae3a5d2d627a89bd8b566ea41"> Weather</Button>
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