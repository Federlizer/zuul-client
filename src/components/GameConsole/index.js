import React from 'react';

import './styles.css';

class GameConsole extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commandValue: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const newValue = e.target.value;
        this.setState({ commandValue: newValue });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ commandValue: '' })

        this.props.onSubmit(this.state.commandValue);
    }

    render() {
        const consoleHTML = this.props.consoleLines.map((line, i) => {
            return <p key={i}>{line}</p>
        })
        return (
            <div className="GameConsole">
                <div className="console">{consoleHTML}</div>
                <form className="controls" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Type your command here" 
                        value={this.state.commandValue} 
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Execute" />
                </form>
            </div>
        );
    }
}

export default GameConsole;
