import React from 'react';

import Login from './pages/Login';
import Game from './pages/Game';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: 'GAME',
        }
    }

    render() {
        let content;

        switch (this.state.currentView) {
            case 'LOGIN':
                content = <Login />
                break;
            case 'GAME':
                content = <Game />
                break;
            default:
                content = <h2>Loading</h2>
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default App;
