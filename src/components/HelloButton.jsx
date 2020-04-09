import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Button from 'react-bulma-components';


class HelloButton extends Component {
    render() {
        return <Button color="success">Hello, world</Button>;
    }
}

export default HelloButton;