import React from 'react';
import './Drinks.css';
import Beer from '../Beer/Beer';

class Drinks extends React.Component {
    render() {
        return (
            <section className="drinks-container">
                <h2>Your Saved Drinks</h2>
                <p>See what you've already saved.</p>
                <Beer beers={this.props.beers} />
            </section>
        )
    }
}

export default Drinks;