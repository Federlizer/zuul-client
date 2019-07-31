import React from 'react';

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    render() {
        const pitems = [
            {
                name: 'Sword',
                power: 10,
                type: 'Weapon',
            }
        ];

        const items = pitems.map((item, i) => {
            return (
                <div key={i}>
                    <p>{item.name}</p>
                    <p>{item.power}</p>
                    <p>{item.type}</p>
                </div>
            );
        });

        return (
            <div className="Inventory">
                {items}
            </div>
        );
    }
}

export default Inventory;
