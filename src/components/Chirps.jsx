import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Chirps extends Component {
    state = {
        users: [],
        quotes: []
    }

    componentDidMount() {
        this.fetchDummyInfo();
    }

    fetchDummyInfo = async () => {
        await fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(json => this.setState({users:[...json.data]}))
            .then(() => fetch('https://reqres.in/api/users?page=2')
                .then(response => response.json())
                .then(json => this.setState({users: [...this.state.users, ...json.data]})));

        await fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(json => this.setState({quotes: json.splice(0,12)}))
    }


    render() {


        return (
            this.state.users.map((chirpData, i) => {
                return (
                    <Row key={chirpData.id} className="justify-content-center margin-top-5 margin-bot-5">
                        <Card className="hr-thin vr-thin w-75 margin-bot-10 opaque-white-bg">
                            <Card.Header className="text-left">
                                <Col>
                                    <img src={chirpData.avatar} height={48} width={48} className="img-round" alt=''></img>
                                </Col>
                                <Col>
                                    <div className="text-white font-weight-bold">{chirpData.first_name} {chirpData.last_name}</div>
                                    <div className="text-muted font-italic">@{chirpData.first_name.toLowerCase()}.{chirpData.last_name.toLowerCase()}</div>
                                </Col>
                            </Card.Header>
                            <Card.Body>
                                {this.state.quotes[0] ? 
                                    <div className="text-center text-white">"{this.state.quotes[i].text}" &nbsp;&nbsp;&nbsp;&nbsp; - {this.state.quotes[i].author}</div>
                                    : <> </>
                                }
                            </Card.Body>
                        </Card>
                    </Row>
                );
            })
        );
    }
};

export default Chirps;