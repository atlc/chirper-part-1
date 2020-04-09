import React, { Component } from 'react';
import HelloButton from './HelloButton';
import Columns, { Column } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';


class App extends Component {
    render() {
        return (
            <div>
                <Columns>
                    <Column>
                        <HelloButton />
                    </Column>
                </Columns>
            </div>
        );
    }
}

export default App;