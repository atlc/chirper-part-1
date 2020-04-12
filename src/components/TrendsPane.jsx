import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TrendsPane extends Component {
    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10 grandchildren-width-100 pad-bot-10 hr-thin br-thin" style={{paddingRight: 15+'px'}}>
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
                    <Button className="badge-pill" variant="outline-info" href="https://www.al.com/birmingham/"> News (no comments!)</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://www.birminghamal.gov/"> City Governmentt</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html"> ADPH - COVID19</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://www.uab.edu/home/"> UAB</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://covalence.io/"> Covalence JS Bootcamp</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://innovationdepot.org/"> Innovation Depot</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://www.birminghamzoo.com/"> Birmingham Zoo</Button>
                </li>
            </ul>
        );
    }
}

export default TrendsPane;