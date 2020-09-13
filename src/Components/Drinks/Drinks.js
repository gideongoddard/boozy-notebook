import React from 'react';
import './Drinks.css';
import Beer from '../Beer/Beer';
import Wine from '../Wine/Wine';

class Drinks extends React.Component {
    render() {
        return (
            <section className="drinks-intro">
                <h2>Your Saved Drinks</h2>
                <p>See what you've already saved.</p>
                <Beer beers={this.props.beers} />
                <Wine wines={this.props.wines} />
            </section>
        )
    }
}

export default Drinks;