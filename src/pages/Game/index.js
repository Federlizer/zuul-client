import React from 'react';
import Zuul from 'zuul';

import './styles.css';

import GameConsole from '../../components/GameConsole';
import Inventory from '../../components/Inventory';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.onGameConsoleSubmit = this.onGameConsoleSubmit.bind(this);
        this.receiveOutputFunc = this.receiveOutputFunc.bind(this);

        this.state = {
            gameConsoleLines: [],
            game: new Zuul(this.receiveOutputFunc)
        }
    }

    componentDidMount() {
        this.state.game.start();
    }

    receiveOutputFunc(output) {
        const lines = output.split('\n');

        this.setState((state) => ({ gameConsoleLines: [...state.gameConsoleLines, ...lines]}))
    }

    onGameConsoleSubmit(input) {
        this.setState((state) => ({ gameConsoleLines: [...state.gameConsoleLines, input]}));
        this.state.game.takeTurn(input);
    }

    render() {
        return (
            <div className="Game">
                <Inventory />
                <GameConsole onSubmit={this.onGameConsoleSubmit} consoleLines={this.state.gameConsoleLines} />
            </div>
        );
    }
}

export default Game;
